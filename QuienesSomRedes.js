import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';

const sections = [
  {
    title: 'Biblioteca Publica del Estado de Jalisco',
    icon: require('./fotos/ico3,2.png'),
    link: 'https://www.ejemplo.com'
  },
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

const SectionItem = ({ title, icon, link }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => link && Linking.openURL(link)}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: -20,
      marginLeft: '5%',
      marginTop:-50,
      borderWidth:1,
      borderColor:'red'
    }}
  >
    <Image
      source={icon}
      style={{ width: 20, height: 20, marginRight: 10, marginTop:0}}
    />
    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', marginTop:'-1%'}}>
      {title}
    </Text>
  </TouchableOpacity>
);

const Piso2 = () => (
  <View style={{ flex: 1, backgroundColor: '#eeeeee', borderWidth:1, borderColor:'green'}}>
    <View style={{ height: '35%', backgroundColor: '#7b0000', margin: -20, borderRadius: 5, borderWidth:1, borderColor:'blue'}} />
    <Image
      source={require('./fotos/Biblioteca2.jpg')}
      style={{
        height: '20%',
        width: '60%',
        borderRadius: 7,
        position: 'absolute',
        top: 20,
        left: '20%'
      }}
    />

    {sections.slice(0, 1).map((section, index) => (
      <SectionItem key={index} title={section.title} icon={section.icon} link={section.link} />
    ))}

    <View
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        width: '90%',
        alignSelf: 'center',
        marginVertical: 15
      }}
    />

    <View
      style={{
        marginHorizontal: '5%',
        marginVertical: '-5%',
        borderColor: 'red',
        borderWidth: 1,
      }}>
      <Text style={{ fontSize: 18, lineHeight: 25, textAlign: 'justify', borderWidth: 1, borderColor: 'gray' }}>
        Dentro de nuestras instalaciones puede usted consultar a texto completo y de alta calidad muchas de las colecciones
        con su respectiva base de datos con el fin de ayudarle con su tarea de investigacion.
      </Text>
    </View>

    <View style={{marginTop: 20, borderWidth:1, borderColor:'blue', width:'100%', height:'25%'}}>
      <SectionItem title={sections[1].title} icon={sections[1].icon} link={sections[1].link} />
      <SectionItem title={sections[2].title} icon={sections[2].icon} link={sections[2].link} />
      <SectionItem title={sections[3].title} icon={sections[3].icon} link={sections[3].link} />
      <SectionItem title={sections[4].title} icon={sections[4].icon} link={sections[4].link} />
    </View>
  </View>
);

export default Piso2;
