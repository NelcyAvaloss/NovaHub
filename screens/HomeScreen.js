import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { styles } from './Home.styles';

export default function HomeScreen() {
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
        <TouchableOpacity>
          <Image source={require('../assets/Nav_Publicacion.png')} style={styles.navIcon} />
        </TouchableOpacity>
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

