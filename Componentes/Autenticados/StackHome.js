import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* const StackHome = StackNavigator({
    Home: {
        screen: Home,
    },
    Autor: {
        screen: Autor,
    },
    Publicacion: {
        screen: Publicacion,
    },
    Comentarios: {
        screen: Comentarios,
    },
})
export { StackHome }; */



const  Stack = createStackNavigator();

function StackHome() {
  return (
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Autor" component={Autor} />
        <Stack.Screen name="Publicacion" component={Publicacion} />
        <Stack.Screen name="Comentarios" component={Comentarios} />
      </Stack.Navigator>
  );
}
export default  StackHome ;