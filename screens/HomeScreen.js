import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Animated,
} from 'react-native';
import { styles } from './Home.styles';

export default function HomeScreen({ navigation }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.2,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('CrearPublicacion');
    });
  };

  return (
    <View style={styles.container}>
      {/* Fondo con estrellas en el encabezado */}
      <ImageBackground
        source={require('../assets/FondoNovaHub.png')}
        style={styles.headerBackground}
      >
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('../assets/IconoUsuario.png')} style={styles.profileIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>NovaHub</Text>
          <TouchableOpacity>
            <Image source={require('../assets/IconoNotificacion.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Buscador */}
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchBar}>
          <Image source={require('../assets/IconoBusqueda.png')} style={styles.searchIcon} />
          <TextInput
            placeholder="Buscar"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </TouchableOpacity>
      </View>

      {/* Espacio para contenido dinámico */}
      <View style={styles.content}></View>

      {/* Barra inferior de navegación */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image source={require('../assets/Nav_Home.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/Nav_Medalla.png')} style={styles.navIcon} />
        </TouchableOpacity>

        {/* 👉 Botón de publicación animado */}
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={styles.publicarBoton}
          >
            <Image
              source={require('../assets/Nav_Publicacion.png')}
              style={styles.publicarIcono}
            />
          </TouchableOpacity>
        </Animated.View>

        <TouchableOpacity>
          <Image source={require('../assets/Nav_Usuario.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/Nav_Chat.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}