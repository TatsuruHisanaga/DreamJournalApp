import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DreamJournalCard from '../components//DreamJournalCard';
import DreamJournalModal from '../components/DreamJournalModal';

export default function DreamJournalScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const sampleEntry = {
    dreamImage: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    name: 'h_tatsuru',
    date: new Date().toDateString(),
    title: 'DJになってクラブで熱狂',
    details: '私はDJとしてクラブの中心に立っていた。集まった人々は音楽に身を任せ、狂ったように踊り続ける。私の目の前には熱心なファンたちの海が広がっていた。スモークマシンの煙が会場を神秘的に包み込み、ディスコボールの光が輝いていた。'
  };

  return (
    <View style={styles.container}>
      <DreamJournalCard entry={sampleEntry} />
      <DreamJournalModal modalVisible={modalVisible} setModalVisible={setModalVisible} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingVertical: 40,
  },
});
