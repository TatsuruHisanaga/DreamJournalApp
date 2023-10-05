import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const RankingList = ({ data, userData }) => {

  const switchBgColor = (id) => {
    if (id === userData.id) {
      return { backgroundColor: '#f0f0f0', borderWidth: 2, borderColor: '#ccc' };
    }
    else {
      return { backgroundColor: 'white' };
    }
  }

  const rankStyle = (rank) => {
    switch(rank) {
      case 0: // 1位
        return styles.firstPlace;
      case 1: // 2位
        return styles.secondPlace;
      case 2: // 3位
        return styles.thirdPlace;
      default:
        return null;
    }
  }

  return (
    <FlatList 
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item, index }) => (
        <View style={[styles.listItem, switchBgColor(item.id), rankStyle(index)]}>
          <Text style={styles.rank}>{index + 1}</Text>
          {/* アバター画像を追加したい */}
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.score}>{item.time}s</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 1,
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
  },
  firstPlace: {
    backgroundColor: 'gold',
  },
  secondPlace: {
    backgroundColor: 'silver',
  },
  thirdPlace: {
    backgroundColor: '#cd7f32', // bronze color
  },
});

export default RankingList;
