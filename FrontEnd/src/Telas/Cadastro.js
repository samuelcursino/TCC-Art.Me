import React, { useEffect, useState } from 'react';
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
  ScrollView
  } from 'react-native';


const Cadastro = ({ navigation }) => {

  // Axios Cadastro
const handleClickCadastro = async (values) => {
  axios.post(`${configuration.url}/cadastrarUsuario`, {
    nome: values.nome,
    sobrenome: values.sobrenome,
    email: values.email,
    password: values.password,
    telefone: values.telefone,
    uf: values.uf
  })

  .then((response) => {
    if(response == 201){
      navigation.navigate('Menu')
    } else if(response == 400){
      alert.alert("algo errado")
    }
    
  })
  .catch((error) => {
    console.log(error);
  })  
}

// Validação dos dados
const validationCadastro = yup.object().shape({
  
  nome: yup
  .string()
  .required("Este campo é obrigatório")
  .matches(/^[A-z]+$/ , 'Nome inválido'),

  sobrenome: yup
  .string()
  .required("Este campo é obrigatório")  
  .matches(/^[A-z]+$/ , 'Sobrenome inválido'),
    
  email: yup
  .string()
  .email('Email inválido')
  .required("Este campo é obrigatório"),

  password: yup
    .string()
    .min(8, ({min}) => `A senha deve ter ${min} caracteres`)
    .required("Este campo é obrigatório"),

  telefone: yup
  .string()
  .required("Campo Obrigatório"),

  uf: yup
  .string()
  .required("Campo Obrigatório"),
  
})


  return (
    <ScrollView>
    <Formik
      
    validationSchema={validationCadastro}
    initialValues={{
        nome: '',
        sobrenome: '',
        email: '',
        password: '',
        telefone: '',
        uf: '',
      }}

    onSubmit={values=>{handleClickCadastro(values)}}
    // onSubmit={values => console.log(values)}
      >

      {({ handleChange,
          handleBlur,
          handleSubmit,
          setFieldTouched,
          errors,
          touched,
          isValid,
          values 
        }) => (

        <View style={StyleCadastro.tela}>
          
          <Image source={require('../../assets/Imagens/artmelogo4.png')} style={StyleCadastro.image} />

            <View style={StyleCadastro.containerCadastro}>

              <View style={StyleCadastro.titulo}>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={StyleCadastro.clickLogin}>Login</Text>
                </TouchableOpacity>

                <Text style={StyleCadastro.clickCadastro}>Cadastrar</Text>

              </View>

            {/* input nome */}
            < View style={StyleCadastro.inputView}>
              
              <TextInput
                style={StyleCadastro.inputText}
                placeholder="Nome"
                placeholderTextColor="#F97316"
                value={values.nome}
                onChangeText={handleChange('nome')}
                onBlur={() => setFieldTouched('nome')}                
              />   
               {touched.nome && <Text style={StyleCadastro.msgErro}>{errors.nome}</Text>}    

            </View>

            {/* input sobrenome */}
            < View style={StyleCadastro.inputView}>
              
              <TextInput
                style={StyleCadastro.inputText}
                placeholder="Sobrenome"
                placeholderTextColor="#F97316"
                value={values.sobrenome}
                onChangeText={handleChange('sobrenome')}
                onBlur={() => setFieldTouched('sobrenome')}                
              />   
               {touched.sobrenome && <Text style={StyleCadastro.msgErro}>{errors.sobrenome}</Text>}    

            </View>

            {/* input email */}
            <View style={StyleCadastro.inputView}>
              
              <TextInput
                style={StyleCadastro.inputText}
                placeholder="Email"
                placeholderTextColor="#F97316"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {touched.email && <Text style={StyleCadastro.msgErro}>{errors.email}</Text>}

            </View>

            {/* input senha */}
            <View style={StyleCadastro.inputView}>
              
              <TextInput
                style={StyleCadastro.inputText}
                placeholder="Senha"
                placeholderTextColor="#F97316"
                value={values.password}
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              {touched.password && <Text style={StyleCadastro.msgErro}>{errors.password}</Text>}

            </View>

            {/* input curtos */}
            <View style={StyleCadastro.campos}>

              {/* input telefone */}
              <View style={StyleCadastro.inputViewCurto}>

                <TextInput
                  style={StyleCadastro.inputTextCurto}
                  placeholder="Telefone"
                  placeholderTextColor="#F97316"
                  value={values.telefone}
                  onChangeText={handleChange('telefone')}
                  onBlur={handleBlur('telefone')}
                />
                {touched.telefone && <Text style={StyleCadastro.msgErroCurta}>{errors.telefone}</Text>}

              </View>

              {/* input estado */}
              <View style={StyleCadastro.inputViewCurto}>
                
                <TextInput
                  style={StyleCadastro.inputTextCurto}
                  placeholder="UF"
                  placeholderTextColor="#F97316"
                  value={values.uf}
                  onChangeText={handleChange('uf')}
                  onBlur={handleBlur('uf')}
                />
                {touched.uf && <Text style={StyleCadastro.msgErroCurta}>{errors.uf}</Text>}

              </View>

            </View>      

            <TouchableOpacity style={StyleCadastro.loginButton} onPress={handleSubmit} disabled={!isValid}>
              <Text style={StyleCadastro.loginText}>Cadastrar</Text>
            </TouchableOpacity>
          
          </View>
        </View>
        
      )}

    </Formik >
    </ScrollView>

  );

}

const StyleCadastro = StyleSheet.create({

  tela: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 750
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

 // Container da página Cadastro
 containerCadastro: {
  borderRadius: 30,
  paddingVertical: 20,
  width: 310,
  height: 500,
  backgroundColor: '#FFC700',
  alignItems: 'center',
  justifyContent: 'center',
},

// Botão de cadastro
botaocadastrar2: {
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

  // Botão de escolher Cadastrar
  clickCadastro: {
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

//Botao de escolher Login
clickLogin: {  
  textAlign: 'center',
  borderRadius: 70,
  borderWidth: 1,
  borderColor: '#F97316',
  alignContent: 'center',
  backgroundColor: 'white',
  padding: 14,
  fontWeight: 'bold',
  fontSize: 18,
  color: '#F97316',
  width: 130,
  height: 50,
},

//View do input Nome, Email e Senha
inputView: {
  width: 270,  
  height: 60,
  marginBottom: 10,
  justifyContent: 'center',
},

// Texto do Placeholder do Nome, Email e Senha
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

// Texto do Placeholder do Telefone e UF
inputTextCurto: {
  width: 130,
  fontSize: 19,
  height: 45,
  backgroundColor: '#fff',
  color: '#F97316',
  borderRadius: 25,
  padding: 10,
  paddingLeft: 15,
  justifyContent: 'center',
},

campos: {
  flexDirection: 'row',
  flex:1,
  justifyContent: 'center',
 },

 inputViewCurto: {
  width: 130,
  height: 60,
  marginBottom: 10,
  justifyContent: 'center',
  marginHorizontal: 7,
  fontSize: 19,
},

// Modal
modalContainer: {
  borderRadius: 30,
  paddingVertical: 20,
  width: '80%',
  height: 460,
  backgroundColor: '#FFC700',
  alignItems: 'center',
  justifyContent: 'center',
},

modalText: {
fontSize: 19,
color: 'white',
fontWeight: 'bold',
textAlign:'center',
},

modalButton: {
textAlign: 'center',
width: '40%',
height: 40,
borderRadius: 40,
alignContent: 'center',
justifyContent: 'center',
paddingHorizontal: 20,
backgroundColor: '#F97316',
padding: 5,
fontSize: 10,
margin: 30,
},

modalButtonText: {
textAlign: 'center',
alignContent: 'center',
justifyContent: 'center',
fontWeight: 'bold',
fontSize: 18,
color: '#F97316',    
borderRadius: 70,
backgroundColor: 'white',
},

msgErro: {
  fontSize: 15,
  color: 'red',
  height: 20,
  paddingLeft: 35
},

msgErroCurta: {
  fontSize: 15,
  color: 'red',
  height: 20,
  // paddingLeft: 35
},

//Botão de Cadastrar
loginButton: {
  textAlign: 'center',
  width: 130,
  height: 40,
  borderRadius: 40,
  // alignContent: 'center',
  justifyContent: 'center',
  // paddingHorizontal: 20,
  backgroundColor: '#F97316',
  padding: 5,
  fontSize: 10,
  // margin: 20,
  marginTop: 20
},

// Fonte do Botão Entrar
loginText: {
  fontSize: 19,
  color: 'white',
  fontWeight: 'bold',
  textAlign:'center',
},

})

export default Cadastro;