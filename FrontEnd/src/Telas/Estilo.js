import {StyleSheet} from "react-native";

const Estilo = StyleSheet.create({

    // Container da página Login
    containerLogin: {
      borderRadius: 30,
      paddingVertical: 20,
      width: '80%',
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
    
    // Fonte do Botão Entrar
    loginText: {
      fontSize: 19,
      color: 'white',
      fontWeight: 'bold',
      textAlign:'center',

    },
  
    // Frase de 'Esqueceu a senha'
    forgot: {
      color: '#F97316',
      fontSize: 17,
    },
  
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
     flex:1
    },

    msgErro: {
      fontSize: 15,
      color: 'red',
      height: 20,
    },

    // --------- Estilos da tela de Cadastro ----------

      // Container da página Cadastro
      containerCadastro: {
        borderRadius: 30,
        paddingVertical: 20,
        width: '80%',
        height: 460,
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
    
      //Texto do botão Login
      logoCadastro: {  
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
    
      campos: {
        flexDirection: 'row',
        flex:1,
        justifyContent: 'center'   
         
       },
    
       inputcurto: {
        width: '39%',
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 45,
        marginBottom: 10,
        justifyContent: 'center',
        marginHorizontal: 7,
        padding: 20,
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

      // ---------------------------------------------


    // --------- Estilos da tela de Boas vindas --------

  // Botão da tela de boas vindas
    fundobotao:{
      backgroundColor: 'white',
      padding: 12,
      width:'50%',
      height: 50,
      margin:15,
      borderRadius:35     
    },

    // Texto do botão da tela de boas vindas    
    textobotao:{
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#F97316'    
    },

    arte: {
      height: '75%',
      width: '100%',
      resizeMode: 'stretch'
    },

   telaBoasVindas: {
      flex: 1,
      backgroundColor: '#FFC700'
    },

    textoBoasVindas: {
      color: 'white',
      fontSize: 20    ,
      fontWeight: 'bold'
    },

    campoinferior:{
      justifyContent: 'center',
      alignItems: 'center'
    },

    // --------------------------------------------
    
  });

  export default Estilo;