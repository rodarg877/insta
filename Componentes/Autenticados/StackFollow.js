import { StackNavigator } from 'react-navigation';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';
import { TabFollow } from './TabFollow';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* const StackFollow = StackNavigator({
    TabFollow: {
        screen: TabFollow,
        navigationOptions:{
            header: null,
        },
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
export { StackFollow }; */





const  Stack = createStackNavigator();

function StackFollow() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabFollow">
      <Stack.Screen name="TabFollow" component={TabFollow} options={{header: null}} />
      <Stack.Screen name="Autor" component={Autor} />
        <Stack.Screen name="Publicacion" component={Publicacion} />
        <Stack.Screen name="Comentarios" component={Comentarios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default  StackFollow ;