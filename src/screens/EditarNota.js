import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Dimensions, TouchableOpacity, LogBox, Alert, Keyboard } from 'react-native';
import Header from '../components/Header';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilo from './estilo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const EditarNota = ({ route, navigation }) => {

  useEffect(() => {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  }, [])

  const notes = route.params.notes;
  const oldNote = route.params.note;
  const selectedIndex = route.params.selectedIndex;

  const [noteName, setNoteName] = useState(oldNote.noteName);
  const [noteDesc, setNoteDesc] = useState(oldNote.noteDesc);
  const [selectedColor, setSelectedColor] = useState(oldNote.selectedColor);
  const [selectedPriority, setSelectedPriority] = useState(oldNote.selectedPriority);
  const [noteDate, setNoteDate] = useState(oldNote.noteDate);



  const [tarefa, setTarefa] = useState('');
  const [itemTarefa, setItemTarefa] = useState(oldNote.itemTarefa);

  const addTarefa = () => {
    Keyboard.dismiss();
    setItemTarefa([...itemTarefa, tarefa]);
    setTarefa(null);
  };


  const checkDelete = () => {
    Alert.alert(
      'Deletar Nota?',
      'Tem certeza que deseja excluir esta nota? Essa ação não poderá ser desfeita.',
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
            navigation.pop(2);
    } catch (e) {
      Alert.alert(e)
    }
  }

  const UpdateData = async () => {
    try {
      if (noteName&&selectedColor&&selectedColor!=='0'&&selectedPriority&&selectedPriority!=='0') {
        const note = {
          noteName,
          noteDesc,
          selectedColor,
          selectedPriority,
          noteDate,
          itemTarefa
        }

        notes.filter((item, index) => 
        {
            if(index === selectedIndex){
                notes[index]=note;
            }
        });
        

        const jsonValue = JSON.stringify(notes)
        await AsyncStorage.setItem('@SALVAR_NOTA', jsonValue)
        navigation.pop(2);

      } else {
        throw ('Preencha todos os campos obrigatórios!')
      }
      
    } catch (e) {
      Alert.alert(e)
    }
  }

  const exibeLista = () => {
    
    if(oldNote.itemTarefa){
      const [checkedState, setCheckedState] = useState(
        new Array(oldNote.itemTarefa.length).fill(false)
      );
  
      const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
      };
      
      return(
        itemTarefa? 
        itemTarefa.map((item, index) => (  
        <View key={index} style={estilo.NocheckboxContainer}>
          <CheckBox
              disabled={true}
              value={checkedState[index]}
              onValueChange={() => handleOnChange(index)}
              />
          <Text key={index} style={estilo.NocheckboxContainerText}>{item}</Text>
        </View>)): <Text></Text>)
    }else{
      return(
        <Text> </Text>
      )
    }
  }


  return (
    <>
      <ScrollView> 
        <Header 
            navigation={navigation}
            title="Editar Nota"
            checkDelete={checkDelete}/>
        <Text style={estilo.NonameNote}>Nome da nota (obrigatório)</Text>
        <TextInput 
          placeholder="Insira" 
          style={estilo.NonameNoteInput} 
          value={noteName}
          onChangeText={newText => setNoteName(newText)}
          />

        <Text style={estilo.Notitle}>Descrição</Text>
        <TextInput 
          placeholder="Insira"
          multiline={true}
          value={noteDesc}
          onChangeText={newText => setNoteDesc(newText)}
          style={estilo.NodescriptionNoteInput} />

        <Text style={estilo.Notitle}>Prioridade (obrigatório)</Text>
        <Picker
          style={estilo.Nopicker}
          selectedValue={selectedPriority}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedPriority(itemValue)
          }>
            <Picker.Item label="Escolha" value="0" />
            <Picker.Item label="Urgente" value="1" />
            <Picker.Item label="Alta" value="2" />
            <Picker.Item label="Média" value="3" />
            <Picker.Item label="Baixa" value="4" />
        </Picker>

        <Text style={estilo.Notitle}>Data</Text>
        <TextInput 
          placeholder="dd/mm/aaaa" 
          value={noteDate}
          onChangeText={newText => setNoteDate(newText)}
          style={estilo.NodateNoteInput} />

        <Text style={estilo.Notitle}>Lista de Tarefas</Text>
        <View style={estilo.NotarefasContainer}>
          { exibeLista() }
        </View>

        <View style={estilo.NoaddItemContainer}>
            
            <TextInput 
                    style={estilo.NoaddItemInput}
                    onChangeText={newText => setTarefa(newText)}
                    defaultValue={tarefa} />
            <TouchableOpacity 
                      style={estilo.NoaddItemButton}
                      onPress={ () => { addTarefa() }}>
              <Text style={estilo.NoaddItemText}>Adicionar Item</Text>
            </TouchableOpacity>
            
        </View>

        <Text style={estilo.Notitle}>Cor (obrigatório)</Text>
        
        <Picker
          style={estilo.NopickerColor}
          selectedValue={selectedColor}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedColor(itemValue)
          }>
            <Picker.Item label="Escolha" value="0" />
            <Picker.Item label="Básico" value="1" />
            <Picker.Item label="Rosa" value="2" />
            <Picker.Item label="Azul" value="3" />
            <Picker.Item label="Verde-água" value="4" />
        </Picker>
        
      </ScrollView>
           
        <TouchableOpacity style={estilo.NosaveNote} onPress={() => UpdateData()} >
          <View style={estilo.NocontainerSaveNote}>
            <Text style={estilo.NosaveNoteText}> Salvar nota </Text>
          </View>
        </TouchableOpacity>
      
    </>
  );
};

export default EditarNota;
