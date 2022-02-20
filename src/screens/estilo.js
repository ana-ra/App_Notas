
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Dimensions, TouchableOpacity, LogBox, Alert, Keyboard } from 'react-native';
import Header from '../components/Header';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const estilo = StyleSheet.create({
  nameNote:{
    marginLeft: 20,
    marginTop: 30,
    height: 18,
    color: '#161616',
    fontFamily: 'IBM Plex Sans',
    fontSize: 16,
    lineHeight: 18,
    left: 80,

  },
  nameNoteInput:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 40,
    fontFamily: 'IBM Plex Sans',
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  title:{
    marginLeft: 20,
    marginTop: 40,
    height: 18,
    color: '#161616',
    fontFamily: 'IBM Plex Sans',
    fontSize: 16,
    lineHeight: 18,
    left: 140,
  },

  Ptitle:{
    marginLeft: 20,
    marginTop: 40,
    height: 18,
    color: '#161616',
    fontFamily: 'IBM Plex Sans',
    fontSize: 16,
    lineHeight: 18,
    left: 90,
  },
  Dtitle:{
    marginLeft: 20,
    marginTop: 40,
    height: 18,
    color: '#161616',
    fontFamily: 'IBM Plex Sans',
    fontSize: 16,
    lineHeight: 18,
    left: 160,
  },
    DIcon:{
    left: 360,
    top: 40,
  },

  Ltitle:{
    marginLeft: 20,
    marginTop: 40,
    height: 18,
    color: '#161616',
    fontFamily: 'IBM Plex Sans',
    fontSize: 16,
    lineHeight: 18,
    left: 120,
  },
  Atitle:{
    marginLeft: 20,
    marginTop: 40,
    height: 18,
    color: '#161616',
    fontFamily: 'IBM Plex Sans',
    fontSize: 16,
    lineHeight: 18,
    left: 90,
  },
  Ctitle:{
    marginLeft: 20,
    marginTop: 40,
    height: 18,
    color: '#161616',
    fontFamily: 'IBM Plex Sans',
    fontSize: 16,
    lineHeight: 18,
    left: 120,
  },

  Ttitle:{
    marginLeft: 20,
    marginTop: 40,
    height: 18,
    color: '#161616',
    fontFamily: 'IBM Plex Sans',
    fontSize: 16,
    lineHeight: 18,
    left: 120,
  },




  descriptionNoteInput:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 140,
    fontFamily: 'IBM Plex Sans',
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  picker:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 40,
    fontFamily: 'IBM Plex Sans',
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },

  dateNoteInput:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 40,
    width: 300,
    fontFamily: 'IBM Plex Sans',
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  checkbox:{
    flexDirection: 'row',
    alignContent: 'center',
    marginLeft: 20,
    marginBottom: 7,
  },
  checkboxTexto:{
    alignSelf: 'center',
    fontFamily: 'IBM Plex Sans',
  }, 
  addItemContainer:{
    flexDirection: 'row',
  },
  addItemInput:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 40,
    width: 250,
    fontFamily: 'IBM Plex Sans',
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },

  addItemButton:{
    alignSelf: 'center',
  },
  addItemText:{
    color: 'blue',
    fontFamily: 'IBM Plex Sans',
  },  

  addTagInput:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 40,
    height: 40,
    width: 300,
    fontFamily: 'IBM Plex Sans',
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
    
  },
  saveNote:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerSaveNote: {
    height: windowHeight * 0.1,
    width: windowWidth,
    backgroundColor: '#0F62FE',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  saveNoteText:{
    color: '#FFFFFF',
    fontFamily: 'IBM Plex Sans',
    fontSize: 18,
  },

  Mostrarcontainer:{
    flex:1,
  },
  MostrarcontainerAddNote:{
    position: 'absolute',
    width: 50,
    height: 50,
    marginLeft: windowWidth-70,
    marginTop: windowHeight-100,
  },
  MostraraddNote:{
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#0F62FE',
  },
  MostrarIcon:{
    alignSelf: 'center'
  },

   NonameNote:{
    marginLeft: 20,
    marginTop: 30,
    height: 18,
    color: '#161616',
    fontFamily: 'IBM Plex Sans',
    fontSize: 16,
    lineHeight: 18,
  },

  NonameNoteInput:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 40,
    fontFamily: 'IBM Plex Sans',
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  Notitle:{
    marginLeft: 20,
    marginTop: 40,
    height: 18,
    color: '#161616',
    fontFamily: 'IBM Plex Sans',
    fontSize: 16,
    lineHeight: 18,
  },

  NodescriptionNoteInput:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 140,
    fontFamily: 'IBM Plex Sans',
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  Nopicker:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 40,
    fontFamily: 'IBM Plex Sans',
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  NopickerColor:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom:40,
    height: 40,
    fontFamily: 'IBM Plex Sans',
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },

  NodateNoteInput:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 40,
    fontFamily: 'IBM Plex Sans',
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },

  NosaveNote:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  NocontainerSaveNote: {
    height: windowHeight * 0.1,
    width: windowWidth,
    backgroundColor: '#0F62FE',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  NosaveNoteText:{
    color: '#FFFFFF',
    fontFamily: 'IBM Plex Sans',
    fontSize: 18,
  },
  tarefasContainer:{
    
  },
  NocheckboxContainer:{
    flexDirection: 'row',
    alignContent: 'center',
    marginLeft: 20,
  },
  NocheckboxContainerText:{
    alignSelf: 'center',
    fontFamily: 'IBM Plex Sans',
  }, 
  NoaddItemContainer:{
    flexDirection: 'row',
  },
  NoaddItemInput:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 40,
    width: 250,
    fontFamily: 'IBM Plex Sans',
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },

  NoaddItemButton:{
    alignSelf: 'center',
  },
  NoaddItemText:{
    color: 'blue',
    fontFamily: 'IBM Plex Sans',
  },

  Nacontainer: {
    flex:1
  },
  Natitle:{
    marginLeft: 16,
    marginTop: 30,
    fontFamily: 'IBM Plex Sans',
    fontSize: 15,
    lineHeight: 15,
    color: '#8D8D8D',
  },
  Natext:{
    marginLeft: 16,
    marginTop: 5,
    fontFamily: 'IBM Plex Sans',
    fontSize: 19,
    color: '#161616',
  },
  Napicker:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 40,
    fontFamily: 'IBM Plex Sans',
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  Natag:{
    flexDirection:'row',
    marginLeft: 16,
    marginBottom:40,
    marginTop: 5,
    fontFamily: 'IBM Plex Sans',
    fontSize: 19,
    color: '#161616',
  },
  NatagContainer:{
    backgroundColor: '#E0E0E0',
    borderRadius: 999,
    marginTop: 10,
    marginRight: 10,
    justifyContent: 'center',
    width: 58,
    height: 24,
    alignItems: 'center',
  },
  NatagText:{
    fontFamily: 'IBM Plex Sans',
    fontSize: 15,
    color: '#161616',
  },
  NatarefasContainer:{
    marginBottom: 100,
  },
  NacheckboxContainer:{
    flexDirection: 'row',
    alignContent: 'center',
    marginLeft: 20,
  },
  NacheckboxContainerText:{
    alignSelf: 'center',
    fontFamily: 'IBM Plex Sans',
  },   
});

export default estilo;