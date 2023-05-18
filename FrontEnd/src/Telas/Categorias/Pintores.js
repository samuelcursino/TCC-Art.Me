import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import BotaoPerfil from './BotaoPerfil';

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

<View style={stylePintores.backgroundColor}> 
    <View style={stylePintores.container}>

        <View style={{ flexDirection: 'row' }}>
        <Image source={require('../../../assets/Imagens/Vetor.png')} style={stylePintores.vetor} />

            <View style={stylePintores.selecao}>              
            <Text style={stylePintores.txtusuario}>Olá {usuario.nome}!</Text>              
            <Image source={require('../../../assets/Imagens/UsuarioMCategorias.png')} style={stylePintores.fotoPerfil} />            
            </View>

        </View>    
    </View>
        

        <Text style={stylePintores.txtServicos}>Serviços</Text>
        <View style={stylePintores.categorias}>         

          {/* <BotaoPerfil /> */}

        <TouchableOpacity>
          <View style={stylePintores.containerArtista1}>
            <Image source={require('../../../assets/Imagens/FotoPintando.png')} style={stylePintores.BackgroundFoto} />
            <Image source={require('../../../assets/Imagens/UsuarioM2.png')} style={stylePintores.fotoPerfilArtista} /> 
              <Text style={stylePintores.txtNomeArtistas}>Salvador Alcantara</Text>
              <Text style={stylePintores.txtServicoDe}>Serviço de:</Text>
              <Text style={stylePintores.txtCategoriaArtistas}>Pintor</Text>
          </View>          
       </TouchableOpacity>

       <TouchableOpacity>
          <View style={stylePintores.containerArtista2}>
            <Image source={require('../../../assets/Imagens/FotoPintando.png')} style={stylePintores.BackgroundFoto} />
            <Image source={require('../../../assets/Imagens/UsuarioM2.png')} style={stylePintores.fotoPerfilArtista} /> 
              <Text style={stylePintores.txtNomeArtistas}>Salvador Alcantara</Text>
              <Text style={stylePintores.txtServicoDe}>Serviço de:</Text>
              <Text style={stylePintores.txtCategoriaArtistas}>Pintor</Text>
          </View>          
       </TouchableOpacity>

       <TouchableOpacity>
          <View style={stylePintores.containerArtista3}>
            <Image source={require('../../../assets/Imagens/FotoPintando.png')} style={stylePintores.BackgroundFoto} />
            <Image source={require('../../../assets/Imagens/UsuarioM2.png')} style={stylePintores.fotoPerfilArtista} /> 
              <Text style={stylePintores.txtNomeArtistas}>Salvador Alcantara</Text>
              <Text style={stylePintores.txtServicoDe}>Serviço de:</Text>
              <Text style={stylePintores.txtCategoriaArtistas}>Pintor</Text>
          </View>          
       </TouchableOpacity>

       <TouchableOpacity>
          <View style={stylePintores.containerArtista4}>
            <Image source={require('../../../assets/Imagens/FotoPintando.png')} style={stylePintores.BackgroundFoto} />
            <Image source={require('../../../assets/Imagens/UsuarioM2.png')} style={stylePintores.fotoPerfilArtista} /> 
              <Text style={stylePintores.txtNomeArtistas}>Salvador Alcantara</Text>
              <Text style={stylePintores.txtServicoDe}>Serviço de:</Text>
              <Text style={stylePintores.txtCategoriaArtistas}>Pintor</Text>
          </View>          
       </TouchableOpacity>

       <TouchableOpacity>
          <View style={stylePintores.containerArtista5}>
            <Image source={require('../../../assets/Imagens/FotoPintando.png')} style={stylePintores.BackgroundFoto} />
            <Image source={require('../../../assets/Imagens/UsuarioM2.png')} style={stylePintores.fotoPerfilArtista} /> 
              <Text style={stylePintores.txtNomeArtistas}>Salvador Alcantara</Text>
              <Text style={stylePintores.txtServicoDe}>Serviço de:</Text>
              <Text style={stylePintores.txtCategoriaArtistas}>Pintor</Text>
          </View>          
       </TouchableOpacity>

       <TouchableOpacity>
          <View style={stylePintores.containerArtista6}>
            <Image source={require('../../../assets/Imagens/FotoPintando.png')} style={stylePintores.BackgroundFoto} />
            <Image source={require('../../../assets/Imagens/UsuarioM2.png')} style={stylePintores.fotoPerfilArtista} /> 
              <Text style={stylePintores.txtNomeArtistas}>Salvador Alcantara</Text>
              <Text style={stylePintores.txtServicoDe}>Serviço de:</Text>
              <Text style={stylePintores.txtCategoriaArtistas}>Pintor</Text>
          </View>          
       </TouchableOpacity>

        </View>

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
        backgroundColor: 'white',
      },

      backgroundColor: {
        backgroundColor: 'white'
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
      fontSize: 17,
      marginTop: -15,
      fontWeight: 'bold',
      marginHorizontal: 20,
      margin: 10
    },

    categorias: {
      flexDirection: 'row',
      marginHorizontal: 10
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
      elevation: 50,
      // left: 15
    },

    containerArtista2: {
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
      elevation: 50,
      left: 7
    },

    containerArtista3: {
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // padding: 5,
      width: 170,
      height: 200,
      // borderWidth: 3,
      // borderColor: '#F97316',
      // margin: 6,
      backgroundColor: 'white',
      borderRadius: 12,
      elevation: 50,
      // left: 15
      marginTop: 220,
      left: -358
    },

    containerArtista4: {
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // padding: 5,
      width: 170,
      height: 200,
      // borderWidth: 3,
      // borderColor: '#F97316',
      // margin: 6,
      backgroundColor: 'white',
      borderRadius: 12,
      elevation: 50,
      // left: 15
      marginTop: 220,
      left: -338
    },

    containerArtista5: {
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // padding: 5,
      width: 170,
      height: 200,
      // borderWidth: 3,
      // borderColor: '#F97316',
      // margin: 6,
      backgroundColor: 'white',
      borderRadius: 12,
      elevation: 50,
      // left: 15
      marginTop: 440,
      left: -696
    },

    containerArtista6: {
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // padding: 5,
      width: 170,
      height: 200,
      // borderWidth: 3,
      // borderColor: '#F97316',
      // margin: 6,
      backgroundColor: 'white',
      borderRadius: 12,
      elevation: 50,
      // left: 15
      marginTop: 440,
      left: -678
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

    txtNomeArtistas: {
      fontSize: 12,
      marginTop: 20,
      // marginEnd: 50,
      // marginLeft: 55,
      marginHorizontal: 6,
      fontWeight: 'bold',
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

export default Pintores;