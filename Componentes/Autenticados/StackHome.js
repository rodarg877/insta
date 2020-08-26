import Home from './Home';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

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
export default StackHome;