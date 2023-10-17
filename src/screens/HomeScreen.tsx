import React from 'react';
import { View, ViewStyle } from 'react-native';
import DreamJournalCard from '../components/DreamJournalCard';
// import DreamJournalSampleCard from '../components/DreamJournalSampleCard';
// import RingingAlarm from '../components/RingingAlarm';

interface Entry {
  name: string;
  date: string;
  title: string;
  details: string;
}

const HomeView: React.FC = () => {
  // サンプルエントリー
  const sampleEntry: Entry = {
    name: 'テストユーザー',
    date: new Date().toDateString(),
    title: 'テストの夢のタイトル',
    details: 'テストの夢の詳細',
  };

  const containerStyle: ViewStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <View style={containerStyle}>
      <DreamJournalCard entry={sampleEntry} />
    </View>
  );
};

export default HomeView;
