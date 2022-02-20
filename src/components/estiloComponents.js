import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const NwindowWidth = Dimensions.get('window').width;
const NwindowHeight = Dimensions.get('window').height;
const NwindowHeightWithoutHeader = windowHeight - (windowHeight * 0.1261);

const estilo = StyleSheet.create({
    container: {
        height: windowHeight * 0.1261,
        alignItems: 'center',
        backgroundColor: '#0F62FE',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
    
      titleContainer: {
        flexDirection: 'row',
      },
      title: {
        marginLeft: 16,
        color: '#FFFFFF',
        fontFamily: 'IBM Plex Sans',
        fontSize: 32,
      },
      iconContainer: {
        flexDirection: 'row',
        margin: 10,
      },
      plusIcon:{
        marginLeft: 13.765,
        marginRight: 16
      },
      searchIcon:{
        marginRight: 13.765
      },
      closeIcon:{
        marginRight: 16,
        marginLeft: 16,
      },
      backIcon:{
        marginLeft: 10,
      },
      backContainer:{
          flexDirection: 'row',
      },
      searchIcon:{
        marginRight: 13.765
      },
      trashIcon:{
        marginRight: 13.765
      },
      text: {
        marginLeft: 13.765,
        color: '#FFFFFF',
        fontFamily: 'IBM Plex Sans',
        fontSize: 18,
      },
    
    Ncontainer:{
      backgroundColor: '#F2F2F2',
    },
    Nstack:{
      marginTop: NwindowHeight*0.05,
      position: 'absolute',
      width: 150,
      height: 250,
      marginLeft: 16,
      resizeMode: 'contain',
    },
    
    Ntext1: {
        color: '#161616',
        position: 'absolute',
        marginLeft: NwindowWidth * 0.0444,
        marginTop: NwindowHeightWithoutHeader * 0.4875,
        fontFamily: 'IBM Plex Sans',
        fontSize: 20,
        lineHeight: 24
      },
    Ntext2: {
        color: '#8D8D8D',
        position: 'absolute',
        marginLeft: NwindowWidth * 0.0444,
        marginTop: NwindowHeightWithoutHeader * 0.5375,
        fontFamily: 'IBM Plex Sans',
        fontSize: 14,
        lineHeight: 16
      },

    Ntcontainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: 175,
      marginLeft: 16,
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#F2F2F2'
    },
    Nttitle:{
      marginTop: 15,
      marginLeft: 15,
      marginRight: 10,
      fontFamily: 'IBM Plex Sans',
      fontSize: 17,
      lineHeight: 18,
      color: 'rgba(22, 22, 22, 0.8)',
    },
    Ntdesc: {
      marginTop: 5,
      marginLeft: 15,
      marginRight: 10,
      marginBottom: 10,
      fontFamily: 'IBM Plex Sans',
      fontSize: 14,
      lineHeight: 16,
      color: '#161616',
    },
    Nttag:{
      flex: 1,
      flexDirection:'row',
      marginLeft: 10,
      marginTop: 5,
      color: '#161616',
      marginBottom: 10,
      width: 175,
    },
    NttagContainer:{
      backgroundColor: '#E0E0E0',
      width: 175,
      borderRadius: 999,
      marginTop: 10,
      marginRight: 10,
      justifyContent: 'center',
      width: 58,
      height: 24,
      alignItems: 'center',
    },
    NttagText:{
      fontFamily: 'IBM Plex Sans',
      fontSize: 14,
      color: '#161616',
    },
    NtcheckboxContainer:{
      flexDirection: 'row',
      alignContent: 'center',
      marginLeft: 20,
      marginBottom: 7,
    },
    NtcheckboxContainerText:{
      alignSelf: 'center',
      fontFamily: 'IBM Plex Sans',
    }, 
});

export default estilo;