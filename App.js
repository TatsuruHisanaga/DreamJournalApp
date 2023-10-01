import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RankingView from './RankingView';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>やったぜー！</Text>
      <StatusBar style="auto" />
      <RankingView />
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
