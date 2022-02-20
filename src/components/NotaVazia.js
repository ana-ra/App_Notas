import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import stackImage from '../../assets/img/stack.png'
import estilo from './estiloComponents';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const windowHeightWithoutHeader = windowHeight - (windowHeight * 0.1261);

const NotaVazia = () => {
    return (
        <View style={estilo.Ncontainer}>
          <Image source={stackImage} style ={estilo.Nstack} />
          <Text style={estilo.Ntext1}>Não tem nenhuma nota aqui</Text>
          <Text style={estilo.Ntext2}>Crie notas e você poderá vê-las aqui.</Text>
  
      </View>
      
    );
  };
  
  export default NotaVazia;
