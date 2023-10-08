import React, { useEffect, useState } from "react";
import { Button } from "react-native-elements";
import AlarmSettingOverlay from "../components/AlarmSettingOverlay";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AlarmCard from "../components/AlarmCard";
import RingingAlarm from "../components/RingingAlarm";

export default function AlarmScreen() {
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

  const [isAlarmRinging, setIsAlarmRinging] = useState(false); //trueの時にカウントアップが始まる

  return (
    <View style={styles.container}>
      <Text style={styles.title}>アラーム一覧（準備中🥺）</Text>
      {/* ここにアラームの一覧を表示するコードを追加 */}
      <FlatList
        data={alarms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <AlarmCard time={item.time} days={item.days} />
        )}
        style={styles.flatStyle}
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
        setIsAlarmRinging={setIsAlarmRinging}
      />
      <RingingAlarm isAlarmRinging={isAlarmRinging} setIsAlarmRinging={setIsAlarmRinging}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  flatStyle: {
    width: "100%",
  },
});
