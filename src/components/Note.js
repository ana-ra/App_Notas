import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import estilo from './estiloComponents';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const windowHeightWithoutHeader = windowHeight - (windowHeight * 0.1261);


const Note = ({ note, notes, index, navigation }) => {

  const checkColor = (note) => {
    switch(note.selectedColor){
      case '0':
        return('#F8F8F8')
        break;
      case '1':
        return('#F8F8F8')
        break;
      case '2': 
        return('#FFF3F3')
        break;
      case '3': 
        return('#EAF1FF')
        break;
      case '4': 
        return('#E4FFEF')
        break;
      default: return('erro!')
    }
  }

  const checkPriority = (note) => {
    switch(note.selectedPriority){
      case '0':
        return('Prioridade não definida')
        break;
      case '1':
        return('Urgente')
        break;
      case '2': 
        return('Alta')
        break;
      case '3': 
        return('Média')
        break;
      case '4': 
        return('Baixa')
        break;
      default: return('erro!')
    }
  }



  const exibeLista = () => {
    
    if(note.itemTarefa){
      const [checkedState, setCheckedState] = useState(
        new Array(note.itemTarefa.length).fill(false)
      );
  
      const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
      };

      return(
        note.itemTarefa? 
        note.itemTarefa.map((item, index) => (  
        <View key={index} style={estilo.NtcheckboxContainer}>
          <CheckBox
              disabled={false}
              value={checkedState[index]}
              onValueChange={() => handleOnChange(index)}
              />
          <Text key={index} style={estilo.NtcheckboxContainerText}>{item}</Text>
        </View>)): <Text></Text>)
    }else{
      return(
        <Text> </Text>
      )
    }
  }



    return (
          <TouchableOpacity onPress={() => navigation.navigate('NotaAberta', {
                            note,
                            notes,
                            index
                        })}>
            <View style={[{backgroundColor: checkColor(note)}, estilo.Ntcontainer]}>
              <Text style={estilo.Nttitle}>{note.noteName}</Text>
              <Text style={estilo.Ntdesc}>{note.noteDesc}</Text>
              { exibeLista() }
            </View>
          </TouchableOpacity>
    );
  };
  
  export default Note;

