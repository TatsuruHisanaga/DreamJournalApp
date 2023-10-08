import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Badge, Switch } from "react-native-elements";
export default function AlarmCard({ time, days, isActive, toggleAlarm }) {
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
          <Text style={styles.time}>{time.toLocaleTimeString()}</Text>
        </View>
        <View style={styles.switchContainer}>
          <Switch value={isActive} onValueChange={toggleAlarm} />
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
    fontSize: 45,
  },
  dayText: {
    color: "#fff",
  },
  switchContainer: {
    marginTop: 10,
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dayBadge: {
    backgroundColor: "#6200ea",
    marginHorizontal: 5,
  },
  dayBadge2: {
    backgroundColor: "#3d3d3d",
    marginHorizontal: 5,
  },
});
