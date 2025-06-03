import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import DocumentPicker from '@react-native-documents/picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { styles } from './CrearPublicacion.styles';

export default function CrearPublicacionScreen() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [equipo, setEquipo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [area, setArea] = useState('');
  const [portadaUri, setPortadaUri] = useState(null);
  const [documento, setDocumento] = useState(null);

  const elegirImagen = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    if (!result.didCancel && result.assets?.length > 0) {
      setPortadaUri(result.assets[0].uri);
    }
  };

  const elegirDocumento = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: DocumentPicker.types.allFiles,
      });
      setDocumento(res);
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        console.warn('Error al elegir documento:', err);
      }
    }
  };

  const publicar = () => {
    Alert.alert('Publicación', 'Tu publicación ha sido enviada.');
  };

  const eliminarEdicion = () => {
    setTitulo('');
    setAutor('');
    setEquipo('');
    setCategoria('');
    setArea('');
    setPortadaUri(null);
    setDocumento(null);
    Alert.alert('Edición eliminada', 'Los campos se han limpiado.');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Nueva Publicación</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.btnSmall} onPress={publicar}>
            <Text style={styles.btnText}>Publicar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSmall} onPress={eliminarEdicion}>
            <Text style={styles.btnText}>Eliminar edición</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.inputButton}><Text>Título</Text></TouchableOpacity>
        <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} placeholder="Título" />

        <TouchableOpacity style={styles.inputButton}><Text>Autor</Text></TouchableOpacity>
        <TextInput style={styles.input} value={autor} onChangeText={setAutor} placeholder="Autor" />

        <TouchableOpacity style={styles.inputButton} onPress={elegirImagen}><Text>Portada</Text></TouchableOpacity>

        <TouchableOpacity style={styles.inputButton}><Text>Equipo Colaborador</Text></TouchableOpacity>
        <TextInput style={styles.input} value={equipo} onChangeText={setEquipo} placeholder="Colaboradores" />

        <TouchableOpacity style={styles.selectButton} onPress={() => setCategoria('Ciencia y Tecnología')}>
          <Text>Elegir categoría</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectButton} onPress={() => setArea('Ingeniería')}>
          <Text>Elegir área</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.previewContainer}>
        <View style={styles.previewHeader}>
          <Image source={require('../assets/IconoUsuario.png')} style={styles.iconUser} />
          <Text style={styles.previewAuthor}>{autor || 'Daniel Luna Benavidez'}</Text>
          <Text style={styles.previewTag}>{categoria || 'Ciencia y Tecnología'}</Text>
        </View>

        <View style={styles.previewContent}>
          <Text style={styles.previewTitle}>{titulo || 'Título de muestra'}</Text>
          <Text style={styles.previewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id.</Text>
          {portadaUri && <Image source={{ uri: portadaUri }} style={styles.previewImage} />}
        </View>
      </View>

      <View style={styles.floatingButtons}>
        <TouchableOpacity onPress={elegirImagen}><Text style={styles.floatingIcon}>➕</Text></TouchableOpacity>
        <TouchableOpacity onPress={elegirDocumento}><Text style={styles.floatingIcon}>📄</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

