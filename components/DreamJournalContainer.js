// DreamJournalContainer.js
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DreamJournalModal from './DreamJournalModal';
import DreamJournalCard from './DreamJournalCard';

export default function DreamJournalContainer() {
  const [entries, setEntries] = useState([]);

  // データの保存
  const handleSave = async (entry) => {
    const newEntries = [...entries, entry];
    setEntries(newEntries);
    await AsyncStorage.setItem('dreamJournal', JSON.stringify(newEntries));
  };

  // データの読み込み
  useEffect(() => {
    const fetchEntries = async () => {
      const storedEntries = await AsyncStorage.getItem('dreamJournal');
      if (storedEntries) {
        setEntries(JSON.parse(storedEntries));
      }
    };
    fetchEntries();
  }, []);

  return (
    <ScrollView>
      <DreamJournalModal handleSave={handleSave} />
      {entries.map((entry, index) => (
        <DreamJournalCard key={index} entry={entry} />
      ))}
    </ScrollView>
  );
}

