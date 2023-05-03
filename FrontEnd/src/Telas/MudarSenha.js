import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView
 } from 'react-native';

 const  MudarSenha = ({navigation}) =>  {
  return (
    
    <View style={styles.tela}>
        
      <Image source={require('../../assets/Imagens/artmelogo4.png')} style={styles.image}/> 

        <View style={styles.container}>

            <View style ={ styles.titulo}>
                <Text style={styles.logo}>Recuperar Senha</Text>
            </View>


        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#F97316"
          />
        </View>

        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Senha"
          placeholderTextColor="#F97316"
          secureTextEntry={true}
          />
        </View>

        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder= "Confirmar Senha"
          placeholderTextColor="#F97316"
          secureTextEntry={true}
          />
        </View>      
     
      
        <TouchableOpacity style={styles.loginButton} onPress={()=> navigation.navigate('Menu')}>      
        <Text style={styles.loginText}>Confirmar</Text>
        </TouchableOpacity>        
      
      </View>
    
    </View>
  

  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    paddingVertical: 20,
    width: '80%',
    backgroundColor: '#FFC700',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Botão de login
  logo: {
    textAlign: 'center',
    borderRadius: 70,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F97316',
    padding: 14,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    marginBottom: 40,
  },

  //input do Email e Senha
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 45,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },


  // Texto do Placeholder do Email e Senha
  inputText: {
    fontSize: 19,
    height: 50,
    color: 'orange',
  },

  //Botão de Entrar
  loginButton: {
    textAlign: 'center',
    width: 127,
    height: 40,
    borderRadius: 40,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F97316',
    fontSize: 10,
    margin: 30,
  },

  // Fonte do Botão Entrar
  loginText: {
    fontSize: 19,
    color: 'white',
    fontWeight: 'bold'
  },

  forgot: {
    color: '#F97316',
    fontSize: 22,
  },
  tela: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
  
  height: 100,
   width: 210,
   margin: 30
   
  },
  textocadastrar: {
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#F97316',
  },
  botaocadastrar: {
   borderWidth: 1,
   borderColor: '#F97316',
    flex : 1,
   width: 180,
    borderRadius: 70,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 40,
  },

  titulo: {
   flexDirection: 'row',
   flex:1
  }
  
});

export default MudarSenha;