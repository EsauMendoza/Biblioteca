import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';

export default class Piso1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{ height: '100%', width: '100%', borderColor: 'blue', borderWidth: 0, backgroundColor:'gainsboro'}}>
        
        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:'96%', height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 30, marginTop: 20}}>3.1 Periódico de Jalisco</Text>
          <Image source={require('./fotos/Antiguo7.jpg')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:'89%', borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth:0, width:'96%', height: 70, backgroundColor:'white', marginTop: 20, marginLeft:10,borderRadius:5}}>
          <Text style={{color: 'darkred', fontSize:12.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:'60%', height: 40, marginTop: 10}}>4.1 Publicaciones Seriadas de Jalisco (Del S.XIX hasta 1982)</Text>
          <Image source={require('./fotos/Libreria7.jpg')} style={{ borderColor: 'blue', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
          <Image source={require('./fotos/ico1.png')} style={{marginLeft:'89%', borderColor: 'blue', borderWidth: 0, width:30, height: 30, marginTop:-40}}></Image>
        </TouchableOpacity>
        
      </View>
    );
  }
}
