import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const htmlPath = require('./LocalHTML.js')
const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={styles.container}
        originWhitelist={['*']}
        source={{
          uri: 'file:///android_asset/index.html',
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
