import { TabNavigator } from 'react-navigation';
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import Add from './Add';
import Profile from './Profile';
import StackFollow  from './StackFollow';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Follow from './Follow';


/* const RutasAutenticadas = TabNavigator({
    Home: {
        screen:StackHome,
    },
    Search: {
        screen: StackSearch,
    },
    Add: {
        screen: Add,
    },
    Follow: {
        screen: StackFollow,
    },
    Profile: {
        screen: Profile,
    },
},
    {
        tabBarPosition: 'bottom',
    })
export { RutasAutenticadas }; */

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

