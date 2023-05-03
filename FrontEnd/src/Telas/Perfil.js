import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Estilo from './Estilo';

const Trabalhos = () => {
  return (
    <View>
      <Text>
        Trabalhos1
      </Text>
    </View>
  )
};

const Sobre = () => {
  return (
    <View>
      <Text style={styles.red}>
        Pintor de Quadros
      </Text>

      <Text style={styles.texto1}>
        olá, prazer!!

        Sou artista no ramo de pintura de quadros e artesanato.
        Vivo em busca de inspiração, impacto positivo e uma vida saudável.
      </Text>


      <Text style={styles.texto1}>
        Tenho como objetivo principal "Transformar o mundo através da arte". Eu acredito
        que somente através da pintura será possível impactar (em grande escala) a sociedade e
        o meio ambiente e transformar positivamente o mundo.
      </Text>

      <View style={styles.carac}>
        <View style={styles.caixacarac}>
          <Image source={require('../../assets/Imagens/museu.png')} style={styles.museu} />
          <Text style={styles.textocarac}>
            Formado em Artes Visuais
          </Text>
        </View>
        <View style={styles.caixacarac}>
          <Image source={require('../../assets/Imagens/fixar-mapa.png')} style={styles.museu} />
          <Text style={styles.textocarac}>
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

  return (
    <ScrollView>

      <View style={styles.tela}>
        <Image source={require('../../assets/Imagens/Vetor.png')} style={styles.vetor} />
        <View style={styles.beck}>
          <Text style={styles.edit}>
            Editar
          </Text>

          <Image source={require('../../assets/Imagens/usuarioM.png')} style={styles.margem} />

          <Text style={styles.samu}>
            Samuel Cursino
          </Text>
          <Text style={styles.samu}>
            10K Seguidores 12K Seguindo
          </Text>
        </View>

        <View>
          <View style={styles.botoes}>
            <TouchableOpacity style={styles.escolhas} onPress={() => setClicou(1)}>
              <Text>
                Trabalhos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.escolhas} onPress={() => setClicou(2)}>
              <Text>Sobre</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.escolhas} onPress={() => setClicou(3)}>
              <Text>
                Vendas
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.escolhas} onPress={() => setClicou(4)}>
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

const styles = StyleSheet.create({
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
    width: 24,
    height: 24,
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
  }
});

export default Perfil;