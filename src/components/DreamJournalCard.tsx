// DreamJournalCard.tsx
import React from 'react';
import DreamJournalCommonCard from './DreamJournalCommonCard';
import { Entry } from '../types//EntryTypes';

interface DreamJournalCardProps {
  entry: Entry;
  onPress: (entry: Entry) => void;
  onUpdate: (entry: Entry) => void;
}

const DreamJournalCard: React.FC<DreamJournalCardProps> = ({ entry, onPress, onUpdate }) => {
  return <DreamJournalCommonCard entry={entry} onPress={() => onPress(entry)} onUpdate={() => onUpdate(entry)} />;
};

export default DreamJournalCard;

