import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const data = [
  { key: '1', title: 'Tesoros', image: require('./fotos/GaleriaHis.png') },
  { key: '2', title: 'Biblias', image: require('./fotos/GaleriaHis2.png') },
  { key: '3', title: 'Ramo fiscal', image: require('./fotos/GaleriaHis3.png') },
  { key: '4', title: 'Sala Jalisciense', image: require('./fotos/GaleriaHis4.png') },
  { key: '5', title: 'Plano de Guadalajara', image: require('./fotos/GaleriaHis5.png') },
  { key: '6', title: 'Real Audiencia', image: require('./fotos/GaleriaHis.png') },
];

export default class Gh extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({ item }) => (
    <View style={styles.box}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.footerText}>{item.title}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.key}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  box: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor:'gray',
    borderWidth:1
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  footerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    paddingVertical: 8,
    backgroundColor: '#e0e0e0',
    width: '100%',
  },
});
