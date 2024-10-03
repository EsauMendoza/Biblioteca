import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuButton = ({ title, onPress, imageSource }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.button}>
    <Image source={imageSource} style={styles.buttonImage} />
    <Text style={styles.buttonText}>{title}</Text>
    <Image source={require('./fotos/ico1.png')} style={styles.iconImage} />
  </TouchableOpacity>
);

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MenuButton 
        title="Acerca de la Biblioteca" 
        onPress={() => navigation.navigate('Acerca')} 
        imageSource={require('./fotos/Libros1.jpg')}
      />
      <MenuButton 
        title="Historia" 
        onPress={() => navigation.navigate('His')} 
        imageSource={require('./fotos/Historia.jpg')}
      />
      <MenuButton 
        title="Directorio" 
        onPress={() => navigation.navigate('Direc')} 
        imageSource={require('./fotos/Logo2.png')}
      />
      <MenuButton 
        title="Ubicación" 
        onPress={() => navigation.navigate('Ubi')} 
        imageSource={require('./fotos/Mapa.png')}
      />
      <MenuButton 
        title="Conoce la Biblioteca" 
        onPress={() => navigation.navigate('Qsb')} 
        imageSource={require('./fotos/Biblioteca1.jpg')}
      />
      <MenuButton 
        title="La Biblioteca en Redes Sociales" 
        onPress={() => navigation.navigate('Qsr')} 
        imageSource={require('./fotos/Redes.png')}
      />
      <MenuButton 
        title="Creditos de la Aplicacion" 
        onPress={() => navigation.navigate('Qsc')} 
        imageSource={require('./fotos/Biblioteca2.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'gainsboro',
    alignItems: 'center', // Centra horizontalmente
    paddingTop: 20,
  },
  button: {
    flexDirection: 'row', // Alinea las imágenes, texto y la flecha en fila
    alignItems: 'center',
    justifyContent: 'space-between', // Distribuye elementos de manera uniforme
    width: '95%',
    height: 70,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10, // Espacio horizontal
  },
  buttonImage: {
    height: 50,
    width: 50,
    borderRadius: 7,
  },
  buttonText: {
    flex: 1, // Ocupa el espacio restante entre la imagen y la flecha
    color: 'darkred',
    fontSize: 12.5,
    fontWeight: 'bold',
    marginLeft: 20, // Separación entre la imagen y el texto
    textAlign: 'left', // Alinea el texto a la izquierda
  },
  iconImage: {
    width: 30,
    height: 30,
  },
});

export default App;
