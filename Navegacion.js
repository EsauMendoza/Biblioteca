import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerToggleButton, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PRINCIPAL from './Principal'; import QS from './QuienesSom'; import AC from './AcervoComt'; import S from './Servicios'; import AH from './AcervoHis';
import PISO1 from './Piso1'; import PISO2 from './Piso2'; import PISO3 from './Piso3'; import PISO2NOVE from './Piso2nove'; import PISO4 from './Piso4';
import PISO5 from './Piso5'; import BD from './BaseDatos'; import EVNTS from './Eventos'; import GH from './GaleriaHis'; import NTAS from './Noticias';
import QUIENESOMAB from './QuienesSomAB'; import HIS from './His'; import QUIENESSOMDIREC from './QuienesSomDirec'; import QuienesSomUbi from './QuienesSomUbi';
import QSR from './QuienesSomRedes'; import QSB from './QuienesSomBiblio'; import QSC from './QuienesSomCredi';
import ico6 from './fotos/ico6.png'; import ico9 from './fotos/ico9.png';


function ImageDrawerContent(navigation ) {
  return (
    <DrawerContentScrollView {...navigation }>
      <Image source={ require('./fotos/Logo.png') } resizeMethod="resize" resizeMode="contain" style={{ flex:1, alignSelf:"center", width:'80%', height:90, }} />
      <DrawerItemList {...navigation } />
    </DrawerContentScrollView>
  );}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const LogoHeader = () => (
  <Image
    source={require('./fotos/Logo.png')}
    style={{height: '100%', width: '50%' }}/>
  );

const defaultScreenOptions = (title) => ({
  title,
  headerTitleAlign: 'center',
  headerTintColor: '#FF5800',
  headerTitleStyle: { fontWeight: 'bold', fontSize: 14 },
  headerStyle: {backgroundColor: 'white'},
});

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="INICIO"
      component={PRINCIPAL}
      options={{
        headerBackground: () => <LogoHeader />,
        headerTitle: '',
        headerTitleAlign: 'center',
        headerTintColor: '#FF5800',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 14 },
        headerStyle: { backgroundColor: 'red' }
      }} 
    />
     <Stack.Screen name="Qs" component={QS} options={{ ...defaultScreenOptions('QUIENES SOMOS') }} />
        <Stack.Screen name="S" component={S} options={{ ...defaultScreenOptions('SERVICIOS') }} />
        <Stack.Screen name="Ah" component={AH} options={{ ...defaultScreenOptions('ACERVO HISTORICO') }} />
  </Stack.Navigator>
);

const Navegacion = () => {
  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Principal"
        drawerContent={(props) => <ImageDrawerContent {...props} />} 
        screenOptions={({ navigation }) => ({
          drawerPosition: 'right',
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
        headerBackground: () => <LogoHeader />,
        headerTitle: '',
        headerTitleAlign: 'center', 
        headerTintColor: '#FF5800',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 15 },
        headerStyle: {backgroundColor: 'red'} 
        }}/>

        <Drawer.Screen name="Qs" component={QS} options={{ ...defaultScreenOptions('QUIENES SOMOS') }} />
        <Drawer.Screen name="S" component={S} options={{ ...defaultScreenOptions('SERVICIOS') }} />
        <Drawer.Screen name="Ah" component={AH} options={{ ...defaultScreenOptions('ACERVO HISTORICO') }} />
        <Drawer.Screen name="Ac" component={AC} options={{ ...defaultScreenOptions('ACERVO CONTEMPORÁNEO') }} />
        <Drawer.Screen name="Piso1" component={PISO1} options={{ ...defaultScreenOptions('Piso 1.1 Archivo de la Real Audiencia') }} />
        <Drawer.Screen name="Piso2" component={PISO2} options={{ ...defaultScreenOptions('Piso 2.3 Tesoro Álvarez del Castillo') }} />
        <Drawer.Screen name="Piso3" component={PISO3} options={{ ...defaultScreenOptions('Piso 3 Hemeroteca histórica') }} />
        <Drawer.Screen name="Piso2nove" component={PISO2NOVE} options={{ ...defaultScreenOptions('Piso 2.2 Novedades') }} />
        <Drawer.Screen name="Piso4" component={PISO4} options={{ ...defaultScreenOptions('Piso 4.1 Fondo de Jalisco') }} />
        <Drawer.Screen name="Piso5" component={PISO5} options={{ ...defaultScreenOptions('Piso 5.4 Ventana de Shanghái') }} />
        <Drawer.Screen name="Bd" component={BD} options={{ ...defaultScreenOptions('BASE DE DATOS') }} />
        <Drawer.Screen name="Evnts" component={EVNTS} options={{ ...defaultScreenOptions('EVENTOS') }} />
        <Drawer.Screen name="Gh" component={GH} options={{ ...defaultScreenOptions('GALERÍA HISTÓRICA') }} />
        <Drawer.Screen name="Ntas" component={NTAS} options={{ ...defaultScreenOptions('NOTICIAS') }} />
        <Drawer.Screen name="Acerca" component={QUIENESOMAB} options={{ ...defaultScreenOptions('Acerca de la Biblioteca') }} />
        <Drawer.Screen name="His" component={HIS} options={{ ...defaultScreenOptions('Historia') }} />
        <Drawer.Screen name="Direc" component={QUIENESSOMDIREC} options={{ ...defaultScreenOptions('Directorio') }} />
        <Drawer.Screen name="Ubi" component={QuienesSomUbi} options={{ ...defaultScreenOptions('Ubicación') }} />
        <Drawer.Screen name="Qsr" component={QSR} options={{ ...defaultScreenOptions('Redes Sociales') }} />
        <Drawer.Screen name="Qsb" component={QSB} options={{ ...defaultScreenOptions('Conoce la Biblioteca') }} />
        <Drawer.Screen name="Qsc" component={QSC} options={{ ...defaultScreenOptions('Creditos') }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navegacion;
