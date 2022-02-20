import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import estilo from './estiloComponents';


const Header = ({ notes, selectedIndex, checkDelete, updateData, route, navigation, title, note }) => {

    if(title==="Notas"){
    return (
        <View>
            <View style={estilo.container}>
                <View style={estilo.titleContainer}> 
                    <Text style={estilo.title}>{title}</Text>            
                </View>
                <View style={estilo.iconContainer}>
                    <TouchableOpacity onPress={() => {}} >
                        <View style={estilo.searchIcon}>
                            <Icon name="search" size ={25} color= "white" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Notas', {
                        notes,
                        updateData,
                    })}>
                        <View style={estilo.plusIcon}>
                            <Icon name="plus" size ={25} color= "white" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    } else if(title==="Criar nota") {
        return(
            <View>
                <View style={estilo.container}>
                    <View style={estilo.titleContainer}> 
                        <Text style={estilo.title}>{title}</Text>            
                    </View>
                    <View style={estilo.iconContainer}>
                        <TouchableOpacity onPress={() => {navigation.navigate('MostrarNotas')}} >
                            <View style={estilo.closeIcon}>
                                <Icon name="close" size ={25} color= "white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    } else if(title==="Voltar"){
        return(
            <View>
                <View style={estilo.container}>
                    <View>
                        <TouchableOpacity style={estilo.backContainer} onPress={() => {navigation.navigate('MostrarNotas')}} >
                            <View style={estilo.backIcon}>
                                <Icon name="angle-left" size ={25} color= "white" />
                            </View>
                            <Text style={estilo.text}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={estilo.iconContainer}>
                        <TouchableOpacity onPress={() => checkDelete() } >
                            <View style={estilo.trashIcon}>
                                <Icon name="trash" size ={25} color= "white" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('EditarNota', {
                            notes,
                            note,
                            selectedIndex,
                        })}>
                            <Text style={estilo.text} >Editar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    } else if(title==="Editar Nota"){
        return(
            <View>
                <View style={estilo.container}>
                    <View>
                        <View style={estilo.titleContainer}> 
                            <Text style={estilo.title}>{title}</Text>            
                        </View>
                    </View>
                    <View style={estilo.iconContainer}>
                        <TouchableOpacity onPress={() => checkDelete() } >
                            <View style={estilo.trashIcon}>
                                <Icon name="trash" size ={25} color= "white" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={estilo.backContainer} onPress={() => {navigation.goBack()}} >
                            <View style={estilo.closeIcon}>
                                <Icon name="close" size ={25} color= "white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
};
  
export default Header;
