import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import BotaoCategoria from './BotaoCategoria';

const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={require('../../assets/Imagens/Vetor.png')} style={styles.vetor} />
        <View style={styles.selecao}>
          <Text style={styles.txtsamuel}>Oi, Usuário!</Text>
          <Image source={require('../../assets/Imagens/usuarioM.png')} style={styles.artista} />
        </View>
      </View>
      <View style={styles.image}>
        <Image source={require('../../assets/Imagens/artistas.png')} style={styles.imgdetalhe} />
        
      </View>


      <View style={styles.branco}>
        <ScrollView horizontal>

          
          <BotaoCategoria texto={'Grafite'} imagem={require('../../assets/Imagens/grafite.png')} />

          <BotaoCategoria texto={'Pintor'} imagem={require('../../assets/Imagens/Pintor.png')} />

          <BotaoCategoria texto={'Pintor'} imagem={require('../../assets/Imagens/quadros.png')} />

          <BotaoCategoria texto={'Pintor'} imagem={require('../../assets/Imagens/artesanato.png')} />
        </ScrollView>

      </View>
      
      <Text>Artistas Recomendados</Text>
      
      <View style={styles.containeruser1}>
      <Image source={require('../../assets/Imagens/art.png')} style={styles.cara} />
      <Text>Jefferson
        Santos Fotografo
        <Image source={require('../../assets/Imagens/estrela.png')} style={styles.estrela} />
      </Text>
      
      </View>
      <View style={styles.containeruser2}>
      <Image source={require('../../assets/Imagens/art.png')} style={styles.cara} />
      <Text>Jefferson
        Santos Fotografo
        <Image source={require('../../assets/Imagens/estrela.png')} style={styles.estrela} />
      </Text>
      
      </View>
      <View>
      
      </View>
    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC700',
    flex: 1,
  },
  artista: {
    height: 60,
    width: 60,
    marginTop:12 ,
    marginVertical:40,
    right: 140
  },
  txtsamuel: {
    direction: 'rtl',
    fontSize: 22,
    marginTop: 80,
    fontWeight: 'bold',
    marginVertical: 30,
    marginHorizontal: 20
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
  branco: {
    backgroundColor: 'white',
    flexDirection: 'row'
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
  imgdetalhe:{
    alignItems:'center',
    width:390,
    height:146,
    left: 0,
    right: 7,
    marginBottom:35,
    borderRadius:16
   
  },
  containeruser1: {
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
       backgroundColor: 'white',
       borderRadius:12

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
           marginTop:-163,
           backgroundColor: 'white',
           borderRadius:12,
           left:180
  },
  cara: {
     height: 76,
     width: 114,
     marginVertical: 10,
    marginHorizontal: 5,
    borderRadius:6,
    
    
  },
  estrela: {
    width: 10,
    height: 10,
    marginHorizontal:10,
    marginVertical: 40
  }






});

export default Menu;
