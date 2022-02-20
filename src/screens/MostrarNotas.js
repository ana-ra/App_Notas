import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList, LogBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NotaVazia from '../components/NotaVazia';
import Header from '../components/Header';
import Note from '../components/Note';
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilo from './estilo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const MostrarNotas = ({ route, navigation }) => {

  const [notes, setNotes] = useState([]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@SALVAR_NOTA');
      const parsedJsonValue = jsonValue != null ? JSON.parse(jsonValue) : [];
      setNotes(parsedJsonValue);
    } catch(e) {
      // error reading value
    }
  }

  useEffect(()=>{
    getData();
  },[notes])

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  if((notes).length === 0) {
    return (
      <View style={estilo.Mostrarcontainer}>
          <Header updateData={()=>getData} notes={notes} route={route} navigation={navigation} title="Notas" iconAdd="true" iconSearch="true" />
          <NotaVazia  />     
          <View style={estilo.MostrarcontainerAddNote}>
          <TouchableOpacity onPress={() => navigation.navigate('Notas', {
                        notes,
                        updateData: getData,
                    })}>
                <View style={estilo.MostraraddNote}>
                    <Icon style={estilo.MostrarIcon} name="plus" size ={25} color= "white" />
                </View>
            </TouchableOpacity>
          </View>
      </View> 
    )
  } else {

    return (
      <View style={estilo.Mostrarcontainer}>
          <Header updateData={()=>getData} notes={notes} route={route} navigation={navigation} title="Notas" />
            <View>
               <FlatList
                    style={{marginBottom:200}}
                    data={notes}
                    numColumns={2}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({ item, index }) => {
                    return <Note notes={notes} navigation={navigation} note={item} index={index}/>;
                  }}
                />
            </View>
        <View style={estilo.MostrarcontainerAddNote}>
              <TouchableOpacity onPress={() => navigation.navigate('Notas', {
                        notes,
                        updateData: getData,
                    })}>
                <View style={estilo.MostraraddNote}>
                    <Icon style={estilo.MostrarIcon} name="plus" size ={25} color= "white" />
                </View>
            </TouchableOpacity>
          </View>
      </View>      
    );
  }
};

export default MostrarNotas;

