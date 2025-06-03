import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBackground: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  header: {
    marginTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileIcon: {
    width: 38,
    height: 38,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
  },
  searchContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#0e0e2c',
    borderRadius: 15,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 40,
  },
  searchIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20, // ✅ corregido
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0e0e2c',
    paddingVertical: 12,
    borderRadius: 30,
    marginHorizontal: 4,
  },
  navIcon: {
    width: 35,
    height: 35,
  },
});
