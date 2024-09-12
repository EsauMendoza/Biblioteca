import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; import { Text, ImageBackground, Image, Button} from 'react-native';
import PRINCIPAL from './Principal'; import QS from './QuienesSom'; import AC from './AcervoComt'; import S from './Servicios'; import AH from './AcervoHis'; 
import PISO1 from './Piso1'; import PISO2 from './Piso2'; import PISO3 from './Piso3'; import PISO2NOVE from './Piso2nove'; import PISO4 from './Piso4'; import PISO5 from './Piso5'; 
import BD from './BaseDatos'; import EVNTS from './Eventos'; import GH from './GaleriaHis'; import NTAS from './Noticias'; 

import QUIENESOMAB from './QuienesSomAB'; import HIS from './His';

const Stack = createNativeStackNavigator();

const Navegacion = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name=" " component={PRINCIPAL} options={{headerBackground:()=>(<Image source={require('./fotos/Logo.png')} style={{borderColor: 'green', borderWidth: 0, height: '100%', width:'50%'}}></Image>)}}/>
                <Stack.Screen name="Qs" component={QS} options={{ title: 'Quiénes Somos',headerTitleAlign: 'center', headerTintColor: '#FF5800', headerTitleStyle:{fontWeight:'bold', fontSize:17} ,headerStyle: {backgroundColor: 'white'} }} />
                <Stack.Screen name="S" component={S} options={{ title: 'Servicios', headerTitleAlign: 'center', headerTintColor: '#FF5800', headerTitleStyle:{fontWeight:'bold', fontSize:17}, headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name="Ah" component={AH} options={{ title: 'Acervo Histórico', headerTitleAlign: 'center', headerTintColor: '#FF5800',headerTitleStyle:{fontWeight:'bold', fontSize:17}, headerStyle: {backgroundColor: 'white' } }} />
                <Stack.Screen name="Ac" component={AC} options={{ title: 'Acervo Contemporaneo', headerTitleAlign: 'center', headerTintColor: '#FF5800',headerTitleStyle:{fontWeight:'bold', fontSize:17}, headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name="Piso1" component={PISO1} options={{ title: 'Piso 1.1 Archivo de la Real Audiencia de la Nueva Galicia', headerTitleStyle:{fontWeight:'bold', fontSize:17}, headerTintColor: '#FF5800', headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name="Piso3" component={PISO3} options={{ title: 'Piso 3 Hemeroteca historica',  headerTintColor: '#FF5800', headerTitleStyle:{fontWeight:'bold', fontSize:17},headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name="Piso2" component={PISO2} options={{ title: 'Piso 2.3 Tesoro Álvarez del Castillo',  headerTintColor: '#FF5800', headerTitleStyle:{fontWeight:'bold', fontSize:17}, headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name="Piso2nove" component={PISO2NOVE} options={{ title: 'Piso 2.2 Novedades', headerTitleAlign: 'center', headerTitleStyle:{fontWeight:'bold', fontSize:17}, headerTintColor: '#FF5800', headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name="Piso4" component={PISO4} options={{ title: 'Piso 4.1 Fondo de Jalisco', headerTitleAlign: 'center',  headerTintColor: '#FF5800',  headerTitleStyle:{fontWeight:'bold', fontSize:17}, headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name="Piso5" component={PISO5} options={{ title: 'Piso 5.4 Ventana de Shanghái', headerTitleAlign: 'center',  headerTintColor: '#FF5800', headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name="Bd" component={BD} options={{ title: 'Bases De Datos', headerTitleAlign: 'center',  headerTintColor: '#FF5800', headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name="Evnts" component={EVNTS} options={{ title: 'EVENTOS', headerTitleAlign: 'center',  headerTintColor: '#FF5800', headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name="Gh" component={GH} options={{ title: 'GALERÍA HISTORICA', headerTitleAlign: 'center',  headerTintColor: '#FF5800', headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name="Ntas" component={NTAS} options={{ title: 'Noticias', headerTitleAlign: 'center',  headerTintColor: '#FF5800',headerTitleStyle:{fontWeight:'bold', fontSize:17}, headerStyle: { backgroundColor: 'white' } }} />

                <Stack.Screen name="Acerca" component={QUIENESOMAB} options={{ title: 'Acerca de la Biblioteca', headerTitleAlign: 'center',  headerTintColor: '#FF5800', headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name="His" component={HIS} options={{ title: 'Historia', headerTitleAlign: 'center',  headerTintColor: '#FF5800', headerStyle: { backgroundColor: 'white' } }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navegacion;