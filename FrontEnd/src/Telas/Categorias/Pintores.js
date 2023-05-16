import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Pintores = ({navigation}) => {

    const [usuario, setUsuario] = useState([])
    console.log(usuario);
  
    useEffect(() => {
      getUsuario();
    }, []);   
  
    async function getUsuario() {
      let response = await AsyncStorage.getItem('usuarioData')
      let json = JSON.parse(response)
      setUsuario(json)
    }


return (

  <ScrollView>

    <View style={stylePintores.container}>
      <View style={stylePintores.containerColor}>

        <View style={{ flexDirection: 'row' }}>
        <Image source={require('../../../assets/Imagens/Vetor.png')} style={stylePintores.vetor} />

            <View style={stylePintores.selecao}>              
            <Text style={stylePintores.txtusuario}>Olá {usuario.nome}!</Text>              
            <Image source={require('../../../assets/Imagens/UsuarioMCategorias.png')} style={stylePintores.fotoPerfil} />            
            </View>

        </View>
    
    </View>
        
    <Text style={stylePintores.txtServicos}>Categorias</Text>



      </View>
    </ScrollView>

    )
}

const stylePintores = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
      },

      containerColor: {
        backgroundColor: '#FFBB1B',
      },

    vetor: {
        width: 32,
        height: 32,
        margin: 30,
        direction: 'ltr'
    },

    selecao: {
        direction: 'rtl',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        flex: 1
      },

    txtusuario: {
    direction: 'rtl',
    fontSize: 22,
    marginTop: 80,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
    color: 'black',
    top: -49,
    left: 60
    },

    fotoPerfil: {
    top: 16,
    height: 60,
    width: 60,
    // marginEnd: 20, 
    // paddingTop: 25,
    right: 230,
    position: 'absolute'
    },

    txtServicos: {
      fontSize: 22,
      marginTop: 8,
      fontWeight: 'bold',
      marginHorizontal: 20,
    },

})

export default Pintores;