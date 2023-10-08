// DreamJournalContainer.js
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DreamJournalCard from './DreamJournalCard';
import DreamJournalSampleCard, { sampleEntries }  from '../components/DreamJournalSampleCard';


export default function DreamJournalContainer({ handleSave, entries, setEntries }) {
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
            {sampleEntries.map((entry, index) => (
        <DreamJournalSampleCard key={index} entry={entry} />
      ))}
      {entries.map((entry, index) => (
        <DreamJournalCard key={index} entry={entry} />
      ))}
    </ScrollView>
  );
}


