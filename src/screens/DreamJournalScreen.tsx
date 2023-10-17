// DreamJournalScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DreamJournalModal from '../components/DreamJournalModal';
import DreamJournalContainer from '../components/DreamJournalContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Entry {
  title: string;
  details: string;
  date: Date;
  selectedTags: string[];
  wakeUpRating: number;
}

const DreamJournalScreen: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);

  const handleSave = async (entry: Entry) => {
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
};

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

export default DreamJournalScreen;

