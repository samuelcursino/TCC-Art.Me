import React, {useState, useEffect} from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  } from 'react-native';

const CaixaUsuarioPintores = ({Nome, Sobrenome, catServicoNomeCategoria, titulo, desc_postagem})=>{

 return (
    <View style={styleCaixaUsuario.containerArtista1}>
            <Image source={require('../../assets/Imagens/UsuarioM2.png')} style={styleCaixaUsuario.fotoPerfilArtista} /> 
              <Text style={styleCaixaUsuario.txtNomeArtistas}>{Nome} {Sobrenome}</Text>
              <Text style={styleCaixaUsuario.txtServicoDe}>Serviço de:</Text>
              <Text style={styleCaixaUsuario.txtCategoriaArtistas}>{catServicoNomeCategoria}</Text>
              {/* <Text style={styleCaixaUsuario.txtTituloPost}>{titulo}</Text> */}
              <Text style={styleCaixaUsuario.txtPost}>{desc_postagem}</Text>
    </View>          

  )
}

const styleCaixaUsuario = StyleSheet.create({

  containerArtista1: {
    display: 'flex',
    // padding: 5,
    flex: 1,
    // width: 370,
    // height: 200,
    backgroundColor: 'white',
    borderRadius: 12,
    // elevation: 50,
    borderWidth: 1,
    borderColor: '#F97316',
    marginTop: 7
  },

  fotoPerfilArtista: {
    top: 10,
    height: 40,
    width: 40,
    // marginEnd: 20, 
    // paddingTop: 25,
    left: 15,
    position: 'absolute'
    },  

    txtNomeArtistas: {
      fontSize: 15,
      marginTop: 20,
      // marginEnd: 50,
      marginLeft: 70,
      marginHorizontal: 6,
      fontWeight: 'bold',
      color: '#666262'
    },

    txtServicoDe: {
      fontSize: 12,
      marginTop: -25,
      // marginEnd: 50,
      marginLeft: 285,
      // marginHorizontal: 20,
      // fontWeight: 'bold',
      color: '#666262'
    },

    txtCategoriaArtistas: {
      fontSize: 18,
      // padding: 'alignItems',
      // marginTop: 20,
      // marginRight: 60,
      marginLeft: 275,
      // marginHorizontal: 20,
      fontWeight: 'bold',
    },

    txtTituloPost: {
      fontSize: 18,
      marginTop: 6,
      // marginRight: 60,
      // marginLeft: 280,
      marginHorizontal: 120,
      fontWeight: 'bold',
    },

    txtPost: {
      fontSize: 14,
      marginTop: 15,
      // marginRight: 60,
      // marginLeft: 10,
      marginHorizontal: 10,
      // flexWrap: 'wrap',
      // alignSelf: 'flex-start'
      padding: 9
    },

})

export default CaixaUsuarioPintores;
  
 