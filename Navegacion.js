import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image} from 'react-native';
import PRINCIPAL from './Principal'; import QS from './QuienesSom'; import AC from './AcervoComt'; import S from './Servicios'; import AH from './AcervoHis';
import PISO1 from './Piso1'; import PISO2 from './Piso2'; import PISO3 from './Piso3'; import PISO2NOVE from './Piso2nove'; import PISO4 from './Piso4';
import PISO5 from './Piso5'; import BD from './BaseDatos'; import EVNTS from './Eventos'; import GH from './GaleriaHis'; import NTAS from './Noticias';
import QUIENESOMAB from './QuienesSomAB'; import HIS from './His'; import QUIENESSOMDIREC from './QuienesSomDirec'; import QuienesSomUbi from './QuienesSomUbi';

const Drawer = createDrawerNavigator();

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

const Navegacion = () => {
  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Principal" >
      <Drawer.Screen name="INICIO"
      component={PRINCIPAL}
      options={{
        headerBackground: () => <LogoHeader />,
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navegacion;
