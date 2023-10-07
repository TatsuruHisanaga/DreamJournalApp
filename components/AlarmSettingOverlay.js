import React from 'react';
import { View } from 'react-native';
import { Overlay, Button, CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';

export default function AlarmSettingOverlay({ visible, toggleOverlay, addAlarm, time, onTimeChange, days, setDays }) {
  return (
    <Overlay overlayStyle={styles.container} isVisible={visible} onBackdropPress={toggleOverlay}>
      <View>
        <Text>アラーム設定</Text>
        <DateTimePicker value={time} mode="time" onChange={onTimeChange} />
        {Object.keys(days).map((day, index) => (
          <CheckBox
            key={index}
            title={day}
            checked={days[day]}
            onPress={() => setDays({ ...days, [day]: !days[day] })}
          />
        ))}
        <Button title="設定" onPress={addAlarm} />
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
});