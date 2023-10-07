import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DreamJournalCard from '../components//DreamJournalCard';
import DreamJournalModal from '../components/DreamJournalModal';

export default function DreamJournalScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const sampleEntry = {
    name: 'テストユーザー',
    date: new Date().toDateString(),
    title: 'テストの夢のタイトル',
    details: 'テストの夢の詳細',
  };

  return (
    <View style={styles.container}>
      <DreamJournalCard entry={sampleEntry} />
      <DreamJournalModal modalVisible={modalVisible} setModalVisible={setModalVisible} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
});
