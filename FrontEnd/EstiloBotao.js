import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFC700',
      flex: 1,
    },
    artista: {
      height: 65,
      width: 65,
      marginVertical: 30,
      marginHorizontal: 15,
      direction: 'ltr'
    },
    txtsamuel: {
      direction: 'rtl',
      fontSize: 22,
      fontWeight: 'bold',
      marginVertical: 30,
      marginHorizontal: 15
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
      marginVertical: 5,
      marginHorizontal: 2,
      backgroundColor: 'white'
    },
    pintor: {
      width: 50,
      height: 50,
      marginVertical: 30,
      marginHorizontal: 20
    },
    quadro: {
      width: 50,
      height: 50,
      marginVertical: 30,
      marginHorizontal: 20
    },
    artesanato: {
      width: 50,
      height: 50,
      marginVertical: 30,
      marginHorizontal: 20
    }
});

export default styles;