import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { Overlay, Button, CheckBox } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import * as Notifications from "expo-notifications";

Notifications.requestPermissionsAsync();
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function AlarmSettingOverlay({
  visible,
  toggleOverlay,
  addAlarm,
  time,
  onTimeChange,
  days,
  setDays,
}) {
  const scheduleNotification = async (time) => {
    try {
      // 通知内容の設定
      const notification = {
        title: "アラーム",
        body: "時間です！",
        sound: "default", // iOSのみ
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
      console.error("Notification scheduling failed: ", error);
    }
  };
  useEffect(() => {
    notificationListener.current =
      Notifications.addNotificationReceivedListener(() => {
        console.log("Notification received");
        // 通知を受け取った時の処理ここに追加できる
        alert("通知を受け取りました！");
      });

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      }
    };
  }, []);

  const notificationListener = useRef();

  return (
    <Overlay
      overlayStyle={styles.container}
      isVisible={visible}
      onBackdropPress={toggleOverlay}
    >
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
    width: "80%",
  },
});
