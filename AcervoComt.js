import React, { Component } from 'react'; 
import { View, Text, TouchableOpacity, Image } from 'react-native';

// Componente para cada piso
const PisoItem = ({ title, imageSource }) => (
  <TouchableOpacity 
    activeOpacity={1} 
    style={styles.pisoContainer}
  >
    <Image source={imageSource} style={styles.image} />
    <Text style={styles.pisoText}>{title}</Text>
    <Image source={require('./fotos/ico1.png')} style={styles.icon} />
  </TouchableOpacity>
);

export default class Ac extends Component {
  render() {
    const pisos = [
      { title: 'Piso 1. Biblioteca Infantil y Juvenil José Rosas Moreno.', image: require('./fotos/Libreria11.jpeg')},
      { title: 'Piso 2. Acervo General Contemporaneo.', image: require('./fotos/Libreria4.jpg') },
      { title: 'Piso 3. Hemeroteca Contemporánea.', image: require('./fotos/Libreria6.jpg') },
      { title: 'Piso 4. Colecciones Especiales Nacionales.', image: require('./fotos/Libreria7.jpg') },
      { title: 'Piso 5. Colecciones Internacionales', image: require('./fotos/Coleccion3.jpg') },
      { title: 'Recursos Electrónicos', image: require('./fotos/RE.png') },
    ];

    return (
      <View style={styles.container}>
        {pisos.map((piso, index) => (
          <PisoItem key={index} imageSource={piso.image} title={piso.title}/>
        ))}
      </View>
    );
  }
}

const styles = {
  container: {
    height: '100%', 
    width: '100%', 
    backgroundColor: 'gainsboro',
    borderColor: 'red',
    borderWidth: 0,
  },
  pisoContainer: {
    width: '95%', 
    height: 70, 
    backgroundColor: 'white', 
    marginTop: 20, 
    marginLeft: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  pisoText: {
    color: 'darkred', 
    fontSize: 12.5, 
    fontWeight: 'bold', 
    flex: 1,
    marginLeft:-20,
    borderWidth:0,
    borderColor:'red'
  },
  image: {
    height: 50, 
    width: 50, 
    borderRadius: 7,
    marginRight: '10%',
    borderWidth: 0,
    borderColor:'red'
  },
  icon: {
    width: 30, 
    height: 30,
    marginLeft: 'auto',
  }
};
