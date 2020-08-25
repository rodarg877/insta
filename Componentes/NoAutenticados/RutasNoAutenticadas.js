import SignIn from './SignIn';
import SignUp from './SignUp';
import {StackNavigator} from 'react-navigation';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


/* const RutasNoAutenticadas = StackNavigator(
    {
    SignIn: {
        screen: SignIn,
    },
    SignUp: {
        screen: SignUp,
    },
},
    {
        headerMode: 'none'
    },
);
 */
const  Stack = createStackNavigator();

function RutasNoAutenticadas() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default  RutasNoAutenticadas ;