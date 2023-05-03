import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Estilo from './Estilo';

const BoasVindas = ({navigation}) => {
    return (
        <View style={Estilo.telaBoasVindas}>
            <Image source={require('../../assets/Imagens/backgroundboasvindas.png')} style={Estilo.arte} />
            <View style={Estilo.campoinferior}>
                <Text style={Estilo.textoBoasVindas}>
                    Escolha o serviço perfeito para você
                </Text>
                <Text style={Estilo.textoBoasVindas}>
                    Por Artistas Criativos
                </Text>
                <TouchableOpacity style={Estilo.fundobotao} onPress={()=>navigation.navigate('Login')}>
                    <Text style={Estilo.textobotao}>Próximo</Text>
                </TouchableOpacity>
            </View>

        </View>


    )
}



export default BoasVindas;

