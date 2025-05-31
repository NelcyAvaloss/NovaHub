import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa tus pantallas
import BienvenidoScreen from './screens/BienvenidoScreen';
import RegistrarScreen from './screens/RegistrarScreen';

// Define los nombres de las pantallas válidas
export type RootStackParamList = {
  Bienvenido: undefined;
  Registrar: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenido" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bienvenido" component={BienvenidoScreen} />
        <Stack.Screen name="Registrar" component={RegistrarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

