import { StackNavigator } from 'react-navigation';
import Search from './Search';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* const StackSearch = StackNavigator({
    Search: {
        screen: Search,
    },
    Publicacion: {
        screen: Publicacion,
    },
    Autor: {
        screen: Autor,
    },
    Comentarios: {
        screen: Comentarios,
    },
})
export { StackSearch }; */




const  Stack = createStackNavigator();

function StackSearch() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Autor" component={Autor} />
        <Stack.Screen name="Publicacion" component={Publicacion} />
        <Stack.Screen name="Comentarios" component={Comentarios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default  StackSearch ;