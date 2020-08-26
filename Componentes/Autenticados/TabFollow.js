import Follow from './Follow';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


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