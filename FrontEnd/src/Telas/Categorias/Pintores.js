import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styleMenu from '../Menu/Menu';

const Pintores = ({navigation}) => {
    return (
        <View style={styleMenu.container}>

        <View style={styleMenu.containerColor}>
          <View style={{ flexDirection: 'row' }}>

            <Image source={require('../../../assets/Imagens/Vetor.png')} style={styleMenu.vetor} />

            <View style={styleMenu.selecao}>              
              <Text style={styleMenu.txtusuario}>Olá !</Text>              
              <Image source={require('../../../assets/Imagens/UsuarioM.png')} style={styleMenu.fotoPerfil} />            
            </View>

          </View>

          <View style={styleMenu.image}>
            <Image source={require('../../../assets/Imagens/Outdoor.png')} style={styleMenu.imgdetalhe} />
          </View>
        </View>
        </View>


    )
}

export default Pintores;