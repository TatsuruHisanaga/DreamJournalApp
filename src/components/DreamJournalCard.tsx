// DreamJournalCard.tsx
// DreamJournalCard.tsx
import React from 'react';
import DreamJournalCommonCard, { Entry as CommonEntry } from './DreamJournalCommonCard';

interface DreamJournalCardProps {
  entry: CommonEntry;
}

const DreamJournalCard: React.FC<DreamJournalCardProps> = ({ entry }) => {
  return <DreamJournalCommonCard entry={entry} />;
};

export default DreamJournalCard;

