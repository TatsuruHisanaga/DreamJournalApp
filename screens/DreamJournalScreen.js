// DreamJournalScreen.js
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import DreamJournalCard from '../components//DreamJournalCard';
import DreamJournalSampleCard from '../components/DreamJournalSampleCard';
import DreamJournalModal from '../components/DreamJournalModal';
import DreamJournalContainer from '../components/DreamJournalContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DreamJournalScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [entries, setEntries] = useState([]);
  // データの保存
  const handleSave = async (entry) => {
    const newEntries = [...entries, entry];
    setEntries(newEntries);
    await AsyncStorage.setItem('dreamJournal', JSON.stringify(newEntries));
  };
  const sampleEntry = {
    dreamImage:
      'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    name: 'h_tatsuru',
    date: new Date().toDateString(),
    title: 'DJになってクラブで熱狂',
    details:
      '私はDJとしてクラブの中心に立っていた。集まった人々は音楽に身を任せ、狂ったように踊り続ける。私の目の前には熱心なファンたちの海が広がっていた。スモークマシンの煙が会場を神秘的に包み込み、ディスコボールの光が輝いていた。',
  };

  return (
    <View style={styles.container}>
      <DreamJournalSampleCard entry={sampleEntry} />
      <DreamJournalContainer entries={entries} setEntries={setEntries} />
      <DreamJournalModal handleSave={handleSave} />
    </View>
  );
}

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
