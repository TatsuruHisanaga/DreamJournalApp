import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// この関数を呼び出すことで、AsyncStorageの全てのデータをクリアします。
const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Cleared all data');
  } catch (e) {
    console.error('Failed to clear the async storage.');
  }
};

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>マイページ（準備中🥺）</Text>
      {/* ここにプロフィール情報を表示するコードを追加 */}
      <Button title="Clear All Data" onPress={clearAllData} />
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
