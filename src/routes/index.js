import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import Cadastrar from '../pages/Cadastrar'
import UsuarioCadastrado from '../pages/UsuarioCadastrado'
import CadastrarAnimais from '../pages/CadastrarAnimais'

const Stack = createNativeStackNavigator();

export default function Routes(){

    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component = {Welcome}
            options={{headerShown:false}}
            />
             <Stack.Screen
            name="Login"
            component = {Login}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Cadastrar"
            component = {Cadastrar}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="UsuarioCadastrado"
            component = {UsuarioCadastrado}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="CadastrarAnimais"
            component = {CadastrarAnimais}
            options={{headerShown:false}}
            />

        </Stack.Navigator>
    )
}