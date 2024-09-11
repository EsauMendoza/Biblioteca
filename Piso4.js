import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking} from 'react-native';

export default class Piso2nove extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ height: '100%', width: '100%', borderColor: 'red', borderWidth: 0, backgroundColor:'#eeeeee'}}>
        <View style={{ height: 200, width:370, borderColor: 'blue', borderWidth: 0, backgroundColor:'#7b0000', marginLeft:10, marginTop:10}}></View>
        <Image source={require('./fotos/Libreria10.jpg')} style={{borderColor: 'white', borderWidth: 0, height: '20%', width:'50%', marginTop:-180, borderRadius:7, marginLeft:100,}}></Image>
        <TouchableOpacity activeOpacity={1}>
        <Text  style={{color: 'white',textDecorationLine: 'underline',fontWeight: 'bold', fontSize:15, marginLeft:100, borderColor: 'white', borderWidth: 0, width:200, height: 25, marginTop:10}}>Busqueda en base de datos</Text>
        <Image source={require('./fotos/ico2.png')} style={{ borderColor: 'white', borderWidth: 0, height: 25, width:25, marginLeft:75, marginTop:-25}}></Image>
        </TouchableOpacity>

        <Image source={require('./fotos/ico3.png')} style={{ borderColor: 'red', borderWidth: 0, height: 25, width:25, marginLeft:40, marginTop:20}}></Image>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize:15, marginLeft:70, borderColor: 'red', borderWidth: 0, width:120, height: 20, marginTop:-20}}>Presentación</Text>
        
        <View style={{borderWidth: 1,borderColor: 'gray', flexDirection: 'row', alignItems: 'center',flex: 0.0001, width:340, marginLeft:20, marginTop: 20}}></View>

        <View style={{ height: '38%', width: '86.5%', borderColor: 'red', borderWidth: 0, marginTop: 10, marginLeft:'5%'}}>
          <Text style={{color: 'black', fontSize:16, lineHeight: 25, textAlign: 'justify',  height: '100%', width: '100%'}}>Área especializada en la que se puede acceder a conocimientos acerca de la cultura, el desarrollo económico, los aspectos educativos y otras temáticas del estado de Jalisco
            (sus municipios, autores, monumentos históricos, economía, urbanismo, estadísticas, etcétera). En el edificio del contemporáneo se cuenta con aproximadamente 13,893 mil volúmenes y varias revistas editadas en Jalisco de 1961 a la fecha.</Text>
        </View>

        <View style={{borderWidth: 1,borderColor: 'gray', flexDirection: 'row', alignItems: 'center',flex: 0.0001, width:340, marginLeft:20, marginTop: 20}}></View>

        <TouchableOpacity activeOpacity={0} style={{ borderColor: 'blue', borderWidth: 0, height: '13%', width:'60%',marginLeft:'5%'}}>
        <Text  style={{fontWeight: 'bold', color: 'black', fontSize:15, marginLeft:30, marginTop: 15}}>Sitios de interés</Text>
        <Image source={require('./fotos/ico4.png')} style={{ borderColor: 'red', borderWidth: 0, height: '20%', width:'10%', marginTop:-20}}></Image>
        </TouchableOpacity>

        <Image source={require('./fotos/Logo4.jpeg')} style={{ borderColor: 'red', borderWidth: 0, height: '10%', width:'60%', marginLeft:'5%', marginTop:'-9%'}}></Image>

      </View>
    )
  }
}