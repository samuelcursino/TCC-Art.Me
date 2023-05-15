import * as React from 'react';
import BoasVindas from './src/Telas/BoasVindas';
import Login from './src/Telas/Login';
import Cadastro from './src/Telas/Cadastro';
import MudarSenha from './src/Telas/MudarSenha';
import Menu from './src/Telas/Menu/Menu';
import Pintores from './src/Telas/Categorias/Pintores';
import Perfil from './src/Telas/Perfil';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const StackNavegacao =  () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='Menu'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Menu" component={TabNavegacao} />
        <Stack.Screen name="MudarSenha" component={MudarSenha} />
        <Stack.Screen name="Perfil" component={Perfil} options={{title:'Minha Conta', headerTitleAlign: 'center'}} />
        <Stack.Screen name="BoasVindas" component={BoasVindas} options={{headerShown:false}} />
        <Stack.Screen name="Pintores" component={Pintores} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const TabNavegacao =  () => {
  return (

    //Container de navegação das telas "Menu" e "Minha Conta"
    <NavigationContainer independent={true}>
       <Tab.Navigator initialRouteName='Menu'>

        <Tab.Screen 
          name="Menu" 
          component={Menu} 
          options={{
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarIcon: ({size, color }) => (
              <MaterialCommunityIcons name='home' size= {40} color={color}/>
              ) 
            }} 
          />

        <Tab.Screen
          name="Perfil"
          component={Perfil} 
          options={{
            title:'Minha Conta', 
            headerTitleAlign: 'center',
            tabBarLabelStyle: {
                fontSize: 12
              },
              tabBarIcon: ({size, color, }) => (
                <MaterialCommunityIcons name='account-box' size= {40} color={color}/>
                ) 
            }} 
          />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default StackNavegacao;