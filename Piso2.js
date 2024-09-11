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
        <View style={{ height: 300, width:390, borderColor: 'black', borderWidth: 0, backgroundColor:'#7b0000', marginLeft:10, marginTop:10}}></View>
        <Image source={require('./fotos/Libros2.png')} style={{borderColor: 'white', borderWidth: 0, height: 180, width:280, marginTop:-260, borderRadius:7, marginLeft:65,}}></Image>
        <TouchableOpacity activeOpacity={0}>
        <Text  style={{color: 'white',textDecorationLine: 'underline',fontWeight: 'bold', fontSize:15, marginLeft:100, borderColor: 'white', borderWidth: 0, width:220, height: 25, marginTop:25}}>Busqueda en base de datos</Text>
        <Image source={require('./fotos/ico2.png')} style={{ borderColor: 'white', borderWidth: 0, height: 25, width:25, marginLeft:75, marginTop:-25}}></Image>
        </TouchableOpacity>

        <Image source={require('./fotos/ico3.png')} style={{ borderColor: 'red', borderWidth: 0, height: 25, width:25, marginLeft:40, marginTop:50}}></Image>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize:15, marginLeft:70, borderColor: 'red', borderWidth: 0, width:150, height: 20, marginTop:-20}}>Presentación</Text>
        
        <View style={{borderWidth: 1,borderColor: 'gray', flexDirection: 'row', alignItems: 'center',flex: 0.0001, width:340, marginLeft:20, marginTop: 20}}></View>

        <View style={{ height: '32%', width: '86.5%', borderColor: 'red', borderWidth: 0, marginTop: 10, marginLeft:'5%'}}>
          <Text style={{color: 'black', fontSize:16, lineHeight: 25, textAlign: 'justify',  height: '100%', width: '100%'}}>Dentro de la Colección privada se ha conformado el Tesoro de la Biblioteca Álvarez del Castillo. Entre ellas se incluyen las siguientes colecciones: Hemeroteca, Manuscritos, Impresos Europeos, Impresos Mexicanos, Impresos Jaliscienses, Lenguas Indígenas, Misceláneas, Códices Facsimilares y el Fondo Reservado.</Text>
        </View>

        <View style={{borderWidth: 1,borderColor: 'gray', flexDirection: 'row', alignItems: 'center',flex: 0.0001, width:340, marginLeft:20, marginTop: 0}}></View>

        <TouchableOpacity activeOpacity={0} style={{ borderColor: 'blue', borderWidth: 0, height: '13%', width:'60%',marginLeft:'5%'}}>
        <Text  style={{fontWeight: 'bold', color: 'black', fontSize:15, marginLeft:30, marginTop: 25}}>Sitios de interés</Text>
        <Image source={require('./fotos/ico4.png')} style={{ borderColor: 'red', borderWidth: 0, height: '20%', width:'10%', marginTop:-20}}></Image>
        </TouchableOpacity>

        <Image source={require('./fotos/Logo3.jpg')} style={{ borderColor: 'red', borderWidth: 0, height: '15%', width:'50%', marginLeft:'5%', marginTop:'-9%'}}></Image>










      </View>
    )
  }
}