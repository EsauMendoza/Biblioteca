import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

const services = [
  { title: 'Atención a Usuarios', image: require('./fotos/Atencion.jpeg') },
  { title: 'Biblioteca Virtual', image: require('./fotos/BibliotecaVirtual.jpg') },
  { title: 'Listado de Servicios', image: require('./fotos/Auditorio.png') },
  { title: 'Catálogo en Línea', image: require('./fotos/Libreria4.jpg') },
  { title: 'Recursos Libres en Internet', image: require('./fotos/Libros2.png') },
  { title: 'Formato de Registro Biblioteca Histórica Para Investigadores', image: null }
];

const ServiceButton = ({ title, image }) => (
  <TouchableOpacity
    activeOpacity={1}
    style={{
      borderColor: 'gray',
      borderWidth: 1,
      width: '95%',
      height: 70,
      backgroundColor: 'white',
      marginTop: 20,
      marginLeft: 10,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10
    }}
  >
    {image && (
      <Image
        source={image}
        style={{
          borderColor: 'blue',
          borderWidth: 0,
          height: 50,
          width: 50,
          borderRadius: 7
        }}
      />
    )}
    <Text style={{ color: 'darkred', fontSize: 12.5, fontWeight: 'bold', flex: 1, marginLeft: 20 }}>
      {title}
    </Text>
    <Image
      source={require('./fotos/ico1.png')}
      style={{
        width: 30,
        height: 30,
        marginLeft: 'auto'
      }}
    />
  </TouchableOpacity>
);

const ServicesScreen = () => {
  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: 'gainsboro' }}>
      <FlatList
        data={services}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <ServiceButton title={item.title} image={item.image} />}
        contentContainerStyle={{ paddingVertical: 30 }}
      />
    </View>
  );
};

export default ServicesScreen;