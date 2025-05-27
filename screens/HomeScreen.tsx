import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenida a NovaHub 📚</Text>
      <Button title="Ir a la segunda pantalla" onPress={() => navigation.navigate('Second')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, marginBottom: 20, fontWeight: 'bold' },
});

export default HomeScreen;
