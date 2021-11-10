import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
