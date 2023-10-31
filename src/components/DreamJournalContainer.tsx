// DreamJournalContainer.tsx
import React, { useEffect, FC } from 'react';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DreamJournalCard from './DreamJournalCard';
import { Entry } from '../types//EntryTypes';
import DreamJournalSampleCard, {
  sampleEntries,
} from './DreamJournalSampleCard';

interface DreamJournalContainerProps {
  entries: Entry[];
  setEntries: React.Dispatch<React.SetStateAction<Entry[]>>;
  onSelect: (entry: Entry) => void;
  onUpdate: (entry: Entry) => void;
  onPress: (entry: Entry) => void;
}

const DreamJournalContainer: FC<DreamJournalContainerProps> = function ({
  entries,
  setEntries,
  onSelect,
  onUpdate,
  onPress,
}) {
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
    <ScrollView style={{ marginHorizontal: 12, paddingTop: 20, marginBottom: 12}} >
      {sampleEntries.map((entry, index) => (
        <DreamJournalSampleCard entry={entry} onPress={() => onPress(entry)} onUpdate={() => onUpdate(entry)} />
      ))}
      {entries.map((entry, index) => (
        <DreamJournalCard key={index} entry={entry} onPress={() => onSelect(entry)} onUpdate={() => onUpdate(entry)} />
      ))}
    </ScrollView>
  );
}

export default DreamJournalContainer;