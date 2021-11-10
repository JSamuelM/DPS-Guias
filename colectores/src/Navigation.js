import React from 'react'
import AddManifold from './screens/AddManifold';
import ManifoldList from './screens/ManifoldList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="AddManifold"
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'AddManifold') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else {
            iconName = focused ? 'list-circle' : 'list-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        // tabBarActiveTintColor: ''
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen name="AddManifold" component={AddManifold} options={{title: 'Agregar Colector'}} />
      <Tab.Screen name="ManifoldList" component={ManifoldList} options={{title: 'Listado de Colectores'}} />
    </Tab.Navigator>
  )
}

export default Navigation
