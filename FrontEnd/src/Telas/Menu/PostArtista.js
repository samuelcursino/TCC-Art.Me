import React, { useState } from "react";
import BotaoCategoriaModal from '../../components/BotaoCategoriaModal';
import { View, Text, StyleSheet, Button, TouchableOpacity, Modal, Pressable, Alert, Image, TextInput } from "react-native";
import { Field, Formik } from "formik";
import * as yup from "yup";

export default function BottomSheetDemo() {
  const [modalVisible, setModalVisible] = useState(false);

  

  return (

    <View style={styles.container}>

     <View style={styles.signupContainer}>
      
        <Text>Escreva Algo...</Text>

        <Formik 
          initialValues={{
          desc_postagem: ''
          }}
            onSubmit={values => console.log(values)}
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
                  
              <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                <Text>
                  Postar
                </Text>
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
    paddingLeft: 35
  },
});