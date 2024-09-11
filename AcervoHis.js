import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

export default class Ah extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ height: '100%', width: '100%', borderColor: 'blue', borderWidth: 0, backgroundColor:'gainsboro'}}>
        
        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 30, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Piso 1. Archivos y Mapoteca</Text>
          <Image source={require('./fotos/Antiguo2.jpg')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Piso 2. Biblioteca Álvarez del Castillo y Fonoteca</Text>
          <Image source={require('./fotos/Libreria4.jpg')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Piso 3. Periódicos de Jalisco</Text>
          <Image source={require('./fotos/Antiguo1.jpg')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 70, marginTop: 0}}>Piso 4. Publicaciones seriadas de Jalisco (Del S.XIX hasta 1982) y Fonoteca</Text>
          <Image source={require('./fotos/Libreria.jpg')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-60, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 60, marginTop: 0}}>Piso 5. Acervo General, Fondos Particulares, Cinemateca y Fototeca de Jalisco</Text>
          <Image source={require('./fotos/Libros3.jpg')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-50, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Piso 6. Fondos Especiales</Text>
          <Image source={require('./fotos/Libreria5.jpg')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>


        
      </View>
    );
  }
}
