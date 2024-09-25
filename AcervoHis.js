import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class Ah extends Component {
  renderFloorOption(floor, description, imgSrc) {
    return (
      <TouchableOpacity 
        activeOpacity={1} 
        style={styles.touchable}
      >
        <Text style={styles.text}>
          {`${floor}. ${description}`}
        </Text>
        <Image 
          source={imgSrc} 
          style={styles.image} 
        />
        <Image 
          source={require('./fotos/ico1.png')} 
          style={styles.icon}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderFloorOption('Piso 1', 'Archivos y Mapoteca', require('./fotos/Antiguo2.jpg'))}
        {this.renderFloorOption('Piso 2', 'Biblioteca Álvarez del Castillo y Fonoteca', require('./fotos/Libreria4.jpg'))}
        {this.renderFloorOption('Piso 3', 'Periódicos de Jalisco', require('./fotos/Antiguo1.jpg'))}
        {this.renderFloorOption('Piso 4', 'Publicaciones seriadas de Jalisco (Del S.XIX hasta 1982) y Fonoteca', require('./fotos/Libreria.jpg'))}
        {this.renderFloorOption('Piso 5', 'Acervo General, Fondos Particulares, Cinemateca y Fototeca de Jalisco', require('./fotos/Libros3.jpg'))}
        {this.renderFloorOption('Piso 6', 'Fondos Especiales', require('./fotos/Libreria5.jpg'))}
      </View>
    );
  }
}

const styles = {
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'gainsboro',
  },
  touchable: {
    width: '95%',
    height: 70,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
  },
  text: {
    color: 'darkred',
    fontSize: 12.5,
    fontWeight: 'bold',
    marginLeft: 80,
    width: '65%',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 7,
    marginLeft: 10,
    position: 'absolute',
    left: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 'auto',
    marginRight: 10,
  }
};
