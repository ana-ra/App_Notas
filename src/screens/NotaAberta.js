import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import estilo from './estilo';


 const NotaAberta = ({ route, navigation }) => {
  const note = route.params.note;
  const notes = route.params.notes;
  const selectedIndex = route.params.index;
  const [canDelete, setCanDelete] = useState(false);


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
        <View key={index} style={estilo.NacheckboxContainer}>
          <CheckBox
              disabled={true}
              value={checkedState[index]}
              onValueChange={() => handleOnChange(index)}
              />
          <Text key={index} style={estilo.NacheckboxContainerText}>{item}</Text>
        </View>)): <Text></Text>)
    }else{
      return(
        <Text> </Text>
      )
    }
  }

  const checkDelete = () => {
    Alert.alert(
      'Deletar Nota?',
      'Tem certeza que deseja excluir esta nota?',
      [
        {
          text: "CANCELAR",
          onPress: () => {},
        },
        { text: "DELETAR", onPress: () => {deleteData()} }
      ],
      { cancelable: false }
    );
  }

  const deleteData = async () => {
        try {     
            const newNotes = notes.filter((item, index) => index !== selectedIndex);
            console.log(newNotes)

            const jsonValue = JSON.stringify(newNotes)
            await AsyncStorage.setItem('@SALVAR_NOTA', jsonValue)
            navigation.goBack();
    } catch (e) {
      Alert.alert(e)
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
  
  
  const checkColor = (note) => {
    switch(note.selectedColor){
      case '1':
        return('Basico')
        break;
      case '2': 
        return('Rosa')
        break;
      case '3': 
        return('Azul')
        break;
      case '4': 
        return('Verde-água')
        break;
      default: return('erro!')
    }
  }

  return (
    <>
      <ScrollView style={estilo.Nacontainer}>
        <Header 
              navigation={navigation}
              title="Voltar"
              checkDelete={checkDelete}
              note={note}
              selectedIndex={selectedIndex}
              notes={notes}/>
        <Text style={estilo.Natitle}>NOME</Text>
        <Text style={estilo.Natext}>{note.noteName}</Text>
        <Text style={estilo.Natitle}>DESCRIÇÃO</Text>
        <Text style={estilo.Natext}>{note.noteDesc}</Text>
        <Text style={estilo.Natitle}>PRIORIDADE</Text>
        <Picker
            style={estilo.Napicker}
            enabled={false}>
              <Picker.Item label={checkPriority(note)} value="1" />
        </Picker>
        <Text style={estilo.Natitle}>COR</Text>
        <Picker
            style={estilo.Napicker}
            enabled={false}>
              <Picker.Item label={checkColor(note)} value="1" />
        </Picker>
        <Text style={estilo.Natitle}>Lista de Tarefas</Text>
        <View style={estilo.NatarefasContainer}>
        { exibeLista() }
        </View>

      </ScrollView>
    </>
  );
};

export default NotaAberta;
