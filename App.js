import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pantallas
import BienvenidoScreen from './screens/BienvenidoScreen';
import RegistrarScreen from './screens/RegistrarScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CrearPublicacionScreen from './screens/CrearPublicacionScreen';


import { PublicacionProvider } from './contexts/PublicacionContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PublicacionProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Bienvenido" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Bienvenido" component={BienvenidoScreen} />
          <Stack.Screen name="Registrar" component={RegistrarScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CrearPublicacion" component={CrearPublicacionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PublicacionProvider>
  );
}
