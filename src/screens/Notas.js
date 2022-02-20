import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView,  StyleSheet, ScrollView, Dimensions, TouchableOpacity, LogBox, Alert, Keyboard } from 'react-native';
import Header from '../components/Header';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilo from './estilo';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;





const Notas = ({ route, navigation }) => {

  useEffect(() => {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  }, [])

  const addItem = (newItem, itemsCheckBox, setNewItem) => {
    itemsCheckBox.push(newItem);
    console.log(itemsCheckBox)
    setNewItem('');
  }

  const [noteName, setNoteName] = useState('');
  const [noteDesc, setNoteDesc] = useState('');
  const [selectedColor, setSelectedColor] = useState();
  const [selectedPriority, setSelectedPriority] = useState();
  const [noteDate, setNoteDate] = useState('');
  


  const [tarefa, setTarefa] = useState('');
  const [itemTarefa, setItemTarefa] = useState([]);

  const addTarefa = () => {
    Keyboard.dismiss();
    setItemTarefa([...itemTarefa, tarefa]);
    setTarefa(null);
  };
  

  const [checkedState, setCheckedState] = useState(
    new Array(itemTarefa.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const exibeLista = () => {
    return(
      itemTarefa.map((item, index) => (  
      <View key={index} style={estilo.checkbox}>
        <CheckBox
            disabled={true}
            value={checkedState[index]}
            onValueChange={() => handleOnChange(index)}
            />
        <Text key={index} style={estilo.checkboxTexto}>{item}</Text>
      </View>)))
  }

  const saveData = async () => {
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

        route.params.notes.push(note);

        const jsonValue = JSON.stringify(route.params.notes)
        await AsyncStorage.setItem('@SALVAR_NOTA', jsonValue)
        route.params.updateData();
        navigation.goBack();

      } else {
        throw ('Preencha todos os campos obrigatórios!')
      }
      
    } catch (e) {
      Alert.alert(e)
    }
  }
  

  return (
    <>
      <ScrollView> 
        <Header navigation={navigation} title="Criar nota" />
        <Text style={estilo.nameNote}>Nome da nota (obrigatório)</Text>
        <TextInput 
          placeholder="Insira" 
          style={estilo.nameNoteInput} 
          value={noteName}
          onChangeText={newText => setNoteName(newText)}
          />

        <Text style={estilo.title}>Descrição</Text>
        <TextInput 
          placeholder="Insira"
          multiline={true}
          value={noteDesc}
          onChangeText={newText => setNoteDesc(newText)}
          style={estilo.descriptionNoteInput} />

        <Text style={estilo.Ptitle}>Prioridade (obrigatório)</Text>
        <Picker
          style={estilo.picker}
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

        <Text style={estilo.Dtitle}>Data</Text>
        <Icon  style={estilo.DIcon} name="calendar" size ={25} color= "black" />

        <TextInput 
          placeholder="dd/mm/aaaa" 
          value={noteDate}
          KeyboardType='numeric'
          onChangeText={newText => setNoteDate(newText)}
          style={estilo.dateNoteInput} />

        <Text style={estilo.Ltitle}>Lista de Tarefas</Text>

        {  
          exibeLista()
        }

          <View style={estilo.addItemContainer}>
            
            <TextInput 
                    style={estilo.addItemInput}
                    onChangeText={newText => setTarefa(newText)}
                    defaultValue={tarefa} />
            <TouchableOpacity 
                      style={estilo.addItemButton}
                      onPress={ () => { addTarefa() }}>
              <Text style={estilo.addItemText}>Adicionar Item</Text>
            </TouchableOpacity>
            
          </View>

        <Text style={estilo.Atitle}>Adicionar foto ou arquivo</Text>
        <Icon  style={estilo.DIcon} name="inbox" size ={28} color= "black" />

        <TextInput placeholder="Adicione aqui" style={estilo.dateNoteInput} />
        

        <Text style={estilo.Ctitle}>Cor (obrigatório)</Text>
        
        <Picker
          style={estilo.picker}
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

        <Text style={estilo.Ttitle}>Adicionar Tags</Text>
        <Icon  style={estilo.DIcon} name="tags" size ={28} color= "black" />

        <TextInput placeholder="Adicione aqui" style={estilo.addTagInput} />

      </ScrollView>
           
        <TouchableOpacity style={estilo.saveNote} onPress={() => saveData()} >
          <View style={estilo.containerSaveNote}>
            <Text style={estilo.saveNoteText}> Criar nota </Text>
          </View>
        </TouchableOpacity>
      
    </>
  );
};

export default Notas;
