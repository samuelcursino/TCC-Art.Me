import React, {useState, useEffect} from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  } from 'react-native';

const CaixaUsuarioFotografos = ({Nome, Sobrenome, catServicoNomeCategoria})=>{

 return (

  <TouchableOpacity>
    <View style={styleCaixaUsuario.containerArtista1}>
            <Image source={require('../../assets/Imagens/FotoCamera.jpg')} style={styleCaixaUsuario.BackgroundFoto} />
            <Image source={require('../../assets/Imagens/UsuarioM2.png')} style={styleCaixaUsuario.fotoPerfilArtista} /> 
              <Text style={styleCaixaUsuario.txtNomeArtistas}>{Nome} {Sobrenome}</Text>
              <Text style={styleCaixaUsuario.txtServicoDe}>Serviço de:</Text>
              <Text style={styleCaixaUsuario.txtCategoriaArtistas}>{catServicoNomeCategoria}</Text>
    </View>          
  </TouchableOpacity>

  )
}

const styleCaixaUsuario = StyleSheet.create({

  containerArtista1: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 5,
    width: 170,
    height: 200,
    // borderWidth: 3,
    // borderColor: '#F97316',
    margin: 6,
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 7,
    // left: 15
  },

  BackgroundFoto: {
    height: 116,
    width: 170,
    // marginVertical: 3,
    // marginTop: 5,
    // borderRadius: 7,
    // marginLeft: 9.5
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },

  fotoPerfilArtista: {
    top: 95,
    height: 40,
    width: 40,
    // marginEnd: 20, 
    // paddingTop: 25,
    left: 15,
    position: 'absolute'
    },  

    txtNomeArtistas: {
      fontSize: 12,
      marginTop: 20,
      // marginEnd: 50,
      // marginLeft: 55,
      marginHorizontal: 6,
      fontWeight: 'bold',
      color: '#666262'
    },

    txtServicoDe: {
      fontSize: 9,
      marginTop: 5,
      // marginEnd: 50,
      marginLeft: 7,
      // marginHorizontal: 20,
      // fontWeight: 'bold',
      color: '#666262'
    },

    txtCategoriaArtistas: {
      fontSize: 18,
      // marginTop: 20,
      // marginRight: 60,
      marginLeft: 7,
      // color: '#970C0C'
      // marginHorizontal: 20,
      fontWeight: 'bold',
    },

})

export default CaixaUsuarioFotografos;
  
 