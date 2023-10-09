// DreamJournalCommonCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Surface } from 'react-native-paper';

export default function DreamJournalCommonCard({ entry, tags }) {
  function formatDate(dateString, fallbackDate) {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return fallbackDate;
      }
      const day = date.getDate();
      const month = date.getMonth() + 1; // 月は0から始まるため、+1が必要
      const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
        date.getDay()
      ];
      return `${dayOfWeek} ${month}/${day}`;
    } catch (e) {
      return fallbackDate;
    }
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

  return (
    <Surface style={styles.card} elevation={1}>
      <View style={styles.imageWrapper}>
        {entry.dreamImage && (
          <Image source={{ uri: entry.dreamImage }} style={styles.dreamImage} />
        )}
      </View>
      <View style={styles.header}>
        <Text style={styles.date}>{formatDate(entry.date, entry.date)}</Text>
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
                  backgroundColor:
                    i <= entry.wakeUpRating ? ratingBarColor : '#ccc',
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
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 8,
    padding: 4,
    marginRight: 8,
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
    marginLeft: 2,
    width: 50,
  },
  ratingDot: {
    width: 6, // 点の大きさ
    height: 6, // 点の大きさ
    borderRadius: 3, // 半径を設定して丸くする
  },
});
