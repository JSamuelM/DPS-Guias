import React from 'react';
import HomeScreen from './HomeScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import WebScreen from './WebScreen';
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Web: {
      screen: WebScreen,
    },
  },
  {initialRouteName: 'Home'},
);

export default createAppContainer(AppNavigator);