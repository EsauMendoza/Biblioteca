import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';

export default class S extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ height: '100%', width: '100%', borderColor: 'blue', borderWidth: 0, backgroundColor:'gainsboro'}}>
        
        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 30, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Atención a Usuarios</Text>
          <Image source={require('./fotos/Atencion.jpeg')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Biblioteca Virtual</Text>
          <Image source={require('./fotos/BibliotecaVirtual.jpg')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Listado de Servicios</Text>
          <Image source={require('./fotos/Auditorio.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Catálogo en Línea</Text>
          <Image source={require('./fotos/Libreria4.jpg')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>Recursos Libres en Internet</Text>
          <Image source={require('./fotos/Libros2.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:390, height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:10, borderColor: 'red', borderWidth: 0, width:320, height: 40, marginTop: 20}}>Formato de Registro Biblioteca Histórica Para Investigadores</Text>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:360, borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>
        
      </View>

    );
  }
}
