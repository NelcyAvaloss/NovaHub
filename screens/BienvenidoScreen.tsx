import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './Bienvenido.styles';
import type { RootStackParamList } from '../App'; // ajusta la ruta si es necesario

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Bienvenido'>;

export default function BienvenidoScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ImageBackground
      source={require('../assets/FondoNovaHub.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/LogoNovaHub.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Registrar')}
        >
          <Text style={styles.buttonText}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
