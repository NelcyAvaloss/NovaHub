import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // 🟡 CONTENEDOR GENERAL DE LA PANTALLA
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // 🟣 ENCABEZADO: Imagen de fondo
  headerBackground: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingHorizontal: 0,
    paddingTop: 40,
  },

  // 🟣 ENCABEZADO: Contenedor del contenido (flecha, título, botones)
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // 🟣 ENCABEZADO: Texto de la flecha de regreso
  backText: {
    color: 'white',
    fontSize: 24,
  },

  // 🟣 ENCABEZADO: Título centrado
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    top: -1,
  },

  // 🟣 ENCABEZADO: Contenedor de botones (Publicar / Eliminar edición)
  headerButtons: {
    position: 'absolute',
    top: 65,
    right: 20,
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 6,
  },
  headerButton: {
    backgroundColor: '#3b5f82',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
  },

  // 🔵 SECCIÓN DE INPUTS DEL FORMULARIO
  inputGroup: {
    padding: 20,
    top: 85,
  },
  inputButton: {
    backgroundColor: '#3b5f82',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  inputLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
  },
  placeholderBox: {
    width: '100%',
    height: 120,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  optionButton: {
    backgroundColor: '#3b5f82',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  // 🟢 VISTA PREVIA DE LA PUBLICACIÓN
  previewCard: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  previewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  previewName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  previewLine: {
    height: 2,
    backgroundColor: '#001e3c',
    marginTop: 4,
    width: 100,
  },
  tag: {
    backgroundColor: '#001e3c',
    color: 'white',
    fontSize: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  previewTextBlock: {
    marginVertical: 8,
    gap: 6,
  },
  previewImage: {
    width: '100%',
    height: 120,
    marginTop: 10,
    borderRadius: 10,
  },

  // 🔴 BOTONES FLOTANTES LADO IZQUIERDO CON IMÁGENES (uno sobre otro)
floatingButtons: {
  flexDirection: 'column',       // Apilados verticalmente
  alignItems: 'flex-start',      // Alinea a la izquierda
  marginLeft: 20,                // Separación desde el borde izquierdo
  gap: 1,                       // Espacio entre los botones
  top: 110,
  marginBottom: 60,             // Espacio adicional desde la parte inferior
},

floatingButton: {
  width: 60,
  height: 60,
  borderRadius: 35,
  justifyContent: 'center',
  alignItems: 'center',
},

floatingImage: {
  width: 45,
  height: 45,
},


  // 🔙 BOTÓN DE REGRESO A HOME (↩)
  backButton: {
    position: 'absolute',
    top: -20,
    left: 10,
    zIndex: 10,
  },
});
