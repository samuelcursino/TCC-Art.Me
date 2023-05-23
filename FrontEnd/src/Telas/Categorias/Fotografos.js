import React, {useState, useEffect} from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList
  } from 'react-native';
import CaixaUsuario from '../../components/CaixaUsuario';


import AsyncStorage from '@react-native-async-storage/async-storage';

const Fotografos = ({navigation}) => {

  // "Pegar" o usuário que está conectado
    const [usuario, setUsuario] = useState([])
    // console.log(usuario);
  
    useEffect(() => {
      getUsuario();
    }, []);   
  
    async function getUsuario() {
      let response = await AsyncStorage.getItem('usuarioData')
      let json = JSON.parse(response)
      setUsuario(json)
    }





  // recuperar todos os artistas fotógrafos do banco de dados
  const [dadosFotografos, setDadosFotografos] = useState([])
  // console.log(dadosFotografos);

    useEffect(() => {
    getDadosFotografos()
  }, []); 

    async function getDadosFotografos() {
    let response = await AsyncStorage.getItem('fotografosData')
    let json = JSON.parse(response)

    setDadosFotografos(json)

  }

  const Item = ({item}) => {
    return (
      <View >
        <Text >{item.id_usuario}</Text>
        <Text >{item.nome}</Text>
        <Text >{item.sobrenome}</Text>
        <Text >{item.catServicoNomeCategoria}</Text>
      </View>
    )
  }

return (

  <ScrollView>

<View style={styleFotografos.backgroundColor}> 
    <View style={styleFotografos.container}>

        <View style={{ flexDirection: 'row' }}>
        <Image source={require('../../../assets/Imagens/Vetor.png')} style={styleFotografos.vetor} />

            <View style={styleFotografos.selecao}>              
            <Text style={styleFotografos.txtusuario}>Olá {usuario.nome}!</Text>              
            <Image source={require('../../../assets/Imagens/UsuarioMCategorias.png')} style={styleFotografos.fotoPerfil} />            
            </View>

        </View>    
    </View>
        

        <Text style={styleFotografos.txtServicos}>Serviços</Text>
        <View style={styleFotografos.categorias}>         


      <View>
        <FlatList
          data={dadosFotografos}
          renderItem={({item})=><CaixaUsuario Nome={(item.nome)} Sobrenome={(item.sobrenome)} catServicoNomeCategoria={(item.catServicoNomeCategoria)} />}
          keyExtractor={(item)=>item.id_usuario}
        />
      </View>         

        </View>

</View>
      
    </ScrollView>

    )
}

const styleFotografos = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
      },

      containerColor: {
        backgroundColor: 'white',
      },

      backgroundColor: {
        backgroundColor: 'white'
      },

    vetor: {
        width: 32,
        height: 32,
        margin: 30,
        direction: 'ltr'
    },

    selecao: {
        direction: 'rtl',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        flex: 1
      },

    txtusuario: {
    direction: 'rtl',
    fontSize: 22,
    marginTop: 80,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
    color: 'black',
    top: -49,
    left: 60
    },

    fotoPerfil: {
    top: 16,
    height: 60,
    width: 60,
    // marginEnd: 20, 
    // paddingTop: 25,
    right: 230,
    position: 'absolute'
    },

    txtServicos: {
      fontSize: 17,
      marginTop: -15,
      fontWeight: 'bold',
      marginHorizontal: 20,
      margin: 10
    },

    categorias: {
      flexDirection: 'row',
      marginHorizontal: 10
    },

    fotoPerfilArtista: {
      top: 95,
      height: 40,
      width: 40,
      // marginEnd: 20, 
      // paddingTop: 25,
      left: 15,
      position: 'absolute'
      },    

    BackgroundFoto: {
      height: 116,
      width: 170,
      // marginVertical: 3,
      // marginTop: 5,
      // borderRadius: 7,
      // marginLeft: 9.5
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
    },

    containerArtista1: {
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // padding: 5,
      width: 170,
      height: 200,
      // borderWidth: 3,
      // borderColor: '#F97316',
      margin: 6,
      backgroundColor: 'white',
      borderRadius: 12,
      elevation: 50,
      // left: 15
    },

    containerArtista2: {
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // padding: 5,
      width: 170,
      height: 200,
      // borderWidth: 3,
      // borderColor: '#F97316',
      margin: 6,
      backgroundColor: 'white',
      borderRadius: 12,
      elevation: 50,
      left: 7
    },

    containerArtista3: {
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // padding: 5,
      width: 170,
      height: 200,
      // borderWidth: 3,
      // borderColor: '#F97316',
      // margin: 6,
      backgroundColor: 'white',
      borderRadius: 12,
      elevation: 50,
      // left: 15
      marginTop: 220,
      left: -358
    },

    containerArtista4: {
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // padding: 5,
      width: 170,
      height: 200,
      // borderWidth: 3,
      // borderColor: '#F97316',
      // margin: 6,
      backgroundColor: 'white',
      borderRadius: 12,
      elevation: 50,
      // left: 15
      marginTop: 220,
      left: -338
    },

    containerArtista5: {
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // padding: 5,
      width: 170,
      height: 200,
      // borderWidth: 3,
      // borderColor: '#F97316',
      // margin: 6,
      backgroundColor: 'white',
      borderRadius: 12,
      elevation: 50,
      // left: 15
      marginTop: 440,
      left: -696
    },

    containerArtista6: {
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // padding: 5,
      width: 170,
      height: 200,
      // borderWidth: 3,
      // borderColor: '#F97316',
      // margin: 6,
      backgroundColor: 'white',
      borderRadius: 12,
      elevation: 50,
      // left: 15
      marginTop: 440,
      left: -678
    },

    txtServicoDe: {
      fontSize: 9,
      marginTop: 5,
      // marginEnd: 50,
      marginLeft: 7,
      // marginHorizontal: 20,
      // fontWeight: 'bold',
      color: '#666262'
    },

    txtNomeArtistas: {
      fontSize: 12,
      marginTop: 20,
      // marginEnd: 50,
      // marginLeft: 55,
      marginHorizontal: 6,
      fontWeight: 'bold',
      color: '#666262'
    },

    txtCategoriaArtistas: {
      fontSize: 18,
      // marginTop: 20,
      // marginRight: 60,
      marginLeft: 7,
      // color: '#970C0C'
      // marginHorizontal: 20,
      fontWeight: 'bold',
    },

})

export default Fotografos;