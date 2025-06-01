import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { styles } from './Login.styles';
import { useNavigation } from '@react-navigation/native'; // ✅ Importa useNavigation

export default function LoginScreen() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [verContrasena, setVerContrasena] = useState(false);

  const navigation = useNavigation(); // ✅ Inicializa navegación

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      <ImageBackground
        source={require('../assets/FondoNovaHub.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Botón de retroceso */}
        <TouchableOpacity onPress={() => navigation.navigate('Bienvenido')} style={styles.backButton}>
          <Text style={{ fontSize: 60, color: '#fff', lineHeight: 45 }}>↩</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          {/* Título superior */}
          <Text style={styles.welcome}>Welcome{"\n"}Back!</Text>

          {/* Contenedor curvado blanco */}
          <View style={styles.overlay}>
            <Text style={styles.loginTitle}>User Login</Text>

            <Text style={styles.label}>Nombre de Usuario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre de usuario"
              placeholderTextColor="#999"
              value={usuario}
              onChangeText={setUsuario}
            />

            <Text style={styles.label}>Insertar Contraseña</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="***********"
                placeholderTextColor="#999"
                value={contrasena}
                onChangeText={setContrasena}
                secureTextEntry={!verContrasena}
              />
              <TouchableOpacity onPress={() => setVerContrasena(!verContrasena)}>
                <Text style={styles.toggle}>{verContrasena ? '🙈' : '👁️'}</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={styles.forgotText}>¿Has olvidado tu contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

