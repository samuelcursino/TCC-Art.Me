import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../EstiloBotao';

const BotaoCategoria = (props) => {

    // const [imagem, setImagem] = useState('');

    // useEffect(()=>{
    //     setImagem(props.imagem)
    // }, [])

    const {texto, imagem} = props;

    return (
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 8, 
                borderRadius: 16, borderWidth: 4, borderColor: '#F97316', margin: 5}}>
            <Image source={imagem} style={styles.art} />
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{texto}</Text>
        </View>
    );

    
}

export default BotaoCategoria;