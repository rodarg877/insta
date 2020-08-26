import StackHome from './StackHome';
import StackSearch from './StackSearch';
import Add from './Add';
import Profile from './Profile';
import StackFollow from './StackFollow';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

export default function RutasAutenticadas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={StackHome} />
        <Tab.Screen name="Search" component={StackSearch} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="Follow" component={StackFollow} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

