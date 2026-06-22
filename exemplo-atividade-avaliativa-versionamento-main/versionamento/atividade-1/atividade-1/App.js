import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cracha}>
        <Image
          source={{ uri: 'https://www.pngegg.com/pt/png-ouojv' }}
          style={styles.imagem}
        />
        <Text style={styles.nome}>Ana Julia</Text>
        <Text style={styles.profissao}>Estudante de Desenvolvimento</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A5ACD', // Pode trocar pela sua cor favorita
    justifyContent: 'center',
    alignItems: 'center',
  },
  cracha: {
    backgroundColor: '#E6E6FA',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  profissao: {
    fontSize: 16,
    color: 'gray',
  },
});