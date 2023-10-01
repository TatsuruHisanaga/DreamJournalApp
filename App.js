import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import AlarmCard from './components/AlarmCard';
import AlarmSettingOverlay from './components/AlarmSettingOverlay';
import RankingView from './RankingView';
import * as Notifications from 'expo-notifications';
Notifications.requestPermissionsAsync();

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
    scheduleNotification(time);
    toggleOverlay();
  };

  const scheduleNotification = async (time) => {
    try {
      // 通知内容の設定
      const notification = {
        title: 'アラーム',
        body: '時間です！',
        sound: 'default', // iOSのみ
      };
      // スケジュール設定
      const schedulingOptions = {
        content: notification,
        trigger: {
          seconds: Math.floor((time.getTime() - Date.now()) / 1000), // 次のアラームまでの秒数
        },
      };
      // 通知をスケジュール
      await Notifications.scheduleNotificationAsync(schedulingOptions);
    } catch (error) {
      console.error('Notification scheduling failed: ', error);
    }
  };

  const onTimeChange = (e, selectedTime) => {
    setTime(selectedTime || time);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <RankingView />
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
