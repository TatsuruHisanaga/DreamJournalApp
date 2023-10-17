import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RankingList from '../components/RankingList';

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
    id: 11, name: 'あなた', time: 19,
  }

  const makeUserRanking = (userData, rankingData) => {
    const newRankingData = [...rankingData];
    newRankingData.push(userData);
    newRankingData.sort((a, b) => a.time - b.time);
    return newRankingData;
  }

  const newRankingData = makeUserRanking(userData, rankingData);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>早起きランキング</Text>
      <RankingList data={newRankingData} userData={userData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    height: '90%',
  },
  title: {
    fontSize: 24,
    marginTop: 45,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default RankingView;
