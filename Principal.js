import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, NavigationContainer} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require('./fotos/carrusel1.png'), require('./fotos/carrusel2.png'), require('./fotos/carrusel3.png'), require('./fotos/carrusel4.png'), require('./fotos/carrusel5.png'), require('./fotos/carrusel6.png'),
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 3000); // Tiempo entre imágenes

    return () => clearInterval(imageInterval);
  }, [currentImageIndex, images.length]);

  const N = useNavigation();

  return (
    <View style={{ height: '100%', width: '100%', borderColor: 'blue', borderWidth: 0, backgroundColor:'white'}}>
        <ScrollView>

            <Image source={images[currentImageIndex]} style={{ borderColor: 'gray', borderWidth: 1, marginLeft: 0, marginTop: 0, width: '100%', height: 200, borderRadius: 0 }}/>
            
            <TouchableOpacity onPress={() => N.navigate('Qs')} activeOpacity={1} style={{ borderColor: 'gray', borderWidth: 0.5, width:'100%', height: 70, backgroundColor:'white'}}>
                <Text style={{color: 'darkred',fontSize:18, fontWeight:'bold', marginLeft:20, borderColor: 'red', borderWidth: 0, width:100, height: 70,  marginTop: 10}}>QUIÉNES SOMOS</Text>
                <Image source={require('./fotos/ico1.png')} style={{ borderColor: 'red', borderWidth: 0, height: 30, width:30, marginLeft:140, marginTop: -60 }}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => N.navigate('S')} activeOpacity={1} style={{ borderColor: 'gray', borderWidth: 0.5, width:'100%', height: 70, backgroundColor:'#FF5800'}}>
                <Text style={{color: 'white',fontSize:18,fontWeight:'bold', marginLeft:250,  borderColor: 'blue', borderWidth: 0, width:120, height: 30, marginTop: 20}}>SERVICIOS</Text>
                <Image source={require('./fotos/ico1.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 30, width:30, marginLeft:350, marginTop: -30 }}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => N.navigate('Ah')} activeOpacity={1} style={{ borderColor: 'gray', borderWidth: 0.5, width:'100%', height: 70, backgroundColor:'white'}}>
                <Text style={{color: 'darkred', fontSize:18,fontWeight:'bold', marginLeft:20, borderColor: 'red', borderWidth: 0, width:150, height: 70, marginTop: 10}}>ACERVO HISTORICO</Text>
                <Image source={require('./fotos/ico1.png')} style={{ borderColor: 'red', borderWidth: 0, height: 30, width:30, marginLeft:140, marginTop: -60}}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => N.navigate('Piso1')} activeOpacity={1} style={{ borderColor: 'gray', borderWidth: 0.5, width:'100%', height: 70, backgroundColor:'gainsboro'}}>
                <Text style={{color: 'darkred', fontSize:13.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:250, height: 50, marginTop: 10}}>Piso 1.1 Archivo de la Real Audiencia de la Nueva Galicia</Text>
                <Image source={require('./fotos/piso1.1.jpg')} style={{ borderColor: 'red', borderWidth: 0, height: 50, width:50, marginTop:-50, borderRadius:7, marginLeft:10,}}></Image>
                <Text style={{color: 'darkred', fontSize:10, marginLeft:350, borderColor: 'blue', borderWidth: 0, width:40, height: 20, marginTop:-40}}>VER +</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => N.navigate('Piso3')} activeOpacity={1} style={{ borderColor: 'gray', borderWidth: 0.5, width:'100%', height: 70, backgroundColor:'gainsboro'}}>
                <Text style={{color: 'darkred', fontSize:13.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:210, height: 50, marginTop: 10}}>Piso 3 Hemeroteca Histórica</Text>
                <Image source={require('./fotos/Antiguo3.jpg')} style={{ borderColor: 'red', borderWidth: 0, height: 50, width:50, marginTop:-50, borderRadius:7, marginLeft:10,}}></Image>
                <Text style={{color: 'darkred', fontSize:10, marginLeft:350, borderColor: 'blue', borderWidth: 0, width:40, height: 20, marginTop:-30}}>VER +</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => N.navigate('Piso2')} activeOpacity={1} style={{ borderColor: 'gray', borderWidth: 0.5, width:'100%', height: 70, backgroundColor:'gainsboro'}}>
                <Text style={{color: 'darkred', fontSize:15,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:210, height: 50, marginTop: 10}}>Piso 2.3 Tesoro Álvares del Castillo</Text>
                <Image source={require('./fotos/Libreria.jpg')} style={{ borderColor: 'red', borderWidth: 0, height: 50, width:50, marginTop:-50, borderRadius:7, marginLeft:10,}}></Image>
                <Text style={{color: 'darkred', fontSize:10, marginLeft:350, borderColor: 'blue', borderWidth: 0, width:40, height: 20, marginTop:-30}}>VER +</Text>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => N.navigate('Ac')} activeOpacity={1} style={{ borderColor: 'gray', borderWidth: 0.5, width:'100%', height: 70, backgroundColor:'#FF5800'}}>
                <Text style={{color: 'white',fontSize:18,fontWeight:'bold', marginLeft:170,  borderColor: 'blue', borderWidth: 0, width:180, height: 25, marginTop: 10, textAlign:'left'}}>ACERVO</Text>
                <Text style={{color: 'white',fontSize:18,fontWeight:'bold', marginLeft:170,  borderColor: 'blue', borderWidth: 0, width:180, height: 25, marginTop: 0}}>COMTEMPORÁNEO</Text>
                <Image source={require('./fotos/ico1.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 30, width:30, marginLeft:350, marginTop: -40 }}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => N.navigate('Piso2nove')} activeOpacity={1} style={{ borderColor: 'gray', borderWidth: 0.5, width:'100%', height: 70, backgroundColor:'gainsboro'}}>
                <Text style={{color: 'darkred', fontSize:13.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:210, height: 30, marginTop: 20}}>Piso 2.2 Novedades</Text>
                <Image source={require('./fotos/Libreria5.jpg')} style={{ borderColor: 'red', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
                <Text style={{color: 'darkred', fontSize:10, marginLeft:350, borderColor: 'blue', borderWidth: 0, width:40, height: 20, marginTop:-40}}>VER +</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => N.navigate('Piso4')} activeOpacity={1} style={{ borderColor: 'gray', borderWidth: 0.5, width:'100%', height: 70, backgroundColor:'gainsboro'}}>
                <Text style={{color: 'darkred', fontSize:13.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:210, height: 30, marginTop: 20}}>Piso 4.1 Fondo de Jalisco</Text>
                <Image source={require('./fotos/Libreria2.jpg')} style={{ borderColor: 'red', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
                <Text style={{color: 'darkred', fontSize:10, marginLeft:350, borderColor: 'blue', borderWidth: 0, width:40, height: 20, marginTop:-30}}>VER +</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => N.navigate('Piso5')} activeOpacity={1} style={{ borderColor: 'gray', borderWidth: 0.5, width:'100%', height: 70, backgroundColor:'gainsboro'}}>
                <Text style={{color: 'darkred', fontSize:13.5,fontWeight:'bold', marginLeft:80, borderColor: 'red', borderWidth: 0, width:220, height: 30, marginTop: 20}}>Piso 5.4 Ventana de Shangai</Text>
                <Image source={require('./fotos/Coleccion.jpg')} style={{ borderColor: 'red', borderWidth: 0, height: 50, width:50, marginTop:-40, borderRadius:7, marginLeft:10,}}></Image>
                <Text style={{color: 'darkred', fontSize:10, marginLeft:350, borderColor: 'blue', borderWidth: 0, width:40, height: 20, marginTop:-30}}>VER +</Text>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => N.navigate('Bd')} activeOpacity={1} style={{ borderColor: 'gray', borderWidth: 0.5, width:'100%', height: 70, backgroundColor:'white'}}>
                <Text style={{color: 'darkred', fontSize:18,fontWeight:'bold', marginLeft:20, borderColor: 'red', borderWidth: 0, width:150, height: 70, marginTop: 20}}>BASES DE DATOS</Text>
                <Image source={require('./fotos/ico1.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 30, width:30, marginLeft:170, marginTop:-70 }}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => N.navigate('Evnts')} activeOpacity={1} style={{ borderColor: 'gray', borderWidth: 0.5, width:'100%', height: 70, backgroundColor:'#FF5800'}}>
                <Text style={{color: 'white', fontSize:18,fontWeight:'bold', marginLeft:265, borderColor: 'blue', borderWidth: 0, width:100, height: 30, marginTop: 20}}>EVENTOS</Text>
                <Image source={require('./fotos/ico1.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 30, width:30, marginLeft:350, marginTop: -30 }}></Image>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => N.navigate('Gh')}activeOpacity={1} style={{ borderColor: 'gray', borderWidth: 0.5, width:'100%', height: 70, backgroundColor:'white'}}>
                <Text style={{color: 'darkred', fontSize:18,fontWeight:'bold', marginLeft:20, borderColor: 'blue', borderWidth: 0, width:120, height: 70, marginTop: 10}}>GALERÍA HISTORIA</Text>
                <Image source={require('./fotos/ico1.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 30, width:30, marginLeft:140, marginTop: -60 }}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => N.navigate('Ntas')}activeOpacity={1} style={{ borderColor: 'gray', borderWidth: 0.5, width:'100%', height: 70, backgroundColor:'#FF5800'}}>
                <Text style={{color: 'white', fontSize:18,fontWeight:'bold', marginLeft:265, borderColor: 'blue', borderWidth: 0, width:100, height: 30, marginTop: 20}}>NOTICIAS</Text>
                <Image source={require('./fotos/ico1.png')} style={{ borderColor: 'blue', borderWidth: 0, height: 30, width:30, marginLeft:350, marginTop: -30 }}></Image>
            </TouchableOpacity>
        </ScrollView>
    </View>
  );
};

export default App;
//adb reverse tcp:8081 tcp:8081
