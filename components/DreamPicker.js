import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

export default function DreamPicker({ label, items, selectedValue, onValueChange }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        {items.map((item, index) => (
          <Picker.Item key={index} label={item} value={item} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  // ...（既存のスタイル）
});
