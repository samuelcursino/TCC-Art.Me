import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground
} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';

const Trabalhos = () => {
  return (
    <View>
      
    </View>
  )
};

const Sobre = () => {
  [value, onChangeText] = React.useState('Escreva Algo...');

  return (
   
      <View style={stylePerfil.containertexto}>

<View style={stylePerfil.espacoDescricao}>
          <TextInput

            editable
            multiline 
            numberOfLines={3}
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

          <View style={stylePerfil.caixacarac}>
            <Image source={require('../../assets/Imagens/museu.png')} style={stylePerfil.museu} />
            <TextInput color= {'grey'} maxLength={30} style={stylePerfil.textocarac2}>
            Formação
            </TextInput>
          </View>

          <View style={stylePerfil.caixacarac}>
            <Image source={require('../../assets/Imagens/fixar-mapa.png')} style={stylePerfil.local} />
            <TextInput color= {'grey'} maxLength={15} style={stylePerfil.textocarac2}>
              Cidade
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



// const Rascunhos = () => {
//   return (
//     <View>
//       <Text>
//         Rascunhos
//       </Text>
//     </View>
//   )
// };


const Perfil = () => {

  const [mostrarTrabalhos, setMostrarTrabalhos] = useState(false)
  const [mostrarSobre, setMostrarSobre] = useState(false)

  const [mostrarRascunhos, setMostrarRascunhos] = useState(false)

  const [clicou, setClicou] = useState(0)

  useEffect(() => {
    clicou === 1 ? (setMostrarTrabalhos(true)) : (setMostrarTrabalhos(false))
  }, [clicou])

  useEffect(() => {
    clicou === 2 ? (setMostrarSobre(true)) : (setMostrarSobre(false))
  }, [clicou])



  useEffect(() => {
    clicou === 4 ? (setMostrarRascunhos(true)) : (setMostrarRascunhos(false))
  }, [clicou])



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

      <View style={stylePerfil.tela}>
        <TouchableOpacity>
          <Image source={require('../../assets/Imagens/Vetor.png')} style={stylePerfil.vet} />
        </TouchableOpacity>
        <View style={stylePerfil.beck}>

          <TouchableOpacity>
            <Text style={stylePerfil.edit}>Editar</Text>
            <Image source={require('../../assets/Imagens/edit.png')} style={stylePerfil.Perfiledit} />
          </TouchableOpacity>

          <Image source={require('../../assets/Imagens/UsuarioM.png')} style={stylePerfil.margem} />

          <Text style={stylePerfil.samu}>
            {usuario.nome} {usuario.sobrenome}
          </Text>
          <Text style={stylePerfil.samu}>
            {/* 10K Seguidores 12K Seguindo */}
            {usuario.catServicoNomeCategoria}
          </Text>
          <Text style={stylePerfil.samu}>


          </Text>
        </View>

        <View>
          <View style={stylePerfil.botoes}>
            <TouchableOpacity style={stylePerfil.escolhas} onPress={() => setClicou(1)}>
              <Text>
                Trabalhos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylePerfil.escolhas} onPress={() => setClicou(2)}>
              <Text>Sobre</Text>

            </TouchableOpacity>



            {/* 
            <TouchableOpacity style={stylePerfil.escolhas} onPress={() => setClicou(4)}>
              <Text>
                Rascunhos
              </Text>
            </TouchableOpacity> */}

          </View>
          {
            mostrarTrabalhos === true ? <Trabalhos /> : <View></View>
          }

          {
            mostrarSobre === true ? <Sobre /> : <View></View>
          }


          {/* {
            mostrarRascunhos === true ? <Rascunhos /> : <View></View>
          } */}

        </View>
      </View>
    </ScrollView>
  )
}

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
    height: 50,
    width: 50,
  },
  samu: {
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  edit: {
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  texto1: {
    margin: 10
  },
  edit: {
    height: 20,
    width: 300,
    color: 'white'
  },
  tela: {
    flex: 1,
    alignItems: 'center',
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
    marginTop: -16,
    marginLeft: 40,
    marginRight: 10,

  }


});

export default Perfil;