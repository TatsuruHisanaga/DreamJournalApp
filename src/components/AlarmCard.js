import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Badge, Switch } from "react-native-elements";
export default function AlarmCard({ time, days, isActive, index, activeArray, setActiveArray }) {
  const handleToggleSwitch = () => {
    const newActiveArray = [...activeArray];
    newActiveArray[index] = !newActiveArray[index];
    setActiveArray(newActiveArray);
  }
  return (
    <Card containerStyle={styles.cardContainer}>
      <View style={styles.daysContainer}>
        {Object.keys(days).map((day) => (
          <Badge
            value={day}
            badgeStyle={days[day] ? styles.dayBadge : styles.dayBadge2}
            textStyle={styles.dayText}
            key={day}
          />
        ))}
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>
        <View style={styles.switchContainer}>
          <Switch value={isActive} onValueChange={handleToggleSwitch} trackColor={{false: '#c3c5c7', true: '#6200ea'}}/>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    borderRadius: 10,
    width: "85%",
    alignSelf: "center",
    alignContent: "stretch",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  timeContainer: {
    fontSize: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  daysContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  time: {
    fontSize: 60,
  },
  dayText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "bold",
  },
  switchContainer: {
    marginTop: 10,
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dayBadge: {
    fontSize: 20,
    backgroundColor: "#6200ea",
    marginHorizontal: 5,
  },
  dayBadge2: {
    backgroundColor: "#c3c5c7",
    marginHorizontal: 5,
  },
});
