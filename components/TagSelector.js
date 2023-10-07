import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const tags = [
  { label: '喜び', value: 'joy', icon: 'emoticon-happy-outline' },
  { label: '怒り', value: 'anger', icon: 'emoticon-angry-outline' },
  { label: '驚き', value: 'surprise', icon: 'emoticon-dead-outline' },
  { label: '悲しみ', value: 'sadness', icon: 'emoticon-sad-outline' },
  { label: '恐怖', value: 'fear', icon: 'emoticon-frown-outline' },
  { label: '期待', value: 'anticipation', icon: 'emoticon-excited-outline' },
  { label: '嫌悪', value: 'disgust', icon: 'emoticon-poop-outline' },
  // 他のタグもここに追加
];

export default function TagSelector({ selectedTags, setSelectedTags }) {
  const toggleTag = (tagValue) => {
    if (selectedTags.includes(tagValue)) {
      setSelectedTags(selectedTags.filter((t) => t !== tagValue));
    } else {
      setSelectedTags([...selectedTags, tagValue]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tags</Text>
      <View style={styles.tagContainer}>
        {tags.map((tag, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tag, selectedTags.includes(tag.value) && styles.selectedTag]}
            onPress={() => toggleTag(tag.value)}
          >
            <MaterialCommunityIcons name={tag.icon} size={18} color="gray" />
            <Text style={styles.tagLabel}>{tag.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 6,
    borderRadius: 12,
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedTag: {
    backgroundColor: '#ccc',
  },
  tagLabel: {
    fontSize: 14,
    marginLeft: 4, 
  },
});

