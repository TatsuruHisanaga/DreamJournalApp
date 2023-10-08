import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AlarmScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>アラーム一覧（準備中🥺）</Text>
      {/* ここにアラームの一覧を表示するコードを追加 */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
