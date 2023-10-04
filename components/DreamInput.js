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
  // ...（既存のスタイル）
});
