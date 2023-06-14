import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput 
  } from "react-native";

import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import configuration from '../../../configuration.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PostArtista() {


  // recuperar o usuario que está logado
  const [usuario, setUsuario] = useState([])
  console.log("Usuario conectado: " + JSON.stringify(usuario));

  useEffect(() => {
    getUsuario();
  }, []); 

  async function getUsuario() {
    let response = await AsyncStorage.getItem('usuarioData')
    let json = JSON.parse(response)
    setUsuario(json)
  }

  // -------------------------- Rota de Post do Axios --------------------------------
  const handleClickPost = async (values) => {
    axios.post(`${configuration.url}/cadastrarPostagem`, {
      desc_postagem: values.desc_postagem,
      tblUsuarioIdUsuario: usuario.id_usuario
    })   
    .then((response) => {

      console.log(response.data)
      alert("Publicação realizada com Sucesso!")
      
    })
    .catch((error) => {

      alert("Deu erro ae")
      console.log(error);
    })  
  }

// ------------------------------------------------------------------------------------

  // Validação dos dados
const validationPost = yup.object().shape({
  
  desc_postagem: yup
  .string()
  .min(30, ({ min, value }) => `${min - value.length} Caracteres restantes`)
  .required('Post inválido'),
    
  
})

  return (

    <View style={styles.container}>

     <View style={styles.signupContainer}>
      
        <Text style={styles.txtPubliqueAlgo}>Publique algo...</Text>

        <Formik 

          validationSchema={validationPost}
          initialValues={{
          desc_postagem: ''
          }}
            onSubmit={values=>{handleClickPost(values)}}
            // onSubmit={values => console.log(values)}
          >
            {({handleSubmit,
              handleChange,
              setFieldTouched,
              errors,
              touched,
              isValid,
              values
            }) => (
              <>
                <TextInput
                  style={styles.textInput}
                  placeholder="Escreva algo..."
                  // placeholderTextColor="#F97316"
                  value={values.desc_postagem}
                  onChangeText={handleChange('desc_postagem')}
                  onBlur={() => setFieldTouched('desc_postagem')}                
              />   
               {touched.desc_postagem && <Text style={styles.msgErro}>{errors.desc_postagem}</Text>}    
                  
              <TouchableOpacity style={styles.btnPostar} onPress={handleSubmit} disabled={!isValid}>
                <Text style={styles.txtPostar}> Postar </Text>
              </TouchableOpacity>
              
              </>
            )}


        </Formik>

     </View>
   
      

      {/* <View style={styles.bottomLeftContainer}>
        <Text style={styles.image}>Adicionar uma Imagem</Text>
      </View> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signupContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 12
  },

  txtPubliqueAlgo: {
    fontSize: 19,
    margin: 8,
    fontWeight: 'bold',
  },

  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    // textcolor: '#F97316'
  },

  button: {
    borderRadius:20,
    elevation: 2,
    
  },

  msgErro: {
    fontSize: 15,
    color: 'red',
    height: 20,
    margin: 5
  },

  btnPostar: {
    textAlign: 'center',
  width: 70,
  height: 35,
  borderRadius: 10,
  justifyContent: 'center',
  backgroundColor: '#F97316',
  // padding: 5,
  },

  txtPostar: {
    fontSize: 17,
    color: 'white',
    textAlign:'center',
  }

});