// DreamJournalCard.tsx
// DreamJournalCard.tsx
import React from 'react';
import DreamJournalCommonCard from './DreamJournalCommonCard';
import { Entry } from '../types//EntryTypes';

interface DreamJournalCardProps {
  entry: Entry;
}

const DreamJournalCard: React.FC<DreamJournalCardProps> = ({ entry }) => {
  return <DreamJournalCommonCard entry={entry} />;
};

export default DreamJournalCard;

