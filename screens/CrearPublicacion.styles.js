import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#001e3c',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  backText: {
    color: 'white',
    fontSize: 24,
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerButtons: {
    position: 'absolute',
    top: 50,
    right: 20,
    flexDirection: 'row',
    gap: 10,
  },
  headerButton: {
    backgroundColor: '#3b5f82',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
  },
  inputGroup: {
    padding: 20,
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

  // Vista previa
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

  // Botones flotantes
  floatingButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
  },
  floatingButton: {
    width: 50,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingIcon: {
    fontSize: 24,
    color: '#fff',
  },
});
