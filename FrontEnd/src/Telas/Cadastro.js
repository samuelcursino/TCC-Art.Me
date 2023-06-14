import React, { useEffect, useState } from 'react';
import { 
    StyleSheet, 
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal
  } from 'react-native';
  
import { Formik } from 'formik';
import * as yup from "yup";
import axios from "axios";
import configuration from '../../configuration.json';
import BotaoCategoriaModal from '../components/BotaoCategoriaModal';
import { TextInputMask } from 'react-native-masked-text';


const Cadastro = ({ navigation }) => {

  
const [modalVisible, setModalVisible] = useState(false);

  // ------------------------------------ Rota de cadastrar artísta do Axios ----------------------------------
const handleClickCadastro = async (values) => {
  axios.post(`${configuration.url}/cadastrarUsuario`, {
    nome: values.nome,
    sobrenome: values.sobrenome,
    email: values.email,
    password: values.password,
    telefone: values.telefone,
    uf: values.uf,
    catServicoNomeCategoria: catServicoNomeCategoria
  })
  .then((response) => {

    alert("Cadastro completado com Sucesso!")

    console.log(response.data)
    setCatServicoNomeCategoria(null)
    
  })
  .catch((error) => {

    alert("Erro!")
    console.log(error);
  })  
}
// --------------------------------------------------------------------------------------------------------------

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


// -------------------------------- Definindo a categoria do artísta -----------------------------------------
const [catServicoNomeCategoria, setCatServicoNomeCategoria] =  useState(null)

const [catPintor, setcatPintor] =  useState(false)
const [catFotografo, setcatFotografo] =  useState(false)
const [catMusico, setcatMusico] =  useState(false)

useEffect (() => {
  if (catPintor == true) {
  setCatServicoNomeCategoria('Pintor'),
  console.log(catServicoNomeCategoria)
  setModalVisible(!modalVisible)
  }
  return () => {
    setcatPintor(false)
  }
})

useEffect (() => {
  if (catFotografo == true) {
  setCatServicoNomeCategoria('Fotografo'),
  console.log(catServicoNomeCategoria)
  setModalVisible(!modalVisible)
  }
  return () => {
    setcatFotografo(false)
  }
})

useEffect (() => {
  if (catMusico == true) {
  setCatServicoNomeCategoria('Musico'),
  console.log(catServicoNomeCategoria)
  setModalVisible(!modalVisible)
  }
  return () => {
    setcatMusico(false)
  }
})
// -------------------------------------------------------------------------------------------------------

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
        uf: ''
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
                autoCapitalize="words"
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
                autoCapitalize="words"
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

              <TextInputMask
                  type={'cel-phone'}
                    options={{
                      maskType: 'BRL',
                      withDDD: true,
                      dddMask: '(99) ',
                    }}
                  style={StyleCadastro.inputTextCurto}
                  placeholder="Telefone"
                  placeholderTextColor="#F97316"
                  value={values.telefone}
                  onChangeText={handleChange('telefone')}
                  onBlur={handleBlur('telefone')}
                  keyboardType='numeric'
                  maxLength={15}
                />
                {touched.telefone && <Text style={StyleCadastro.msgErroCurta}>{errors.telefone}</Text>}
                {/* <MascaraTelefone /> */}
              </View>

              {/* input estado */}
              <View style={StyleCadastro.inputViewCurto}>
                
                <TextInput
                  style={StyleCadastro.inputTextCurto}
                  autoCapitalize="characters"
                  placeholder="UF"
                  placeholderTextColor="#F97316"
                  value={values.uf}
                  onChangeText={handleChange('uf')}
                  onBlur={handleBlur('uf')}
                  maxLength={2}
                />
                {touched.uf && <Text style={StyleCadastro.msgErroCurta}>{errors.uf}</Text>}

              </View>             

            </View>     


            {/* Input selecionar Categoria */}
            <View>

              <TouchableOpacity style={StyleCadastro.categoriaButton} onPress={() => setModalVisible(true)}>
                <Text style={StyleCadastro.categoriaText}>Selecione uma categoria</Text>
              </TouchableOpacity>

              <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
              }}
            >
              <View style={StyleCadastro.centeredView}>
                <View style={StyleCadastro.modalView}>

                  <Text style={StyleCadastro.modalText}>Selecione uma categoria...</Text>

                    <View style={StyleCadastro.modalCategorias}>

                      <TouchableOpacity onPress={() => setcatPintor(true)}>
                        <BotaoCategoriaModal texto={'Pintor'} imagem={require('../../assets/Imagens/Pintores.png')} />
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => setcatFotografo(true)}>
                        <BotaoCategoriaModal texto={'Fotógrafo'} imagem={require('../../assets/Imagens/Fotografos.png')} />
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => setcatMusico(true)}>
                        <BotaoCategoriaModal texto={'Músico'} imagem={require('../../assets/Imagens/Musicos.png')} />
                      </TouchableOpacity>                      

                    </View>

                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={StyleCadastro.btnNaoSouArtista}>Sou usuário</Text>  
                     </TouchableOpacity>

                     <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={StyleCadastro.voltar}>Voltar</Text>  
                     </TouchableOpacity>

                    {/* <Pressable
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={StyleCadastro.voltar}>Voltar</Text>              
                    </Pressable> */}

                </View>
              </View>
            </Modal>

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
    height: 800
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
  height: 570,
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
color: 'black',
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
  marginTop: 35
},

// Fonte do Botão Entrar
loginText: {
  fontSize: 19,
  color: 'white',
  fontWeight: 'bold',
  textAlign:'center',
},

//Botão de selecionar a categoria do artista
categoriaButton: {
  textAlign: 'center',
  width: 270,
  height: 43,
  borderRadius: 40,
  // alignContent: 'center',
  justifyContent: 'center',
  // paddingHorizontal: 20,
  backgroundColor: '#fff',
  // margin: 20,
  marginTop: 40
},

// Fonte do Botão Entrar
categoriaText: {
  fontSize: 19,
  color: '#F97316',
  textAlign:'center',
},

centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},

modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  width: 350,
  height: 530,
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},

modalCategorias: {
  margin: 20
},

voltar: {
  textAlign: 'center',
  margin: 25,
  borderRadius: 30,
  paddingHorizontal: 10,
  backgroundColor: '#F97316',      
  fontWeight: 'bold',
  fontSize: 18,
  color: 'white',
  marginBottom: 10,
  width: 80,
  height: 30,
  padding: 2
},

btnNaoSouArtista: {
  textAlign: 'center',
  margin: -7,
  borderRadius: 30,
  // paddingHorizontal: 10,
  backgroundColor: '#fff',      
  fontWeight: 'bold',
  fontSize: 18,
  color: '#F97316',
  marginBottom: 10,
  width: 170,
  height: 35,
  padding: 4,
  borderWidth: 3,
  borderColor: '#F97316',
}

})

export default Cadastro;