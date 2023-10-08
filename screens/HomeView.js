import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import AlarmCard from '../components/AlarmCard';
import AlarmSettingOverlay from '../components/AlarmSettingOverlay';
import RankingView from './RankingView';
import DreamJournalCard from '../components/DreamJournalCard';
import RingingAlarm from '../components/RingingAlarm';

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
