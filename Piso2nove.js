import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Linking} from 'react-native';

export default class Piso2nove extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ height: '100%', width: '100%', borderColor: 'red', borderWidth: 0, backgroundColor:'#eeeeee'}}>
        <View style={{ height: 200, width:370, borderColor: 'black', borderWidth: 0, backgroundColor:'#7b0000', marginLeft:10, marginTop:10}}></View>
        <Image source={require('./fotos/Coleccion2.jpg')} style={{borderColor: 'white', borderWidth: 0, height: 100, width:150, marginTop:-170, borderRadius:7, marginLeft:120,}}></Image>
        <TouchableOpacity activeOpacity={1}>
        <Text  style={{color: 'white',textDecorationLine: 'underline',fontWeight: 'bold', fontSize:15, marginLeft:100, borderColor: 'white', borderWidth: 0, width:220, height: 25, marginTop:15}}>Busqueda en base de datos</Text>
        <Image source={require('./fotos/ico2.png')} style={{ borderColor: 'white', borderWidth: 0, height: 25, width:25, marginLeft:75, marginTop:-25}}></Image>
        </TouchableOpacity>

        <Image source={require('./fotos/ico3.png')} style={{ borderColor: 'red', borderWidth: 0, height: 25, width:25, marginLeft:40, marginTop:50}}></Image>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize:15, marginLeft:70, borderColor: 'red', borderWidth: 0, width:150, height: 20, marginTop:-20}}>Presentación</Text>
        
        <View style={{borderWidth: 1,borderColor: 'gray', flexDirection: 'row', alignItems: 'center',flex: 0.0001, width:340, marginLeft:20, marginTop: 20}}></View>

        <View style={{ height: '32%', width: '86.5%', borderColor: 'red', borderWidth: 0, marginTop: 10, marginLeft:'5%'}}>
          <Text style={{color: 'black', fontSize:18, lineHeight: 25, textAlign: 'justify',  height: '100%', width: '100%'}}>Incluye las más recientes adquisiciones de libros, periódicos y revistas de circulación nacional e internacional, además donaciones realizadas por parte de cámaras editoriales y consulados participantes en la Feria Internacional del Libro de Guadalajara (FIL).
          laboratorio de cómputo y acceso a internet inalámbrico, juegos de mesa y un aula de trabajo.Se ubica en la Planta baja.</Text>
        </View>

        <View style={{borderWidth: 1,borderColor: 'gray', flexDirection: 'row', alignItems: 'center',flex: 0.0001, width:340, marginLeft:20, marginTop: 10}}></View>

        <TouchableOpacity activeOpacity={1} style={{ borderColor: 'blue', borderWidth: 0, height: '3%', width:'60%',marginLeft:'5%', marginTop:15}}>
        <Text  style={{fontWeight: 'bold', color: 'black', fontSize:15, marginLeft:30}}>Sitio de interés</Text>
        <Image source={require('./fotos/ico4.png')} style={{ borderColor: 'red', borderWidth: 0, height: '100%', width:'10%', marginTop:-20}}></Image>
        </TouchableOpacity>

        <Image source={require('./fotos/Logo.png')} style={{ borderColor: 'red', borderWidth: 0, height: '10%', width:'60%', marginLeft:'5%', marginTop:'4%'}}></Image>










      </View>
    )
  }
}
//onPress={() => Linking.openURL('https://google.com')}