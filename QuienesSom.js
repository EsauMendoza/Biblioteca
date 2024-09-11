import { View, Text, TouchableOpacity, Image} from 'react-native';
import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native'; 

const App = () => {
  const N = useNavigation();

    return (
      <View style={{ height: '100%', width: '100%', borderColor: 'blue', borderWidth: 0, backgroundColor:'gainsboro'}}>
        
        <TouchableOpacity onPress={() => N.navigate('Acerca')} activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 30, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Acerca de la Biblioteca</Text>
          <Image source={require('./fotos/Libros1.jpg')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => N.navigate('His')} activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Historia</Text>
          <Image source={require('./fotos/Historia.jpg')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Directorio</Text>
          <Image source={require('./fotos/Logo2.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Ubicación</Text>
          <Image source={require('./fotos/Mapa.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Conoce la Biblioteca</Text>
          <Image source={require('./fotos/Biblioteca1.jpg')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>La Biblioteca en Redes Sociales</Text>
          <Image source={require('./fotos/Redes.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Creditos de la Aplicacion</Text>
          <Image source={require('./fotos/Biblioteca2.jpg')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>
        

        
      </View>
    );
  };

export default App;
