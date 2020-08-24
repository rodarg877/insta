import SignIn from './SignIn';
import SignUp from './SignUp';
import {StackNavigator} from 'react-navigation';


const RutasNoAutenticadas = StackNavigator(
    {
    SignIn: {
        screen: SignUp,
    },
    SignUp: {
        screen: SignUp,
    },
},
    {
        headerMode: 'none'
    },
);
export { RutasNoAutenticadas };