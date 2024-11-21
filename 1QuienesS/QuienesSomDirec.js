import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return <WebView source={{ uri: 'http://148.202.217.8/Directorio.php' }} style={{ marginTop: '3%', marginRight: '3%' }} />;
  }
}

export default MyWeb;
