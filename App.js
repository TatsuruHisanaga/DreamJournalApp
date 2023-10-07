import React, { useRef, useState, useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/TabNavigator';

Notifications.requestPermissionsAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

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

  const notificationListener = useRef();

  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener(() => {
      console.log('Notification received');
      // 通知を受け取った時の処理ここに追加できる
      alert('通知を受け取りました！');
    });

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
    };
  }, []);

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
