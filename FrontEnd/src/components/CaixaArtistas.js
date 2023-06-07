import React, {useState, useEffect} from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  } from 'react-native';

const CaixaArtistas = ({Nome, Sobrenome, catServicoNomeCategoria})=>{

 return (

    <TouchableOpacity>
    <View style={styleCaixaArtista.containerUsuario1}>
      <Image source={require('../../assets/Imagens/Art.MeLogo.jpg')} style={styleCaixaArtista.fotoArtista} />
        <Text style={styleCaixaArtista.txtNomeArtistas}>{Nome}</Text>
        <Text style={styleCaixaArtista.txtNomeArtistas}>{Sobrenome}</Text>
        <Text style={styleCaixaArtista.txtCategoriaArtistas}>{catServicoNomeCategoria}</Text>
    </View>          
  </TouchableOpacity>

  )
}

const styleCaixaArtista = StyleSheet.create({

    containerUsuario1: {
        // display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 5,
        width: 170,
        height: 180,
        borderWidth: 3,
        borderColor: '#F97316',
        margin: 4,
        backgroundColor: 'white',
        borderRadius: 22,
        elevation: 5,
        left: 15
      },

      fotoArtista: {
        height: 90,
        width: 135,
        marginVertical: 3,
        marginTop: 5,
        borderRadius: 9,
        marginLeft: 9.5
      },

      txtNomeArtistas: {
        fontSize: 17,
        // marginTop: 20,
        // marginEnd: 50,
        marginLeft: 7,
        // marginHorizontal: 20,
        fontWeight: 'bold',
      },

      txtCategoriaArtistas: {
        fontSize: 12,
        // marginTop: 20,
        marginRight: 60,
        marginLeft: 7,
        color: '#970C0C'
        // marginHorizontal: 20,
        // fontWeight: 'bold',
      },
})

export default CaixaArtistas;
  
 