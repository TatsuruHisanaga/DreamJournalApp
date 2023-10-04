import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const tags = [
  { label: '#喜び', value: 'joy' },
  { label: '#怒り', value: 'anger' },
  { label: '#驚き', value: 'surprise' },
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
      <Text style={styles.label}>タグ:</Text>
      <View style={styles.tagContainer}>
        {tags.map((tag, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tag, selectedTags.includes(tag.value) && styles.selectedTag]}
            onPress={() => toggleTag(tag.value)}
          >
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
    fontSize: 16,
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 16,
    margin: 4,
  },
  selectedTag: {
    backgroundColor: '#ccc',
  },
  tagLabel: {
    fontSize: 14,
  },
});
