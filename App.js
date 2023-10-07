import React, { useState } from 'react';
import AlarmCard from './components/AlarmCard';
import AlarmSettingOverlay from './components/AlarmSettingOverlay';
import DreamJournalModal from './components/DreamJournalModal';
import RankingView from './screens/RankingView';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/TabNavigator';
import DreamJournalCard from './components/DreamJournalCard';

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
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
