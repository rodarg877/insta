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
      <Tab.Navigator initialRouteName="Follow">
        <Tab.Screen name="Follow" component={Follow} />
        <Tab.Screen name="Followers" component={Follow} />
      </Tab.Navigator>
  );
}
export default TabFollow;