import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

interface Categoria {
  id: number;
  nome: string;
}

interface Atividade {
  id: number;
  nome: string;
  duracaoMinutos: number;
  distanciaKm: number;
  categoriaId: number;
}

export default function App() {
  // Categorias
  const categorias: Categoria[] = [
    { id: 1, nome: 'Corrida' },
    { id: 2, nome: 'Ciclismo' },
  ];

  // Estados
  const [nome, setNome] = useState('');
  const [duracao, setDuracao] = useState('');
  const [distancia, setDistancia] = useState('');
  const [categoriaId, setCategoriaId] = useState('1');

  const [atividades, setAtividades] = useState<any[]>([]);

  // Adicionar atividade
  function adicionarAtividade() {
    const novaAtividade: Atividade = {
      id: Date.now(),
      nome: nome,
      duracaoMinutos: Number(duracao),
      distanciaKm: Number(distancia),
      categoriaId: Number(categoriaId),
    };

    // JOIN com categoria
    const categoria = categorias.find(
      (cat) => cat.id === novaAtividade.categoriaId
    );

    const atividadeCompleta = {
      ...novaAtividade,
      categoriaNome: categoria?.nome,
    };

    setAtividades([...atividades, atividadeCompleta]);

    // Limpar campos
    setNome('');
    setDuracao('');
    setDistancia('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> App Fitness</Text>

      <TextInput
        placeholder="Nome do treino"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Duração em minutos"
        style={styles.input}
        keyboardType="numeric"
        value={duracao}
        onChangeText={setDuracao}
      />

      <TextInput
        placeholder="Distância em km"
        style={styles.input}
        keyboardType="numeric"
        value={distancia}
        onChangeText={setDistancia}
      />

      <TextInput
        placeholder="Categoria: 1 ou 2"
        style={styles.input}
        keyboardType="numeric"
        value={categoriaId}
        onChangeText={setCategoriaId}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={adicionarAtividade}
      >
        <Text style={styles.botaoTexto}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={atividades}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>

            <Text>
              ⏱ {item.duracaoMinutos} min
            </Text>

            <Text>
              📍 {item.distanciaKm} km
            </Text>

            <View style={styles.badge}>
              <Text style={styles.badgeTexto}>
                {item.categoriaNome}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },

  botao: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },

  botaoTexto: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  badge: {
    backgroundColor: 'green',
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    width: 100,
  },

  badgeTexto: {
    color: 'white',
    textAlign: 'center',
  },
});