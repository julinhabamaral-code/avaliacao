import React, { useState } from 'react'; // 1. Importando o useState
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function App() {
  // 2. Criando a variável de memória (estado) que começa em 0
  const [curtidas, setCurtidas] = useState(0);

  return (
    <View style={styles.telaInteira}>
      <View style={styles.cartao}>
        <Image 
          source={{ uri: 'https://i.pinimg.com' }} 
          style={styles.avatar} 
        />
        
        <Text style={styles.nome}>Shrek</Text>
        <Text style={styles.profissao}>Ogro do Pântano</Text>

        {/* 3. Texto que mostra o valor das curtidas */}
        <Text style={styles.contador}>Esta foto tem {curtidas} curtidas!</Text>

        <View style={styles.areaBotoes}>
          {/* 4 e 5. Botão Curtir que aumenta +1 */}
          <Button 
            title="Curtir 👍" 
            onPress={() => setCurtidas(curtidas + 1)} 
            color="#6A5ACD"
          />

          {/* 6. Bônus: Botão Remover que tira 1 */}
          <View style={{ marginTop: 10 }}>
            <Button 
              title="Remover Curtida" 
              onPress={() => setCurtidas(curtidas > 0 ? curtidas - 1 : 0)} 
              color="#FF4500" 
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaInteira: {
    flex: 1,
    backgroundColor: '#6A5ACD', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartao: {
    backgroundColor: '#E6E6FA', 
    padding: 30,
    borderRadius: 20, 
    alignItems: 'center',
    width: 300,
    elevation: 8,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginBottom: 15,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B0082',
  },
  profissao: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  contador: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 15,
    textAlign: 'center',
  },
  areaBotoes: {
    width: '100%',
    marginTop: 10,
  }
});
