import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

export default class Noticias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticias: [],
    };
  }

  componentDidMount() {
    this.fetchNoticias();
  }

  fetchNoticias = async () => {
    try {
      const response = await fetch('https://cuceimobile.space/Escuela/NoticiasBiblio.php?page=1');
      const textData = await response.text();
      const noticias = this.parseNoticias(textData); 
      this.setState({ noticias }, () => {
      });
    } catch (error) {
      console.error('Error fetching noticias:', error);
    }
  };

  parseNoticias = (text) => {
    const regex = /Título:\s*(.*?)<br>Texto:\s*(.*?)<br>enlace:\s*(.*?)<br>Fecha:\s*(.*?)<br>Imagen:\s*(.*?)<br>/g;
    const noticias = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      noticias.push({
        Título: match[1],
        Texto: match[2],
        enlace: match[3],
        Fecha: match[4],
        Imagen: match[5] || 'Sin imagen',
      });
    }

    return noticias;
  };

  handleEnlacePress = (enlace) => {
    Linking.openURL(enlace).catch((err) => console.error('Error al abrir enlace:', err));
  };

  renderNoticia = ({ item }) => (
    <View style={styles.noticiaContainer}>
      <Text style={styles.title}>{item.Título}</Text>
      <Text>{item.Texto}</Text>
      <Text>{item.Fecha}</Text>
      {item.Imagen !== 'Sin imagen' ? (
        <Image
          source={{ uri: item.Imagen }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : null}
      <TouchableOpacity onPress={() => this.handleEnlacePress(item.enlace)} style={styles.button}>
        <Text style={styles.buttonText}>Ver mas</Text>
      </TouchableOpacity>

    </View>
  );

  render() {
    const { noticias } = this.state;
    return (
      <View style={styles.container}>
        {noticias.length > 0 ? (
          <FlatList
            data={noticias}
            renderItem={this.renderNoticia}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text>No hay noticias disponibles</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  noticiaContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    elevation: 3,    
    borderWidth:0.5,
    borderColor:'gray'

  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 20, 
    textAlign: 'justify',
    marginBottom: 5,
    borderWidth:0,
    borderColor:'gray',
    
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginTop: 10,
    borderWidth:1,
    borderColor:'gray'
  },
  button: {
    backgroundColor: 'darkred',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    borderWidth:1,
    borderColor:'gray'
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
