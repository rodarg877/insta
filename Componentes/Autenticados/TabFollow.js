import { TabNavigator } from 'react-navigation';
import Follow from './Follow';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

/* const TabFollow = TabNavigator({
    Follow: {
        screen: Follow,
    },
    Followers: {
        screen: Follow,
    },
},
    {
        tabBarPosition: 'top',
    })
export { TabFollow }; */





const Tab = createMaterialTopTabNavigator();

function TabFollow() {
  return (
      <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Follow"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Follow"
        component={Follow}
        options={{ tabBarLabel: 'Follow' }}
      />
      <Tab.Screen
        name="Followers"
        component={Follow}
        options={{ tabBarLabel: 'Followers' }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default TabFollow;