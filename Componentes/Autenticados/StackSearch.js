import Search from './Search';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function StackSearch() {
    return (
        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Autor" component={Autor} />
            <Stack.Screen name="Publicacion" component={Publicacion} />
            <Stack.Screen name="Comentarios" component={Comentarios} />
        </Stack.Navigator>
    );
}
export default StackSearch;