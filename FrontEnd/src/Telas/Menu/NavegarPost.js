import React, {useState, useEffect} from 'react';
import axios from "axios";
import configuration from '../../../configuration.json';
import { 
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList
  } from 'react-native';
import CaixaPost from '../../components/CaixaPost';


import AsyncStorage from '@react-native-async-storage/async-storage';

const NavegarPosts = ({navigation}) => {

  // "Pegar" o usuário que está conectado
    const [usuario, setUsuario] = useState([])
    // console.log(usuario);
  
    useEffect(() => {
      getUsuario();
    }, []);   
  
    async function getUsuario() {
      let response = await AsyncStorage.getItem('usuarioData')
      let json = JSON.parse(response)
      setUsuario(json)
    }

      // ------------------------------------ Rotas do axios que tráz as postagens e lista os artístas ------------------------------------

  const handleClickPostsPerfil = async () => {
    axios.get(`${configuration.url}/listarPostagem/:${usuario.id_usuario}`)

      .then(function (response) {
        console.log("Dados das postagens: " + JSON.stringify(response.data.data))
        setDadosPostagens(response.data.data)
        console.log(JSON.stringify(dados))

        
        //armazenando dados das postagens dos artístas em cache 
         AsyncStorage.setItem('postPerfilData', JSON.stringify(response.data.data))

        if (response == 201) {
        } else if (response == 404) {
          console.log("algo errado")
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }


// ------------------------------------ Rotas do axios que tráz as postagens e lista os artístas ------------------------------------

  const handleClickPosts = async (values) => {
    axios.get(`${configuration.url}/listarPostagem`)

      .then(function (response) {
        // console.log("Dados das postagens: " + JSON.stringify(response.data.data))
        console.log(response.data.data)
        setDadosPostagens(response.data.data)
        // console.log(JSON.stringify(dados))

        
        //armazenando dados das postagens dos artístas em cache 
         AsyncStorage.setItem('postData', JSON.stringify(response.data.data))

        if (response == 201) {
        } else if (response == 404) {
          console.log("algo errado")
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleClickPostsArtistas = async (values) => {
    axios.get(`${configuration.url}/listarUsuario`)

      .then(function (response) {
        // console.log("Dados dos artístas: " + JSON.stringify(response.data.data))
        console.log(response.data.data)
        setDadosPostagensArtista(response.data.data)
        // console.log(JSON.stringify(dados))

        
        //armazenando dados das postagens e os artístas em cache 
         AsyncStorage.setItem('postUserData', JSON.stringify(response.data.data))

        if (response == 201) {
        } else if (response == 404) {
          console.log("algo errado")
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const TrazerPostagem = ()=>{
    handleClickPosts()
    handleClickPostsArtistas()
    handleClickPostsPerfil()
  }

// -------------------------------------------------------------------------------------------------------------------

  
  // recuperar todas as postagens e os artístas do banco de dados
  const [dadosPostagens, setDadosPostagens] = useState(null)
  const [dadosPostagensArtista, setDadosPostagensArtista] = useState(null)
  console.log(dadosPostagens);
  console.log(dadosPostagensArtista);
  // const dadosPostagensCombinado = [...dadosPostagens, ...dadosPostagensArtista]

    useEffect(() => {
    getDadosPostagens()
  }, []); 

    async function getDadosPostagens() {
    let response = await AsyncStorage.getItem('postData')
    let json = JSON.parse(response)

    setDadosPostagens(json)

  }

  useEffect(() => {
    getDadosPostagensArtista()
  }, []); 

    async function getDadosPostagensArtista() {
    let response = await AsyncStorage.getItem('postUserData')
    let json = JSON.parse(response)

    setDadosPostagensArtista(json)

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

    <View style={stylePintores.recarregar}>
      <TouchableOpacity onPress={TrazerPostagem}>
        <Text style={stylePintores.txtRecarregar}>Recarregar</Text>
      </TouchableOpacity>  
    </View>

        <Text style={stylePintores.txtServicos}>Postagens</Text>
        <View style={stylePintores.categorias}>           

      <View>
        <FlatList
          data={dadosPostagens
            .reverse()
          }
          // contentContainerStyle={{marginEnd:5}}
          renderItem={({item})=><CaixaPost 
            Nome={(item.tbl_usuario.nome)} 
            Sobrenome={(item.tbl_usuario.sobrenome)} 
            catServicoNomeCategoria={(item.tbl_usuario.catServicoNomeCategoria)} 
            // Titulo={(item.titulo)} 
            desc_postagem={(item.desc_postagem)} />} 
          keyExtractor={(item)=>item.id_postagem}
        />
      </View>

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
      // marginTop: -26,
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

    recarregar: {
      borderRadius: 30,
      backgroundColor: '#F97316',     
      // marginBottom: -11,
      width: 100,
      height: 30,
      left: 285,
    },

    txtRecarregar: {
      color: 'white',
      fontSize: 16,
      left: 10,
      top: 3
    },

})

export default NavegarPosts;