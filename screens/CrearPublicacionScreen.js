import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { styles } from './CrearPublicacion.styles';

export default function CrearPublicacionScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Encabezado con fondo */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nueva Publicacion</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.buttonText}>Publicar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.buttonText}>Eliminar edición</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Botones con inputs */}
      <View style={styles.inputGroup}>
        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.inputLabel}>Título</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Título de la publicación" />

        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.inputLabel}>Autor</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Nombre del autor" />

        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.inputLabel}>Portada</Text>
        </TouchableOpacity>
        <View style={styles.placeholderBox} />

        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.inputLabel}>Equipo Colaborador</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Colaboradores" />

        <View style={styles.rowButtons}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.buttonText}>Elegir categoría</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.buttonText}>Elegir área</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Vista previa */}
      <View style={styles.previewCard}>
        <View style={styles.previewHeader}>
          <Image
            source={require('../assets/IconoUsuario.png')}
            style={styles.profileIcon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.previewName}>Daniel Luna Benavidez</Text>
            <Text style={styles.previewLine}></Text>
          </View>
          <Text style={styles.tag}>Ciencia y Tecnología</Text>
        </View>
        <Text style={styles.previewTitle}></Text>
        <View style={styles.previewTextBlock}>
          <Text style={styles.previewLine}></Text>
          <Text style={styles.previewLine}></Text>
          <Text style={styles.previewLine}></Text>
        </View>
        <Image
          source={require('../assets/LogoNovaHub.png')}
          style={styles.previewImage}
        />
      </View>

      {/* Botones flotantes */}
      <View style={styles.floatingButtons}>
        <TouchableOpacity style={styles.floatingButton}>
          <Text style={styles.floatingIcon}>＋</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingButton}>
          <Text style={styles.floatingIcon}>📤</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
