import * as React from 'react';
import BoasVindas from './src/Telas/BoasVindas';
import Login from './src/Telas/Login';
import Cadastro from './src/Telas/Cadastro';
import MudarSenha from './src/Telas/MudarSenha';
import Menu from './src/Telas/Menu/Menu';
import PostArtista from './src/Telas/Menu/PostArtista';
import NavegarPost from './src/Telas/Menu/NavegarPost';
import Pintores from './src/Telas/Categorias/Pintores';
import Fotografos from './src/Telas/Categorias/Fotografos';
import Musicos from './src/Telas/Categorias/Musicos';
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
        <Stack.Screen name="Menu" component={TabNavegacao} options={{headerShown: false}}/>
        <Stack.Screen name="MudarSenha" component={MudarSenha} />
        <Stack.Screen name="Perfil" component={Perfil} options={{title:'Minha Conta', headerTitleAlign: 'center'}} />
        <Stack.Screen name="BoasVindas" component={BoasVindas} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


  const RotaMenu = () => {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={Menu} options={{ headerTitleAlign: 'center' }} />
          <Stack.Screen name="Escreva algo" component={PostArtista} />
          <Stack.Screen name="Pintores" component={Pintores} />
          <Stack.Screen name="Fotografos" component={Fotografos} />
          <Stack.Screen name="Musicos" component={Musicos} />
          <Stack.Screen name="NavegarPost" component={NavegarPost} />
        </Stack.Navigator> 
      </NavigationContainer>
    )
  }

const TabNavegacao =  () => {
  return (

    //Container de navegação das telas "Menu", "Minha Conta" e "Descobrir"
    <NavigationContainer independent={true}>
       <Tab.Navigator initialRouteName='Menu'>

        <Tab.Screen 
          name="Menu" 
          component={RotaMenu} 
          options={{
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarIcon: ({size, color }) => (
              <MaterialCommunityIcons name='home' size= {40} color={color}/>
              ) 
            }} 
          />

        <Tab.Screen
            name="NavegarPost"
            component={NavegarPost} 
            options={{
              title:'Descobrir', 
              headerTitleAlign: 'center',
              tabBarLabelStyle: {
                  fontSize: 12
                },
                tabBarIcon: ({size, color, }) => (
                  <MaterialCommunityIcons name='crown' size= {40} color={color}/>
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