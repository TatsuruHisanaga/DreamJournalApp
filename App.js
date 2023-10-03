import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import AlarmCard from './components/AlarmCard';
import AlarmSettingOverlay from './components/AlarmSettingOverlay';
import RankingView from './RankingView';
import DreamJournalModal from './components/DreamJournalModal';

export default function App() {
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
      <RankingView />
      <DreamJournalModal />
      <FlatList
        data={alarms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <AlarmCard time={item.time} days={item.days} />
        )}
      />
      <Button title="アラーム設定" onPress={toggleOverlay} containerStyle={{ marginBottom: 30 }} />
      <AlarmSettingOverlay
        visible={visible}
        toggleOverlay={toggleOverlay}
        addAlarm={addAlarm}
        time={time}
        onTimeChange={onTimeChange}
        days={days}
        setDays={setDays}
      />
    </View>
  );
}
