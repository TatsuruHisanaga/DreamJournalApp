// DreamJournalCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Surface } from 'react-native-paper';

const tags = [
  {
    label: '喜び',
    value: 'joy',
    icon: 'emoticon-happy-outline',
    color: '#FFF4CC',
  },
  {
    label: '怒り',
    value: 'anger',
    icon: 'emoticon-angry-outline',
    color: '#FFD1D1',
  },
  {
    label: '驚き',
    value: 'surprise',
    icon: 'emoticon-dead-outline',
    color: '#CCECEC',
  },
  {
    label: '悲しみ',
    value: 'sadness',
    icon: 'emoticon-sad-outline',
    color: '#CCE0F5',
  },
  {
    label: '恐怖',
    value: 'fear',
    icon: 'emoticon-frown-outline',
    color: '#E6CCFF',
  },
  {
    label: '期待',
    value: 'anticipation',
    icon: 'emoticon-excited-outline',
    color: '#F0FFE0',
  },
  {
    label: '嫌悪',
    value: 'disgust',
    icon: 'emoticon-poop-outline',
    color: '#E0C2A2',
  },
];

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

  // タグのアイコンとラベルをマッピングする関数
  const getTagIconAndLabel = (value) => {
    const tag = tags.find((t) => t.value === value);
    return tag ? { icon: tag.icon, label: tag.label, color: tag.color } : null;
  };

  return (
    <Surface style={styles.card} elevation={1}>
      {entry.dreamImage && (
        <View style={styles.imageWrapper}>
          <Image source={{ uri: entry.dreamImage }} style={styles.dreamImage} />
        </View>
      )}
      <View style={styles.header}>
        <Text style={styles.date}>{formatDate(entry.date)}</Text>
        <Text style={styles.name}>{/* {entry.name} */}</Text>
      </View>
      <Text style={styles.title}>{entry.title}</Text>
      <Text style={styles.details}>{entry.details}</Text>
      <View style={styles.tagsContainer}>
        {entry.selectedTags &&
          entry.selectedTags.map((tagValue, index) => {
            const tagInfo = getTagIconAndLabel(tagValue);
            return (
              <View
                key={index}
                style={[styles.tag, { backgroundColor: tagInfo.color }]}
              >
                <MaterialCommunityIcons name={tagInfo.icon} size={18} />
                <Text style={styles.tagLabel}>{tagInfo.label}</Text>
              </View>
            );
          })}
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  card: {
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
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 8,
    padding: 4,
    margin: 4,
  },
  tagLabel: {
    fontSize: 12,
    marginLeft: 4,
  },
});
