import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Cats from '../screens/Cats';
import Dogs from '../screens/Dogs';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Cats') {
              iconName = focused ? 'hand-left' : 'hand-left-outline';
            } else {
              iconName = focused ? 'ear' : 'ear-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#f04e98',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Cats" component={Cats} options={{title: 'Gatos'}} />
        <Tab.Screen name="Dogs" component={Dogs} options={{title: 'Perros'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
