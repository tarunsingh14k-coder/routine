import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [routines, setRoutines] = useState([]);
  const [text, setText] = useState('');

  const addRoutine = () => {
    if (!text) return;

    setRoutines([
      ...routines,
      {
        id: Date.now().toString(),
        title: text,
      },
    ]);

    setText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>⚡ ROUTINE AI</Text>

      <TextInput
        placeholder="Add your routine..."
        placeholderTextColor="#999"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={addRoutine}>
        <Text style={styles.buttonText}>ADD ROUTINE</Text>
      </TouchableOpacity>

      <FlatList
        data={routines}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    padding: 20,
  },

  heading: {
    color: 'white',
    fontSize: 38,
    fontWeight: '900',
    marginTop: 40,
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#151515',
    color: 'white',
    padding: 18,
    borderRadius: 20,
    fontSize: 16,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 25,
  },

  buttonText: {
    color: 'black',
    fontWeight: '900',
    fontSize: 16,
  },

  card: {
    backgroundColor: '#1f1f1f',
    padding: 20,
    borderRadius: 24,
    marginBottom: 15,
  },

  cardText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});