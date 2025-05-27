import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SecondScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Estás en la Segunda Pantalla!</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0f7fa' },
  title: { fontSize: 22, marginBottom: 20, fontWeight: 'bold' },
});

export default SecondScreen;
