import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  Alert, 
  BackHandler 
  
} from 'react-native';

import CaixaPost from '../components/CaixaPost';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';






const Postagens = () => {

  
  

  // ------------------------------------ Rotas do axios que tráz as postagens e lista os artístas ------------------------------------

  const handleClickPostsPerfil = async () => {
    axios.get(`${configuration.url}/listarPostagem/:${usuario.id_usuario}`)

      .then(function (response) {
        console.log("Dados das postagens: " + JSON.stringify(response.data.data))
        setDadosPostagens(response.data.data)
        console.log(JSON.stringify(dados))

        
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

  // const handleClickPostsArtistas = async (values) => {
  //   axios.get(`${configuration.url}/listarUsuario`)

  //     .then(function (response) {
  //       // console.log("Dados dos artístas: " + JSON.stringify(response.data.data))
  //       setDadosPostagensArtista(response.data.data)
  //       // console.log(JSON.stringify(dados))

        
  //       //armazenando dados das postagens e os artístas em cache 
  //        AsyncStorage.setItem('postUserData', JSON.stringify(response.data.data))

  //       if (response == 201) {
  //       } else if (response == 404) {
  //         console.log("algo errado")
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  const TrazerPostagem = ()=>{
    handleClickPosts()
    setClicou(1)
  }

// -------------------------------------------------------------------------------------------------------------------

  
  // recuperar todas as postagens e os artístas do banco de dados
  const [dadosPostagens, setDadosPostagens] = useState(null)
  // const [dadosPostagensArtista, setDadosPostagensArtista] = useState(null)
  // console.log(dadosPostagens);
  // console.log(dadosPostagensArtista);
  // const dadosPostagensCombinado = [...dadosPostagens, ...dadosPostagensArtista]

    useEffect(() => {
    getDadosPostagens()
  }, []); 

    async function getDadosPostagens() {
    let response = await AsyncStorage.getItem('postData')
    let json = JSON.parse(response)

    setDadosPostagens(json)

  }

  // useEffect(() => {
  //   getDadosPostagensArtista()
  // }, []); 

  //   async function getDadosPostagensArtista() {
  //   let response = await AsyncStorage.getItem('postUserData')
  //   let json = JSON.parse(response)

  //   setDadosPostagensArtista(json)

  // }

  return (
    <View>
        <FlatList
          data={dadosPostagens}
          renderItem={({item})=><CaixaPost 
            Nome={(item.tbl_usuario.nome)} 
            Sobrenome={(item.tbl_usuario.sobrenome)} 
            catServicoNomeCategoria={(item.tbl_usuario.catServicoNomeCategoria)} 
            desc_postagem={(item.desc_postagem)} />} 
          keyExtractor={(item)=>item.id_postagem}
        />
      </View>
  )
};

const Sobre = () => {
  [value, onChangeText] = React.useState();

  return (
   
      <View style={stylePerfil.containertexto}>

<View style={stylePerfil.espacoDescricao}>
          <TextInput

            editable
            multiline 
            numberOfLines={3}
            placeholder='Escreva Algo...'
            maxLength={150}
            onChangeText={text => onChangeText(text)}
            value={value}
            style={{ padding: 1 }}>
            



          </TextInput>
        </View>

        <View style={stylePerfil.direcaobotao}>
          <TouchableOpacity>
            <Image source={require('../../assets/Imagens/cross.png')} style={stylePerfil.botaocross} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/Imagens/check.png')} style={stylePerfil.botaocross} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/Imagens/edit.png')} style={stylePerfil.botaocross} />
          </TouchableOpacity>
          
        </View>

       




        <View style={stylePerfil.carac}>

          {/* <View style={stylePerfil.caixacarac}>
            <Image source={require('../../assets/Imagens/museu.png')} style={stylePerfil.museu} />
            <TextInput color= {'grey'} maxLength={30} style={stylePerfil.textocarac2}>
            Formação
            </TextInput>
          </View> */}

          <View style={stylePerfil.caixacarac}>
            <Image source={require('../../assets/Imagens/fixar-mapa.png')} style={stylePerfil.local} />
            <TextInput 
            color= {'grey'} maxLength={15} style={stylePerfil.textocarac2}>
              Estado
            </TextInput>
          </View>

          

        </View>
        <View style={stylePerfil.caixacarac}>
            <Image source={require('../../assets/Imagens/phone.png')} style={stylePerfil.telefone} />
            <TextInput color= {'grey'} maxLength={14} style={stylePerfil.textocarac3}>
              Contato
            </TextInput>
          </View>
      </View>
   
  )
};


const Perfil = () => {

  const [mostrarPostagens, setMostrarPostagens] = useState(false)
  const [mostrarSobre, setMostrarSobre] = useState(false)

  const [clicou, setClicou] = useState(0)

  useEffect(() => {
    clicou === 1 ? (setMostrarPostagens(true)) : (setMostrarPostagens(false))
  }, [clicou])

  useEffect(() => {
    clicou === 2 ? (setMostrarSobre(true)) : (setMostrarSobre(false))
  }, [clicou])



  const [usuario, setUsuario] = useState([])
  console.log(usuario);

  useEffect(() => {
    getUsuario();
  }, [])

  async function getUsuario() {
    let response = await AsyncStorage.getItem('usuarioData')
    let json = JSON.parse(response)
    setUsuario(json)
  }


return (
    

  <View style={stylePerfil.tela}>

    <TouchableOpacity>
      <Image source={require('../../assets/Imagens/Vetor.png')} style={stylePerfil.vet} />
    </TouchableOpacity>


    <View style={stylePerfil.beck}>

      <View>
        <TouchableOpacity style={stylePerfil.btnSair}
          onPress={() => {
            Alert.alert(
              'Sair',
              'Deseja sair do aplicativo ?',
              [
                { text: 'Não', onPress: () => console.log('Saida cancelada'), style: 'cancel' },
                { text: 'Sim', onPress: () => BackHandler.exitApp() },
              ],
              { cancelable: false });
            return true;
          }}>
            <Text style={stylePerfil.txtSair}>Sair</Text>
        </TouchableOpacity>

      </View>

        <Image source={require('../../assets/Imagens/UsuarioM.png')} style={stylePerfil.margem} />

          <Text style={stylePerfil.samu}>
            {usuario.nome} {usuario.sobrenome}
          </Text>

          <Text style={stylePerfil.catArtista}>
            {usuario.catServicoNomeCategoria}
          </Text>
         
    </View>


    <View>

      <View style={stylePerfil.botoes}>
        <TouchableOpacity style={stylePerfil.escolhas} onPress={() => setClicou(1)}>
          <Text>
            Postagens
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylePerfil.escolhas} onPress={() => setClicou(2)}>
          <Text>Sobre</Text>

        </TouchableOpacity>


      </View>
          {
            mostrarPostagens === true ? <Postagens /> : <View></View>
          }

          {
            mostrarSobre === true ? <Sobre /> : <View></View>
          }

    </View>
  </View>

)}

const stylePerfil = StyleSheet.create({
  containerLogin: {
    margin: 80,
    alignItems: 'center',
    justifyContent: 'center',

  },
  beck: {
    width: '90%',
    backgroundColor: '#FFBB1B',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 9
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    borderRadius: 30,
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10

  },
  red: {
    color: '#FF0000',
    margin: 10,
    fontWeight: 'bold'
  },
  margem: {
    height: 70,
    width: 70,
  },
  samu: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 20
  },

  catArtista: {
    // fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 13
  },

  // edit: {
  //   fontWeight: 'bold',
  //   color: '#FFFFFF'
    
  // },
  texto1: {
    margin: 10
  },
  edit: {
    height: 20,
    width: 300,
    color: 'white',
    marginLeft: 3
  },
  tela: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 170
  },
  botoes: {
    flexDirection: 'row',
    marginHorizontal: 120
  },
  museu: {
    width: 25,
    height: 25,
  },
  local: {
    width: 25,
    height: 25,
  },
  telefone: {
    width: 25,
    height: 25,
    bottom:10,
    right:72
  },
  textocarac: {
    maxWidth: 150,
    maxLength: 15,
    witdh: 150
  },
  textocarac2: {
    padding: 6,
    maxWidth: 150,
    flex: 1
  },
  textocarac3: {
    padding: 6,
    maxWidth: 150,
    flex: 1,
    right:75,
    bottom:12
   
  
  },
  carac: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center'
  },
  caixacarac: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  escolhas: {
    marginHorizontal: 10
  },
  vet: {
    width: 32,
    height: 32,
    marginRight: 350
  },

  containertexto: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 15,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    width: 350,
    height:300
  },

  botaocross: {
    width: 12,
    height: 12,
    margin: 5

  },
  direcaobotao: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: "row-reverse"


  },
  espacoDescricao: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 0
  },

  Perfiledit: {
    width: 15,
    height: 15,
    marginTop: -17,
    marginLeft: -14,

  },

  btnSair: {
    right: 130
  },

  txtSair: {
    color: '#FFFFFF',
  }


});

export default Perfil;