import React from 'react';
// import { TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';


const MascaraTelefone = () => {
    return (
      <TextInputMask
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) ',
        }}
        placeholder="Telefone"
        keyboardType="numeric"
        maxLength={11}
      />
    );
  };
  
{/* input telefone */}
<View style={StyleCadastro.inputViewCurto}>

<TextInputMask
  style={StyleCadastro.inputTextCurto}
  placeholder="Telefone"
  placeholderTextColor="#F97316"
  value={values.telefone}
  onChangeText={handleChange('telefone')}
  onBlur={handleBlur('telefone')}
  keyboardType='numeric'
  maxLength={11}
/>
{touched.telefone && <Text style={StyleCadastro.msgErroCurta}>{errors.telefone}</Text>}
{/* <MascaraTelefone /> */}
</View>

  export default MascaraTelefone;
  