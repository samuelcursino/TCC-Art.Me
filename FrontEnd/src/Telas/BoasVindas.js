import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BoasVindas = ({navigation}) => {
    return (
        <View style={StyleBoasVindas.telaBoasVindas}>
            <Image source={require('../../assets/Imagens/backgroundboasvindas.png')} style={StyleBoasVindas.arte} />
            <View style={StyleBoasVindas.campoinferior}>
                <Text style={StyleBoasVindas.textoBoasVindas}>
                    Escolha o serviço perfeito para você
                </Text>
                <Text style={StyleBoasVindas.textoBoasVindas}>
                    Por Artistas Criativos
                </Text>
                <TouchableOpacity style={StyleBoasVindas.fundobotao} onPress={()=>navigation.navigate('Login')}>
                    <Text style={StyleBoasVindas.textobotao}>Próximo</Text>
                </TouchableOpacity>
            </View>

        </View>


    )
}
const StyleBoasVindas = StyleSheet.create({

// Botão da tela de boas vindas
fundobotao:{
    backgroundColor: 'white',
    padding: 12,
    width:'50%',
    height: 50,
    margin:15,
    borderRadius:35     
  },

  // Texto do botão da tela de boas vindas    
  textobotao:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F97316'    
  },

  arte: {
    height: '75%',
    width: '100%',
    resizeMode: 'stretch'
  },

 telaBoasVindas: {
    flex: 1,
    backgroundColor: '#FFC700'
  },

  textoBoasVindas: {
    color: 'white',
    fontSize: 20    ,
    fontWeight: 'bold'
  },

  campoinferior:{
    justifyContent: 'center',
    alignItems: 'center'
  },

});

export default BoasVindas;

