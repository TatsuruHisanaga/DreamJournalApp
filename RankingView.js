import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const RankingView = () => {

  const rankingData = [
    { id: 1, name: 'Alice', time: 10 },
    { id: 2, name: 'Bob', time: 20 },
    { id: 3, name: 'Charlie', time: 30 },
    { id: 4, name: 'Dave', time: 40 },
    { id: 5, name: 'Ellen', time: 50 },
    { id: 6, name: 'Frank', time: 60 },
    { id: 7, name: 'Grace', time: 70 },
    { id: 8, name: 'Henry', time: 80 },
    { id: 9, name: 'Ivy', time: 90 },
    { id: 10, name: 'John', time: 100 },
  ];

  const userData = {
    id: 11, name: 'USER', time: 19,
  }

  const makeUserRanking = (userData, rankingData) => {
    const newRankingData = [...rankingData];
    newRankingData.push(userData);
    newRankingData.sort((a, b) => a.time - b.time);
    return newRankingData;
  }

  const newRankingData = makeUserRanking(userData, rankingData);

  const switchBgColor = (id) => {
    if (id === userData.id) {
      return { backgroundColor: 'blue' };
    }
    else {
      return { backgroundColor: 'white' };
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking</Text>
      <FlatList 
        data={newRankingData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.listItem, switchBgColor(item.id)]}>
            <Text style={styles.rank}>{index + 1}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.score}>{item.time}sec.</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
  },
  title: {
    fontSize: 24,
    marginTop: 45,
    marginBottom: 16,
    textAlign: 'center',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  rank: {
    fontSize: 16,
    width: 30,
  },
  name: {
    flex: 1,
    fontSize: 16,
  },
  score: {
    fontSize: 16,
    width: 50,
  },
});

export default RankingView;
