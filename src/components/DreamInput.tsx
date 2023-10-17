// DreamInput.tsx
import React, { useState, FC } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface DreamInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  multiline?: boolean;
}

const DreamInput: FC<DreamInputProps> = ({ label, value, onChangeText, placeholder, multiline = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={isFocused ? styles.focusedInput : (multiline ? styles.textArea : styles.input)}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}

export default DreamInput;


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
    marginTop: 0,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 16,
  },
  focusedInput: {
    borderWidth: 1,
    borderColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 0,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 16,
  },
});

