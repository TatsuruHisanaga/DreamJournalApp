import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';

export default function AlarmCard({ time, days }) {
  return (
    <Card containerStyle={{ marginTop: 40 }}>
      <Card.Title>アラーム設定</Card.Title>
      <Card.Divider />
      <Text style={{ marginBottom: 10 }}>時刻: {time.toString()}</Text>
      <Text style={{ marginBottom: 10 }}>曜日: {JSON.stringify(days)}</Text>
    </Card>
  );
}
