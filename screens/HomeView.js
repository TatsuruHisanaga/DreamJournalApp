import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import AlarmCard from '../components/AlarmCard';
import AlarmSettingOverlay from '../components/AlarmSettingOverlay';
import RankingView from './RankingView';
import DreamJournalCard from '../components/DreamJournalCard';
import RingingAlarm from '../components/RingingAlarm';

export default function HomeView() {
  const [alarms, setAlarms] = useState([]);
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState(new Date());
  const [days, setDays] = useState({
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });
  const [isAlarmRinging, setIsAlarmRinging] = useState(false); //trueの時にカウントアップが始まる

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const addAlarm = () => {
    setAlarms([...alarms, { time, days }]);
    toggleOverlay();
  };

  const onTimeChange = (e, selectedTime) => {
    setTime(selectedTime || time);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <RankingView /> */}
      <FlatList
        data={alarms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <AlarmCard time={item.time} days={item.days} />
          )}
      />
      <DreamJournalCard
        entry={{
          name: 'テストユーザー',
          date: new Date().toDateString(),
          title: 'テストの夢のタイトル',
          details: 'テストの夢の詳細',
        }}
      />
      <Button
        title="アラーム設定"
        onPress={toggleOverlay}
        containerStyle={{ marginBottom: 30 }}
      />
      <AlarmSettingOverlay
        visible={visible}
        toggleOverlay={toggleOverlay}
        addAlarm={addAlarm}
        time={time}
        onTimeChange={onTimeChange}
        days={days}
        setDays={setDays}
      />
      <RingingAlarm
        isAlarmRinging={isAlarmRinging}
        setIsAlarmRinging={setIsAlarmRinging}
      />
    </View>
  );
}
