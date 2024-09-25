import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

const items = [
  { title: '1.1.1 Ramo Civil. Real Audiencia', image: require('./fotos/Antiguo2.jpg') },
  { title: '1.1.2 Ramo Criminal. Real Audiencia', image: require('./fotos/Antiguo3.jpg') },
  { title: '1.1.3 Ramo Fiscal. Real Audiencia', image: require('./fotos/Antiguo4.jpg') },
  { title: '1.1.4 Bienes de difuntos. Real Audiencia', image: require('./fotos/Antiguo6.jpg') }
];

const ItemButton = ({ title, image }) => (
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

const Piso1 = () => {
  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: 'gainsboro' }}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <ItemButton title={item.title} image={item.image} />}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
};

export default Piso1;
