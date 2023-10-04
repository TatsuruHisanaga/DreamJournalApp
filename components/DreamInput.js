import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function DreamInput({ label, value, onChangeText, multiline = false }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={multiline ? styles.textArea : styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={`Enter ${label}`}
        multiline={multiline}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    margin: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 0,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    height: 100,
    marginTop: 0,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 16,
  },
});

