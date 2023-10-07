import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Overlay } from "react-native-elements";
import { Stopwatch } from "react-native-stopwatch-timer";

export default function RingingAlarm({ isAlarmRinging, setIsAlarmRinging }) {
  return (
    <Overlay isVisible={isAlarmRinging}>
      <View>
        <Text>Beep! Beep!</Text>
        <Stopwatch lap msecs start={isAlarmRinging} options={options} />
        <TouchableOpacity
          onPress={() => setIsAlarmRinging(!isAlarmRinging)}
          style={styles.touchableOpacity}
        >
          <Text style={styles.body}>Stop</Text>
        </TouchableOpacity>
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    fontSize: 30,
    color: "#000",
  },
  touchableOpacity: {
    backgroundColor: "#6495ed",
    fontSize: 30,
    marginTop: 30,
    padding: 10,
    borderRadius: 100,
  },
});

const options = {
  container: {
    backgroundColor: "transparent",
    borderRadius: 100,
    width: 320,
  },
  text: {
    fontSize: 40,
    color: "red",
    marginLeft: 30,
  },
};
