import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import MostrarNotas from '../screens/MostrarNotas';
import Notas from '../screens/Notas';
import NotaAberta from '../screens/NotaAberta';
import EditarNota from '../screens/EditarNota';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen   
                      name="MostrarNotas"
                      component={MostrarNotas}
                      options={{headerShown: false}}/>
            <Stack.Screen 
                      name="Notas"
                      component={Notas} 
                      options={{headerShown: false}}/>
            <Stack.Screen 
                      name="NotaAberta"
                      component={NotaAberta} 
                      options={{headerShown: false}}/>
            <Stack.Screen 
                      name="EditarNota"
                      component={EditarNota} 
                      options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  };
  
  export default Navigator;
