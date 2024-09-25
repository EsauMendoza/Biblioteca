import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Noticias extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>
          Titulo de la Noticias
          Fecha de la Noticia
          Descripcion de la noticia
        </Text>
      </View>
    );
  }
}
