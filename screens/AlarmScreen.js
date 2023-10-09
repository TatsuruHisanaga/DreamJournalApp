import React, { useEffect, useState } from "react";
import { Icon } from "react-native-elements";
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

  const [activeArray, setActiveArray] = useState([]);

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
      <FlatList
        data={alarms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <AlarmCard time={item.time} days={item.days} isActive={activeArray[index]} index={index} activeArray={activeArray} setActiveArray={setActiveArray}/>
        )}
        style={styles.flatStyle}
      />
      <Icon
        containerStyle={styles.fixedButton}
        raised
        name="plus"
        type="material-community"
        color="#517fa4"
        onPress={toggleOverlay}
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
    marginTop: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
  },
  flatStyle: {
    width: "100%",
  },
});
