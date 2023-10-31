// DreamJournalScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DreamJournalModal from '../components/DreamJournalModal';
import DreamJournalContainer from '../components/DreamJournalContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entry } from '../types//EntryTypes';

const DreamJournalScreen: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null); // 選択したエントリの状態を追加

  const handleSave = async (entry: Entry) => {
    if (selectedEntry) {
      const updatedEntries = entries.map((e) => e.id === selectedEntry.id ? entry : e);
      setEntries(updatedEntries);
      setSelectedEntry(null);
    } else {
      const newEntries = [...entries, entry];
      setEntries(newEntries);
    }
    await AsyncStorage.setItem('dreamJournal', JSON.stringify(entries));
  };

  const handleSelect = (entry: Entry) => {
    setSelectedEntry(entry);
  };

  const handleUpdate = (updatedEntry: Entry) => {
    const updatedEntries = entries.map((entry) =>
      entry.id === updatedEntry.id ? updatedEntry : entry
    );
    setEntries(updatedEntries);
  };

  const handlePress = (entry: Entry) => {
    console.log(entry);
  };

  return (
    <View style={styles.container}>
      <DreamJournalContainer entries={entries} setEntries={setEntries} onSelect={handleSelect} onUpdate={handleUpdate} onPress={handlePress} />
      <DreamJournalModal handleSave={handleSave} selectedEntry={selectedEntry} />
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

