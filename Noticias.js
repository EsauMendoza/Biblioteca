import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

//PUTO

export default class Ac extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
<View style={{ height: '100%', width: '100%', borderColor: 'blue', borderWidth: 0, backgroundColor:'gainsboro'}}>
        
        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 50, marginTop: 10}}>Piso 1. Biblioteca Infantil y Juvenil 
          José Rosas Moreno.
          </Text>
          <Image source={require('./fotos/ico5.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-50, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 50, marginTop: 10}}>Piso 2. Acervo General 
          Contemporaneo.
          </Text>
          <Image source={require('./fotos/ico5.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-50, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 50, marginTop: 10}}>Piso 3. Hemeroteca Contemporánea.</Text>
          <Image source={require('./fotos/ico5.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-50, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 50, marginTop: 10}}>Piso 4. Colecciones Especiales
            Nacionales.
          </Text>
          <Image source={require('./fotos/ico5.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-50, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Piso 5. Colecciones
            Internacionales
          </Text>
          <Image source={require('./fotos/ico5.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Recursos Electrónicos</Text>
          <Image source={require('./fotos/ico5.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>
        

        
      </View>
    );
  }
}
