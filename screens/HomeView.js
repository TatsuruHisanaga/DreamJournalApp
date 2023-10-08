import React from 'react';
import { View } from 'react-native';
import DreamJournalCard from '../components/DreamJournalCard';

export default function HomeView() {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <RankingView /> */}
      <DreamJournalCard
        entry={{
          name: 'テストユーザー',
          date: new Date().toDateString(),
          title: 'テストの夢のタイトル',
          details: 'テストの夢の詳細',
        }}
      />
    </View>
  );
}
