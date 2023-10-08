// DreamJournalScreen.js
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import DreamJournalCard from '../components//DreamJournalCard';
import DreamJournalSampleCard from '../components/DreamJournalSampleCard';
import DreamJournalModal from '../components/DreamJournalModal';
import DreamJournalContainer from '../components/DreamJournalContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DreamJournalScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [entries, setEntries] = useState([]);
  // データの保存
  const handleSave = async (entry) => {
    const newEntries = [...entries, entry];
    setEntries(newEntries);
    await AsyncStorage.setItem('dreamJournal', JSON.stringify(newEntries));
  };

  return (
    <View style={styles.container}>
      <DreamJournalContainer entries={entries} setEntries={setEntries} />
      <DreamJournalModal handleSave={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingTop: 40,
    width: '100%',
  },
});
