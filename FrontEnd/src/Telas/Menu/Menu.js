import React, {useState, useEffect} from 'react';
import BotaoCategoria from '../../components/BotaoCategoria';
import axios from "axios";
import configuration from '../../../configuration.json';
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

const Menu = ( {navigation} ) => {

  // recuperar o usuario que está logado
  const [usuario, setUsuario] = useState([])
  console.log("Usuario conectado: " + JSON.stringify(usuario));

  useEffect(() => {
    getUsuario();
  }, []); 

  async function getUsuario() {
    let response = await AsyncStorage.getItem('usuarioData')
    let json = JSON.parse(response)
    setUsuario(json)
  }


// ------------------------------------ Rota do axios que tráz os artístas 'Pintores' ------------------------------------
  
  // recuperar todos os artístas pintores do banco de dados
  const [dadosPintores, setDadosPintores] = useState([])
  // console.log(dadosPintores);

  const handleClickPintores = async (values) => {
    axios.get(`${configuration.url}/listarUsuarioCATEGORIA/Pintor`)

      .then(function (response) {
        console.log("Dados dos Pintores: " + JSON.stringify(response.data.data))
        setDadosPintores(response.data.data)
        // console.log(JSON.stringify(dados))

        
        //armazenando dados dos artístas pintores em cache 
         AsyncStorage.setItem('pintoresData', JSON.stringify(response.data.data))

        if (response == 201) {
        } else if (response == 404) {
          console.log("algo errado")
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // constante que chama a função handleClickPintores e ao mesmo tempo navega até a tela pintores
  const NavegarPintores = () => {
    handleClickPintores()
    navigation.navigate('Pintores')
  }

// -------------------------------------------------------------------------------------------------------------------

// ------------------------------------ Rota do axios que tráz os artístas 'Fotógrafos' ------------------------------------
  
  // recuperar todos os artistas fotógrafos do banco de dados
  const [dadosFotografos, setDadosFotografos] = useState([])
  // console.log(dadosFotografos);

  const handleClickFotografos = async (values) => {
    axios.get(`${configuration.url}/listarUsuarioCATEGORIA/Fotógrafo`)

      .then(function (response) {
        console.log("Dados dos Fotógrafos: " + JSON.stringify(response.data.data))
        setDadosFotografos(response.data.data)
        // console.log(JSON.stringify(dados))

        
        //armazenando dados do usuario em cache 
         AsyncStorage.setItem('fotografosData', JSON.stringify(response.data.data))

        if (response == 201) {
        } else if (response == 404) {
          console.log("algo errado")
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // constante que chama a função handleClickFotografos e ao mesmo tempo navega até a tela Fotografos
  const NavegarFotografos = () => {
    handleClickFotografos()
    navigation.navigate('Fotografos')
  }

// -------------------------------------------------------------------------------------------------------------------

// ------------------------------------ Rota do axios que tráz os artístas 'Músicos' ------------------------------------
  
  // recuperar todos os artistas músicos do banco de dados
  const [dadosMusicos, setDadosMusicos] = useState([])
  // console.log(dadosMusicos);

  const handleClickMusicos = async (values) => {
    axios.get(`${configuration.url}/listarUsuarioCATEGORIA/Musico`)

      .then(function (response) {
        console.log("Dados dos Musicos: " + JSON.stringify(response.data.data))
        setDadosMusicos(response.data.data)
        // console.log(JSON.stringify(dados))

        
        //armazenando dados do usuario em cache 
         AsyncStorage.setItem('musicosData', JSON.stringify(response.data.data))

        if (response == 201) {
        } else if (response == 404) {
          console.log("algo errado")
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // constante que chama a função handleClickMusicos e ao mesmo tempo navega até a tela Musicos
  const NavegarMusicos = () => {
    handleClickMusicos()
    navigation.navigate('Musicos')
  }

// -------------------------------------------------------------------------------------------------------------------

  return (

  <View>
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
        
        <TouchableOpacity onPress={NavegarPintores} >
          <BotaoCategoria texto={'Pintores'} imagem={require('../../../assets/Imagens/Pintores.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={NavegarFotografos}>
          <BotaoCategoria texto={'Fotógrafos'} imagem={require('../../../assets/Imagens/Fotografos.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={NavegarMusicos}>
          <BotaoCategoria texto={'Músicos'} imagem={require('../../../assets/Imagens/Musicos.png')} />
        </TouchableOpacity>

      </View>



      <Text style={styleMenu.txtArtistasRecomendados}>Artistas Recomendados</Text>

      <TouchableOpacity>
        <View style={styleMenu.containerUsuario1}>
          <Image source={require('../../../assets/Imagens/FotoArtista.png')} style={styleMenu.fotoArtista} />
            <Text style={styleMenu.txtNomeArtistas}>Jefferson</Text>
            <Text style={styleMenu.txtNomeArtistas}>Santos</Text>
            <Text style={styleMenu.txtCategoriaArtistas}>Fotógrafo</Text>
        </View>          
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styleMenu.containerUsuario2}>
          <Image source={require('../../../assets/Imagens/FotoPintora.png')} style={styleMenu.fotoArtista} />
            <Text style={styleMenu.txtNomeArtistasBranco}>Alice</Text>
            <Text style={styleMenu.txtNomeArtistasBranco}>Duarte</Text>
            <Text style={styleMenu.txtCategoriaArtistas}>Pintor</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styleMenu.containerUsuario3}>
          <Image source={require('../../../assets/Imagens/FotoArtista.png')} style={styleMenu.fotoArtista} />
            <Text style={styleMenu.txtNomeArtistasBranco}>Jefferson</Text>
            <Text style={styleMenu.txtNomeArtistasBranco}>Santos</Text>
            <Text style={styleMenu.txtCategoriaArtistas}>Fotógrafo</Text>
        </View> 
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styleMenu.containerUsuario4}>
          <Image source={require('../../../assets/Imagens/FotoArtista.png')} style={styleMenu.fotoArtista} />
            <Text style={styleMenu.txtNomeArtistas}>Jefferson</Text>
            <Text style={styleMenu.txtNomeArtistas}>Santos</Text>
            <Text style={styleMenu.txtCategoriaArtistas}>Fotógrafo</Text>
        </View> 
      </TouchableOpacity>      

        <View>
      </View>
    </View>
  </ScrollView>
      
      <TouchableOpacity style={styleMenu.btnPost} onPress={() => navigation.navigate('Publicação')}>       
          <Text style={styleMenu.btnPost2}>+</Text>                
      </TouchableOpacity>

</View>

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
    top: 16,
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
    top: -49,
    left: 60
  },

  txtCategorias: {
    fontSize: 22,
    marginTop: 8,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },

  txtArtistasRecomendados: {
    fontSize: 17,
    marginTop: 20,
    margin: 5,
    marginHorizontal: 20,
    fontWeight: 'bold',
  },

  txtNomeArtistas: {
    fontSize: 17,
    // marginTop: 20,
    // marginEnd: 50,
    marginLeft: 7,
    // marginHorizontal: 20,
    fontWeight: 'bold',
  },

  txtNomeArtistasBranco: {
    fontSize: 17,
    // marginTop: 20,
    // marginEnd: 50,
    marginLeft: 7,
    // marginHorizontal: 20,
    fontWeight: 'bold',
    color: 'white'
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
    marginVertical: -25
  },

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
    // elevation: 50,
    left: 15
  },

  containerUsuario2: {
    // display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 5,
    width: 170,
    height: 180,
    borderWidth: 3,
    borderColor: '#F97316',
    margin: 4,
    backgroundColor: '#F97316',
    borderRadius: 22,
    // elevation: 50,
    marginTop: -185,
    left: 200
  },

  containerUsuario3: {
    // display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 5,
    width: 170,
    height: 180,
    borderWidth: 3,
    borderColor: '#F97316',
    margin: 4,
    backgroundColor: '#F97316',
    borderRadius: 22,
    // elevation: 50,
    left: 15
  },

  containerUsuario4: {
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
    // elevation: 50,
    marginTop: -185,
    left: 200
  },

  fotoArtista: {
    height: 90,
    width: 135,
    marginVertical: 3,
    marginTop: 5,
    borderRadius: 9,
    marginLeft: 9.5
  },

  estrela: {
    width: 10,
    height: 10,
    marginHorizontal: 10,
    marginVertical: 40
  },

  btnPost: {
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: '#F97316',
    marginLeft: 330,
    position: 'absolute',
    bottom: 20,
    // alignItems: 'center',
  },

  btnPost2: {
    fontSize: 45,
    // justifyContent: 'center',
    color: 'white',    
    textAlign:'center',
    marginTop: -7,
    paddingLeft: 1,
    fontWeight: '300',
    
  },

});

export default Menu;