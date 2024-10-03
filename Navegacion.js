import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerToggleButton, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, TouchableOpacity, View, SectionItem, Linking} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PRINCIPAL from './Principal'; import QS from './QuienesSom'; import AC from './AcervoComt'; import S from './Serv'; import AH from './AcervoHis';
import PISO1 from './Piso1'; import PISO2 from './Piso2'; import PISO3 from './Piso3'; import PISO2NOVE from './Piso2nove'; import PISO4 from './Piso4';
import PISO5 from './Piso5'; import BD from './BaseDatos'; import EVNTS from './Eventos'; import GH from './GaleriaHis'; import NTAS from './Noticias';
import QUIENESOMAB from './QuienesSomAB'; import HIS from './His'; import QUIENESSOMDIREC from './QuienesSomDirec'; import QuienesSomUbi from './QuienesSomUbi';
import QSR from './QuienesSomRedes'; import QSB from './QuienesSomBiblio'; import QSC from './QuienesSomCredi';
import ico6 from './fotos/ico6.png'; import ico9 from './fotos/ico9.png';

import SA from './ServAtencion'; import SB from './ServBiblio'; import SL from './ServList'; import SC from './ServCata'; import SR from './ServRecur'; import SF from './ServForm';


function ImageDrawerContent(navigation ) {
  return (
    <DrawerContentScrollView {...navigation }>
      <Image source={ require('./fotos/Logo.png') } resizeMethod="resize" resizeMode="contain" style={{ flex:1, alignSelf:"center", width:'80%', height:90, }} />
      <DrawerItemList {...navigation } />
      <SocialMediaLinks />
    </DrawerContentScrollView>
  );}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const LogoHeader = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'left', backgroundColor: 'white' }}>
  <Image
    source={require('./fotos/Logo.png')}
    style={{ height: '130%', width: '55%' }} 
    resizeMode="contain"
  />
</View>
);

const defaultScreenOptions = (title) => ({
  title,
  headerTitleAlign: 'center',
  headerTintColor: '#FF5800',
  headerTitleStyle: { fontWeight: 'bold', fontSize: 14 },
  headerStyle: {backgroundColor: 'white'},
});

const sections = [
  {
    title: 'Facebook',
    icon: require('./fotos/Fb.png'),
    link: 'https://www.facebook.com/bibliojalisco'
  },
  {
    title: 'Twitter',
    icon: require('./fotos/Tw.png'),
    link: 'https://x.com/BiblioJalisco'
  },
  {
    title: 'Instagram',
    icon: require('./fotos/Ins.png'),
    link: 'https://www.instagram.com/biblio_jalisco/?hl=es-la'
  },
  {
    title: 'Youtube',
    icon: require('./fotos/YT.png'),
    link: 'https://www.youtube.com/@bibliotecapublicadelestado384'
  },
];

const SocialMediaLinks = () => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
    {sections.map((section, index) => (
      <TouchableOpacity style={{borderWidth:0, borderColor:'black', marginTop: '45%'}} key={index} onPress={() => Linking.openURL(section.link)}>
        <Image source={section.icon} style={{ width: 30, height: 30}} />
      </TouchableOpacity>
    ))}
  </View>
);


const Navegacion = () => {
  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Principal"
        drawerContent={(props) => <ImageDrawerContent {...props} />} 
        screenOptions={({ navigation }) => ({
          drawerPosition: 'right',
          drawerActiveTintColor: '#FF5800',
          headerLeft: ({ route }) => {
            if (navigation.getState().routeNames[navigation.getState().index] === 'INICIO') {
              return null;
            }
            return (
              <TouchableOpacity 
               onPress={() => navigation.goBack()} 
              style={{ borderWidth: 0, borderColor: '#FF5800', padding: 4, borderLeftWidth: 10}} 
                >
                  <Image 
                    source={ico9} 
                    style={{ width: 20, height: 50 }} 
                    resizeMode="contain" 
                  />
                </TouchableOpacity>
            );
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image source={ico6} style={{ width: 70, height: 50 }} />
            </TouchableOpacity>
          ),
        })}
      >
      <Drawer.Screen name="INICIO"
      component={PRINCIPAL}
      options={{
        headerBackground: () => <LogoHeader/>,
        headerTitle: '',
        headerTitleAlign: 'center', 
        headerTintColor: '#FF5800',
        headerTitleStyle: { fontWeight: 'normal', fontSize: 15 },
        headerStyle: {backgroundColor: 'white'},
        drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' },
        drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' }
        }}/>

        <Drawer.Screen name="Qs" component={QS} options={{ ...defaultScreenOptions('QUIENES SOMOS'), drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' }, 
        drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' }}} />
        <Drawer.Screen name="S" component={S} options={{ ...defaultScreenOptions('SERVICIOS'), drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' },
        drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' } }} />
        <Drawer.Screen name="Ah" component={AH} options={{ ...defaultScreenOptions('ACERVO HISTORICO'), drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' },
        drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' } }} />
        <Drawer.Screen name="Ac" component={AC} options={{ ...defaultScreenOptions('ACERVO CONTEMPORÁNEO'), drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' }, 
        drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' }}} />
        <Drawer.Screen name="Piso1" component={PISO1} options={{ ...defaultScreenOptions('Piso 1.1 Archivo de la Real Audiencia'), drawerItemStyle: { display: 'none' } }}  />
        <Drawer.Screen name="Piso2" component={PISO2} options={{ ...defaultScreenOptions('Piso 2.3 Tesoro Álvarez del Castillo'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Piso3" component={PISO3} options={{ ...defaultScreenOptions('Piso 3 Hemeroteca histórica'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Piso2nove" component={PISO2NOVE} options={{ ...defaultScreenOptions('Piso 2.2 Novedades'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Piso4" component={PISO4} options={{ ...defaultScreenOptions('Piso 4.1 Fondo de Jalisco'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Piso5" component={PISO5} options={{ ...defaultScreenOptions('Piso 5.4 Ventana de Shanghái'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Bd" component={BD} options={{ ...defaultScreenOptions('BASE DE DATOS'), drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' },
        drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' } }} />
        <Drawer.Screen name="Evnts" component={EVNTS} options={{ ...defaultScreenOptions('EVENTOS'), drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' }, 
        drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' }}} />
        <Drawer.Screen name="Gh" component={GH} options={{ ...defaultScreenOptions('GALERÍA HISTÓRICA'), drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' },
        drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' } }} />
        <Drawer.Screen name="Ntas" component={NTAS} options={{ ...defaultScreenOptions('NOTICIAS'), drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' },
        drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' } }} />
        <Drawer.Screen name="Acerca" component={QUIENESOMAB} options={{ ...defaultScreenOptions('Acerca de la Biblioteca'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="His" component={HIS} options={{ ...defaultScreenOptions('Historia'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Direc" component={QUIENESSOMDIREC} options={{ ...defaultScreenOptions('Directorio'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ubi" component={QuienesSomUbi} options={{ ...defaultScreenOptions('Ubicación'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Qsr" component={QSR} options={{ ...defaultScreenOptions('Redes Sociales'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Qsb" component={QSB} options={{ ...defaultScreenOptions('Conoce la Biblioteca'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Qsc" component={QSC} options={{ ...defaultScreenOptions('Creditos'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Sa" component={SA} options={{ ...defaultScreenOptions('Atencion a Usuarios'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Sb" component={SB} options={{ ...defaultScreenOptions('Biblioteca Virtual'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Sl" component={SL} options={{ ...defaultScreenOptions('Listado de Servicios'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Sc" component={SC} options={{ ...defaultScreenOptions('Catalogo en Linea'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Sr" component={SR} options={{ ...defaultScreenOptions('Recursos Libres'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Sf" component={SF} options={{ ...defaultScreenOptions('Formato de Registro'), drawerItemStyle: { display: 'none' } }} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navegacion;



