import React, { useState, useEffect } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground 
  } from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';

const Trabalhos = () => {
  return (
    <View>
       <ImageBackground source={require('../../assets/Imagens/fixar-mapa.png')} style={stylePerfil.museu} >
        <View style={{justifyContent:'center',alignItems:'center',alignContent:'center'}}>
          <Text style={{color:'white'}}>Vendido</Text>
        </View>
        </ImageBackground>
    </View>
  )
};

const Sobre = () => {
  return (
    <View>
      <Text style={stylePerfil.red}>
        Pintor de Quadros
      </Text>

      <Text style={stylePerfil.texto1}>
        olá, prazer!!

        Sou artista no ramo de pintura de quadros e artesanato.
        Vivo em busca de inspiração, impacto positivo e uma vida saudável.
      </Text>


      <Text style={stylePerfil.texto1}>
        Tenho como objetivo principal "Transformar o mundo através da arte". Eu acredito
        que somente através da pintura será possível impactar (em grande escala) a sociedade e
        o meio ambiente e transformar positivamente o mundo.
      </Text>

      <View style={stylePerfil.carac}>
        <View style={stylePerfil.caixacarac}>
          <Image source={require('../../assets/Imagens/museu.png')} style={stylePerfil.museu} />
          <Text style={stylePerfil.textocarac}>
            Formado em Artes Visuais
          </Text>
        </View>
        <View style={stylePerfil.caixacarac}>
          <Image source={require('../../assets/Imagens/fixar-mapa.png')} style={stylePerfil.museu} />
          <Text style={stylePerfil.textocarac}>
            Sao Paulo
          </Text>
        </View>
      </View>
    </View>
  )
};

const Vendas = () => {
  return (
    <View>
      <Text>
        Vendas3
      </Text>
    </View>
  )
};


const Rascunhos = () => {
  return (
    <View>
      <Text>
        Rascunhos4
      </Text>
    </View>
  )
};


const Perfil = () => {

  const [mostrarTrabalhos, setMostrarTrabalhos] = useState(false)
  const [mostrarSobre, setMostrarSobre] = useState(false)
  const [mostrarVendas, setMostrarVendas] = useState(false)
  const [mostrarRascunhos, setMostrarRascunhos] = useState(false)

  const [clicou, setClicou] = useState(0)

  useEffect(() => {
    clicou === 1 ? (setMostrarTrabalhos(true)) : (setMostrarTrabalhos(false))
  }, [clicou])

  useEffect(() => {
    clicou === 2 ? (setMostrarSobre(true)) : (setMostrarSobre(false))
  }, [clicou])

  useEffect(() => {
    clicou === 3 ? (setMostrarVendas(true)) : (setMostrarVendas(false))
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
        <Image source={require('../../assets/Imagens/Vetor.png')} style={stylePerfil.vet} />
        <View style={stylePerfil.beck}>
          <Text style={stylePerfil.edit}>
            Editar
          </Text>

          <Image source={require('../../assets/Imagens/usuarioM.png')} style={stylePerfil.margem} />

          <Text style={stylePerfil.samu}>
            {usuario.nome}
          </Text>
          <Text style={stylePerfil.samu}>
            {/* 10K Seguidores 12K Seguindo */}
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

            <TouchableOpacity style={stylePerfil.escolhas} onPress={() => setClicou(3)}>
              <Text>
                Vendas
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylePerfil.escolhas} onPress={() => setClicou(4)}>
              <Text>
                Rascunhos
              </Text>
            </TouchableOpacity>

          </View>
          {
            mostrarTrabalhos === true ? <Trabalhos /> : <View></View>
          }

          {
            mostrarSobre === true ? <Sobre /> : <View></View>
          }

          {
            mostrarVendas === true ? <Vendas /> : <View></View>
          }

          {
            mostrarRascunhos === true ? <Rascunhos /> : <View></View>
          }

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
    backgroundColor: 'orange',
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
    backgroundColor: 'white'
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
    marginHorizontal: 20
  },
  museu: {
    width: 250,
    height: 250,
  },
  textocarac: {
    padding: 5
  },
  carac: {
    flexDirection: 'row',
    textAlign: 'center'
  },
  caixacarac: {
    marginHorizontal: 10,
    flexDirection: 'row'
  },
  escolhas: {
    marginHorizontal: 10
  },
  vet: {
    width: 32,
    height: 32,
   
  }
});

export default Perfil;