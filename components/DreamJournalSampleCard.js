import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function DreamJournalCard({ entry }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // 月は0から始まるため、+1が必要
    const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
      date.getDay()
    ];
    return `${dayOfWeek} ${month}/${day}`;
  }

  return (
    <View style={styles.card}>
      {entry.dreamImage && (
        <View style={styles.imageWrapper}>
          <Image source={{ uri: entry.dreamImage }} style={styles.dreamImage} />
        </View>
      )}
      <View style={styles.header}>
        <Text style={styles.date}>{formatDate(entry.date)}</Text>
        <Text style={styles.name}>{/* {entry.name} */}</Text>
      </View>
      {/* <Image source={{ uri: entry.image }} style={styles.dreamImage} /> */}
      <Text style={styles.title}>{entry.title}</Text>
      <Text style={styles.details}>{entry.details}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    marginHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  name: {
    fontWeight: 'bold',
    flex: 1,
  },
  date: {
    color: '#aaa',
  },
  // imageWrapper: {
  //   elevation: 10,
  //   borderRadius: 10,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 200,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  // },
  dreamImage: {
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
});