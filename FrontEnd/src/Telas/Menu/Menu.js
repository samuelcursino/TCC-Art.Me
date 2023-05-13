import React, {useState, useEffect} from 'react';
import BotaoCategoria from '../Menu/BotaoCategoria';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView, 
  TouchableOpacity
  } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Touchable } from 'react-native/types';

const Menu = () => {

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


      <View style={styleMenu.container}>

        <View style={styleMenu.containerColor}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../../assets/Imagens/Vetor.png')} style={styleMenu.vetor} />

            <View style={styleMenu.selecao}>              
              <Text style={styleMenu.txtusuario}>Olá {usuario.nome}!</Text>              
              <Image source={require('../../../assets/Imagens/UsuarioM.png')} style={styleMenu.fotoPerfil} />            
            </View>

          </View>

          <View style={styleMenu.image}>
            <Image source={require('../../../assets/Imagens/Outdoor.png')} style={styleMenu.imgdetalhe} />
          </View>
        </View>



      <Text style={styleMenu.txtCategorias}>Categorias</Text>
      <View style={styleMenu.categorias}>
        
        <TouchableOpacity>
          <BotaoCategoria texto={'Pintores'} imagem={require('../../../assets/Imagens/Pintores.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <BotaoCategoria texto={'Fotógrafos'} imagem={require('../../../assets/Imagens/Fotografos.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <BotaoCategoria texto={'Músicos'} imagem={require('../../../assets/Imagens/Musicos.png')} />
        </TouchableOpacity>

      </View>



      <Text style={styleMenu.txtArtistasRecomendados}>Artistas Recomendados</Text>

      <View style={styleMenu.containerUsuario1}>
        <Image source={require('../../../assets/Imagens/art.png')} style={styleMenu.cara} />
        <Text>Jefferson
          Santos Fotografo
          <Image source={require('../../../assets/Imagens/estrela.png')} style={styleMenu.estrela} />
        </Text>

      </View>
      <View style={styleMenu.containeruser2}>
        <Image source={require('../../../assets/Imagens/art.png')} style={styleMenu.cara} />
        <Text>Jefferson
          Santos Fotografo
          <Image source={require('../../../assets/Imagens/estrela.png')} style={styleMenu.estrela} />
        </Text>

      </View>
      <View>

      </View>
  </View>

    </ScrollView>
      )}

const styleMenu = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  containerColor: {
    backgroundColor: '#FFBB1B',
  },
  
  fotoPerfil: {
    top: 20,
    height: 60,
    width: 60,
    // marginEnd: 20, 
    // paddingTop: 25,
    right: 230,
    position: 'absolute'
  },
  txtusuario: {
    direction: 'rtl',
    fontSize: 22,
    marginTop: 80,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
    color: 'white',
  },

  txtCategorias: {
    fontSize: 22,
    marginTop: 8,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },

  txtArtistasRecomendados: {
    fontSize: 19,
    marginTop: 20,
    margin: 5,
    marginHorizontal: 20,
    fontWeight: 'bold',
  },

  selecao: {
    direction: 'rtl',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    flex: 1
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pesquisa: {
    flex: 1,
    width: '90%',
    fontSize: 22,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    padding: 12
  },
  vetor: {
    width: 32,
    height: 32,
    margin: 30,
    direction: 'ltr'
  },

  categorias: {
    flexDirection: 'row',
    marginHorizontal: 10
  },

  art: {
    width: 70,
    height: 40,
    backgroundColor: 'white'
  },
  pintor: {
    width: 50,
    height: 50,
    marginVertical: 30,
    marginHorizontal: 20
  },
  quadro: {
    width: 0,
    height: 50,
    marginVertical: 30,
    marginHorizontal: 20
  },
  artesanato: {
    width: 50,
    height: 50,
    marginVertical: 30,
    marginHorizontal: 20
  },
  imgdetalhe: {
    alignItems: 'center',
    width: 390,
    height: 146,
    // left: 0,
    // right: 7,
    marginBottom: 35,
  },
  containerUsuario1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 150,
    height: 160,
    borderWidth: 3,
    borderColor: '#F97316',
    margin: 4,
    backgroundColor: 'white',
    borderRadius: 22,
    elevation: 50,
  },
  containeruser2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 150,
    height: 160,
    borderRadius: 2,
    borderWidth: 4,
    borderColor: '#F97316',
    margin: 4,
    marginTop: -163,
    backgroundColor: 'white',
    borderRadius: 12,
    left: 180
  },
  cara: {
    height: 76,
    width: 114,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 6,


  },
  estrela: {
    width: 10,
    height: 10,
    marginHorizontal: 10,
    marginVertical: 40
  }






});

export default Menu;