import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { styles } from './CrearPublicacion.styles';

export default function CrearPublicacionScreen({ navigation }) {
  const [mostrarCategorias, setMostrarCategorias] = useState(false);
  const [mostrarAreas, setMostrarAreas] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [areaSeleccionada, setAreaSeleccionada] = useState('');

  // Categorías con sus respectivas áreas
  const categoriasConAreas = {
    'Ciencia y Tecnología': ['Desarrollo Web', 'Biotecnología', 'Robótica'],
    Farmacología: ['Farmacocinética', 'Toxicología', 'Farmacodinamia'],
    Medicina: ['Salud Pública', 'Neurología', 'Medicina Interna'],
    Ingeniería: ['Civil', 'Eléctrica', 'Mecánica'],
    Educación: ['Educación Infantil', 'Pedagogía', 'Didáctica'],
  };

  const categorias = Object.keys(categoriasConAreas);
  const areasDisponibles = categoriaSeleccionada
    ? categoriasConAreas[categoriaSeleccionada]
    : [];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      {/* Encabezado con imagen de fondo */}
      <ImageBackground
        source={require('../assets/FondoNovaHub.png')}
        style={styles.headerBackground}
      >
        <View style={styles.headerContent}>
          {/* Botón de retroceso */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.backButton}
          >
            <Text style={{ fontSize: 50, color: '#fff', lineHeight: 42 }}>↩</Text>
          </TouchableOpacity>

          {/* Título */}
          <Text style={styles.headerTitle}>Nueva Publicación</Text>

          {/* Botones superiores derechos */}
          <View style={styles.headerButtons}>
            <TouchableOpacity style={styles.headerButton}>
              <Text style={styles.buttonText}>Publicar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Text style={styles.buttonText}>Eliminar edición</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {/* Formulario visual */}
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
          <Text style={styles.inputLabel}>Descripción</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Descripcións de la publicación" />

        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.inputLabel}>Equipo Colaborador</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Colaboradores" />

        {/* Botones de categoría y área */}
        <View style={styles.rowButtons}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => setMostrarCategorias(!mostrarCategorias)}
          >
            <Text style={styles.buttonText}>
              {categoriaSeleccionada || 'Elegir categoría'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => setMostrarAreas(!mostrarAreas)}
            disabled={!categoriaSeleccionada}
          >
            <Text style={styles.buttonText}>
              {areaSeleccionada || 'Elegir área'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Mostrar lista de categorías */}
        {mostrarCategorias && (
          <View style={{ marginTop: 10 }}>
            {categorias.map((cat, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setCategoriaSeleccionada(cat);
                  setAreaSeleccionada('');
                  setMostrarCategorias(false);
                  setMostrarAreas(false);
                }}
                style={styles.optionButton}
              >
                <Text style={styles.buttonText}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Mostrar lista de áreas según la categoría seleccionada */}
        {mostrarAreas && categoriaSeleccionada && (
          <View style={{ marginTop: 10 }}>
            {areasDisponibles.map((area, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setAreaSeleccionada(area);
                  setMostrarAreas(false);
                }}
                style={styles.optionButton}
              >
                <Text style={styles.buttonText}>{area}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Botones flotantes */}
      <View style={styles.floatingButtons}>
        <TouchableOpacity style={styles.floatingButton}>
          <Image
            source={require('../assets/AgregarDocs.png')}
            style={styles.floatingImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingButton}>
          <Image
            source={require('../assets/SubirImagen.png')}
            style={styles.floatingImage}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
