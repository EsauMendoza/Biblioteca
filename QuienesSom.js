import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 

const MenuButton = ({ title, onPress, imageSource }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.button}>
    <Text style={styles.buttonText}>{title}</Text>
    <Image source={imageSource} style={styles.buttonImage} />
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
        onPress={() => {/* Navigate to corresponding screen */}} 
        imageSource={require('./fotos/Biblioteca1.jpg')}
      />
      <MenuButton 
        title="La Biblioteca en Redes Sociales" 
        onPress={() => {/* Navigate to corresponding screen */}} 
        imageSource={require('./fotos/Redes.png')}
      />
      <MenuButton 
        title="Creditos de la Aplicacion" 
        onPress={() => {/* Navigate to corresponding screen */}} 
        imageSource={require('./fotos/Biblioteca2.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'gainsboro',
  },
  button: {
    borderColor: 'blue',
    width: '96%',
    height: 70,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'darkred',
    fontSize: 12.5,
    fontWeight: 'bold',
    marginLeft: 80,
    marginTop: '7%',
  },
  buttonImage: {
    height: 50,
    width: 50,
    borderRadius: 7,
    marginLeft: 10,
    marginTop: -30,
  },
  iconImage: {
    marginLeft: '89%',
    width: 30,
    height: 30,
    position: 'absolute',
    top: '30%', // Ajusta según necesites
  },
});

export default App;
