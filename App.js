import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RingingView from './RingingView';

export default function App() {
  const [isRinging, setIsRinging] = useState(false);
  return (
    <View style={styles.container}>
      <Text>やったぜー！</Text>
      <StatusBar style="auto" />
      <RingingView isRinging={isRinging} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
