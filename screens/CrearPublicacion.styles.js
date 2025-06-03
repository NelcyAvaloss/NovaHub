import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  header: {
    backgroundColor: '#0a0f2c',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerButtons: {
    flexDirection: 'column',
    gap: 8,
  },
  btnSmall: {
    backgroundColor: '#145DA0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginTop: 4,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    gap: 8,
  },
  inputButton: {
    backgroundColor: '#12355B',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
  },
  selectButton: {
    backgroundColor: '#1774d0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  previewContainer: {
    margin: 20,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  previewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  iconUser: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  previewAuthor: {
    fontWeight: 'bold',
  },
  previewTag: {
    marginLeft: 'auto',
    backgroundColor: '#12355B',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 10,
  },
  previewContent: {
    marginTop: 10,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  previewText: {
    color: '#333',
    lineHeight: 20,
    marginBottom: 10,
    textAlign: 'justify',
  },
  previewImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  floatingButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  floatingIcon: {
    fontSize: 30,
  },
});
