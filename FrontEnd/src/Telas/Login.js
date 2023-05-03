import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView
} from 'react-native';
import { Formik } from 'formik';
//import * as yup from "yup";
import axios from "axios";
import Estilo from './Estilo';

const Login = ({ navigation }) => {

  const handleClickLogin = async (values) => {
    axios.get(`http://10.0.1.90:3005/listarUsuarioEMAIL/${values.email}/${values.password}`, {
      email: values.email,
      password: values.password,
    })

      .then(function (response) {
        console.log(response.data)
        setDados(response.data.data)

        if (response == 201) {
        } else if (response == 404) {
          console.log("algo errado")
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const [dados, setDados] = useState({});
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    dados != null
      ?
      console.log("Dados encontrados!")
      :
      console.log("Dados nao encontrados!")
  }, [dados])

  function ValidationLogin() {
    let dados = {
      email: email,
      password: password,
    }
    if (dados != null) {
      navigation.navigate('Menu')
    } else {
      alert("Login invalido!")
    }
  }

  return (

    <Formik
      initialValues={{
        email: '',
        password: ''
      }}

      onSubmit={values => { handleClickLogin(values), ValidationLogin }}
    // onSubmit={values => console.log(values)}
    >

      {({ handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        values,
      }) => (

        <View style={Estilo.tela}>

          <Image source={require('../../assets/Imagens/artmelogo4.png')} style={Estilo.image} />

          <View style={Estilo.containerLogin}>

            <View style={Estilo.titulo}>
              <Text style={Estilo.logo}>Login</Text>
              <TouchableOpacity style={Estilo.botaocadastrar} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={Estilo.textocadastrar}>Cadastrar</Text>
              </TouchableOpacity>
            </View>


            <View style={Estilo.inputView}>

              <TextInput
                style={Estilo.inputText}
                placeholder="Email"
                placeholderTextColor="#F97316"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />

            </View>

            <View style={Estilo.inputView}>

              <TextInput
                style={Estilo.inputText}
                placeholder="Senha"
                value={values.password}
                placeholderTextColor="#F97316"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry={true}
              />

            </View>

            <TouchableOpacity onPress={() => navigation.navigate('MudarSenha')}>
              <Text style={Estilo.forgot}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Estilo.loginButton} onPress={handleSubmit} disabled={!isValid}>
              <Text style={Estilo.loginText}>Entrar</Text>
            </TouchableOpacity>

          </View>

        </View>

      )
      }

    </Formik>

  );
}

export default Login;