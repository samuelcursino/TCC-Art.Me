import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as yup from "yup";
import axios from "axios";
import configuration from '../../configuration.json';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  } from 'react-native';

//importando modulo AsyncStorage para salvar dados do login
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {


// --------------------------- Rota do axios que tráz o email e senha do artista --------------------------------

  const handleClickLogin = async (values) => {
    axios.get(`${configuration.url}/listarUsuarioEMAIL/${values.email}/${values.password}`, {
      email: values.email,
      password: values.password,
    })

      .then(function (response) {

        console.log("Dados da tela de Login: " + JSON.stringify(response.data))
        setDados(response.data)
        // console.log("Teste de Dados: " + JSON.stringify(dados))

        
        //armazenando dados do usuario em cache 
         AsyncStorage.setItem('usuarioData', JSON.stringify(response.data.data))

        if (response == 201) {
        } else if (response == 404) {
          console.log("algo errado")
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

// -----------------------------------------------------------------------------------------------------------

  const [dados, setDados] = useState(null);

  useEffect(() => {
    dados != null
      ?
      console.log("Dados encontrados!")
      :
      console.log("Dados nao encontrados!")
  }, [dados])

  // Validação dos dados
  const ValidationLogin = yup.object().shape({
        
    email: yup
    .string()
    .email('Não é um Email')
    .required("Este campo é obrigatório"),
  
    password: yup
      .string()
      .min(8, ({min}) => `A senha deve ter ${min} caracteres`)
      .required("Este campo é obrigatório"),
  })

  function ValidationDados(dados) {
    if (dados != null) {
      navigation.navigate("Menu")
    } else {
      alert("Login inválido!")
    }
  }

  return (

    <Formik
      initialValues={{
        email: '',
        password: ''
      }}

      onSubmit={values => { handleClickLogin(values), ValidationLogin, ValidationDados(dados) }}
    // onSubmit={values => console.log(values)}
    >

      {({ handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
        isValid,
        values 
      }) => (

        <View style={StyleLogin.tela}>

          <Image source={require('../../assets/Imagens/artmelogo4.png')} style={StyleLogin.image} />

          <View style={StyleLogin.containerLogin}>

            <View style={StyleLogin.titulo}>
              <Text style={StyleLogin.logo}>Login</Text>
              <TouchableOpacity style={StyleLogin.botaocadastrar} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={StyleLogin.textocadastrar}>Cadastrar</Text>
              </TouchableOpacity>
            </View>


            <View style={StyleLogin.inputView}>

              <TextInput
                style={StyleLogin.inputText}
                placeholder="Email"
                placeholderTextColor="#F97316"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {touched.email && <Text style={StyleLogin.msgErro}>{errors.email}</Text>} 

            </View>

            <View style={StyleLogin.inputView}>

              <TextInput
                style={StyleLogin.inputText}
                placeholder="Senha"
                value={values.password}
                placeholderTextColor="#F97316"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry={true}
              />
              {touched.password && <Text style={StyleLogin.msgErro}>{errors.password}</Text>} 

            </View>

            <TouchableOpacity onPress={() => navigation.navigate('MudarSenha')}>
              <Text style={StyleLogin.EsqueceuSenha}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={StyleLogin.BotaoEntrar} onPress={handleSubmit} disabled={!isValid}>
              <Text style={StyleLogin.loginText}>Entrar</Text>
            </TouchableOpacity>

          </View>

        </View>

      )
      }

    </Formik>

  );
}
const StyleLogin = StyleSheet.create({

tela: {
  flex: 1,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
},

//imagem
image: {  
  height: 100,
  width: 210,
  margin: 30         
},

titulo: {
  flexDirection: 'row',
  flex:1,
  marginBottom: 30,
 },

// Container da página Login
containerLogin: {
  borderRadius: 30,
  paddingVertical: 20,
  width: 310,
  height: 360,
  backgroundColor: '#FFC700',
  alignItems: 'center',
  justifyContent: 'center', 
},   

  // Botão de login
  logo: {
  textAlign: 'center',
  alignContent: 'center',
  borderRadius: 70,
  justifyContent: 'center',
  paddingHorizontal: 20,
  backgroundColor: '#F97316',      
  fontWeight: 'bold',
  fontSize: 18,
  color: 'white',
  marginBottom: 20,
  padding: 14,
  width: 130,
  height: 50,
},

// Botão de cadastro
botaocadastrar: {
  borderWidth: 1,
  borderColor: '#F97316',
  width: 130,
  height: 50,
  borderRadius: 70,
  paddingHorizontal: 20,
  backgroundColor: 'white',
  padding: 10,
  marginBottom: 40,
}, 

//Texto do botão cadastrar
textocadastrar: {
  textAlign: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: 18,
  color: '#F97316',    
  borderRadius: 70,
  backgroundColor: 'white',
},

//View do input Email e Senha
inputView: {
  width: 270,  
  height: 60,
  marginBottom: 10,
  justifyContent: 'center',
  paddingTop: 20
},

// Texto do Placeholder do Email e Senha
inputText: {
  width: 270,
  fontSize: 19,
  height: 45,
  backgroundColor: '#fff',
  color: '#F97316',
  borderRadius: 25,
  padding: 10,
  paddingLeft: 20,
  justifyContent: 'center',
},

msgErro: {
  fontSize: 15,
  color: 'red',
  height: 20,
  paddingLeft: 35
},

// Frase de 'Esqueceu a senha'
EsqueceuSenha: {
  color: '#F97316',
  fontSize: 17,
},

//Botão de Entrar
BotaoEntrar: {
  width: 120,
  height: 40,
  borderRadius: 40,
  justifyContent: 'center',
  backgroundColor: '#F97316',
  margin: 30,
},

// Fonte do Botão Entrar
loginText: {
  fontSize: 19,
  color: 'white',
  fontWeight: 'bold',
  textAlign:'center',
},

})

export default Login;