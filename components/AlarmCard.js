import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Badge, Switch } from 'react-native-elements';
export default function AlarmCard({ time, days, isActive, toggleAlarm }) {
  return (
    <Card containerStyle={styles.cardContainer}>
      <Card.Title style={styles.cardTitle}>アラーム設定</Card.Title>
      <Card.Divider />
      <View style={styles.timeContainer}>
        <Text style={styles.label}>時刻: </Text>
        <Text style={styles.time}>{time.toLocaleTimeString()}</Text>
      </View>
      <View style={styles.daysContainer}>
        {Object.keys(days).map((day) => (
          days[day] && <Badge value={day} badgeStyle={styles.dayBadge} textStyle={styles.dayText} key={day} />
        ))}
      </View>
      <View style={styles.switchContainer}>
        <Switch
          value={isActive}
          onValueChange={toggleAlarm}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 40,
    borderRadius: 10,
    width: '85%',
    alignSelf: 'center',
    alignContent: 'strech',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  daysContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 16,
  },
  dayBadge: {
    backgroundColor: '#6200ea',
    marginHorizontal: 5,
  },
  dayText: {
    color: '#fff',
  },
  switchContainer: {

  },
});
