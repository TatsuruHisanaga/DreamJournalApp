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
    label: '幸せ',
    value: 'happy',
    icon: 'emoticon-outline',
    color: '#E0F2FE',
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

  let ratingBarColor;
  if (entry.wakeUpRating >= 4) {
    ratingBarColor = 'limegreen'; 
  } else if (entry.wakeUpRating === 3) {
    ratingBarColor = 'orange'; 
  } else {
    ratingBarColor = 'red'; 
  }

  const defaultImageUri = 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80';

  return (
    <Surface style={styles.card} elevation={1}>
    <View style={styles.imageWrapper}>
      <Image source={{ uri: entry.dreamImage || defaultImageUri }} style={styles.dreamImage} />
    </View>
      <View style={styles.header}>
        <Text style={styles.date}>{formatDate(entry.date)}</Text>
        <Text style={styles.name}>{/* {entry.name} */}</Text>
      </View>
      <Text style={styles.title}>{entry.title}</Text>
      {entry.wakeUpRating && (
        <View style={styles.ratingBarContainer}>
          {[1, 2, 3, 4, 5].map((i) => (
            <View
              key={i}
              style={[
                styles.ratingDot,
                {
                  backgroundColor: i <= entry.wakeUpRating ? ratingBarColor : '#ccc',
                },
              ]}
            />
          ))}
        </View>
      )}
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
    marginBottom: 30,
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
  ratingBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
    width: 50,
  },
  ratingDot: {
    width: 6, // 点の大きさ
    height: 6, // 点の大きさ
    borderRadius: 3, // 半径を設定して丸くする
  },
});
