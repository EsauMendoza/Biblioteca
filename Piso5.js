import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const styles = {
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#eeeeee',
  },
  header: {
    height: '30%',
    width: '95%',
    backgroundColor: '#7b0000',
    margin: 10,
  },
  image: {
    borderRadius: 5,
    marginLeft: '20%',
    marginTop:'-20%',
  },
  button: {
    color: 'white',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 100,
    marginTop: 10,
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 75,
    marginTop: -25,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginLeft: 80,
    marginTop:-20
  },
  divider: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '95%',
    marginLeft: 10,
    marginTop: 20,
  },
  textContent: {
    color: 'black',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'justify',
    marginHorizontal: '5%',
    marginTop: 10,
  },
  interestButton: {
    borderColor: 'blue',
    borderWidth: 0,
    height: '3%',
    width: '60%',
    marginLeft: '5%',
  },
  logo: {
    height: '10%',
    width: '60%',
    marginLeft: '5%',
    marginTop: '2%',
  },
};

export default class Piso5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image source={require('./fotos/Libreria4.jpg')} style={[styles.image, { height: '20%', width: '60%', marginTop: -180 }]} />
        
        <TouchableOpacity activeOpacity={1}>
          <Text style={styles.button}>Busqueda en base de datos</Text>
          <Image source={require('./fotos/ico2.png')} style={styles.icon} />
        </TouchableOpacity>

        <Image source={require('./fotos/ico3.png')} style={[styles.icon, { marginLeft: 40, marginTop: 10 }]} />
        <Text style={styles.sectionTitle}>Presentación</Text>
        
        <View style={styles.divider} />

        <View style={{ height: '35%', width: '86.5%', marginLeft: '5%' }}>
          <Text style={styles.textContent}>
            Incluye las más recientes adquisiciones de libros, periódicos y revistas de circulación nacional e internacional, además donaciones realizadas por parte de cámaras editoriales y consulados participantes en la Feria Internacional del Libro de Guadalajara (FIL).
            laboratorio de cómputo y acceso a internet inalámbrico, juegos de mesa y un aula de trabajo
          </Text>
        </View>

        <TouchableOpacity activeOpacity={1} style={styles.interestButton}>
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginLeft: 30 }}>Sitio de interés</Text>
          <Image source={require('./fotos/ico4.png')} style={{ height: '100%', width: '10%', marginTop: -20 }} />
        </TouchableOpacity>

        <Image source={require('./fotos/Logo.png')} style={styles.logo} />
      </View>
    );
  }
}
