import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa las pantallas
import BienvenidoScreen from './screens/BienvenidoScreen';
import RegistrarScreen from './screens/RegistrarScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenido" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bienvenido" component={BienvenidoScreen} />
        <Stack.Screen name="Registrar" component={RegistrarScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


