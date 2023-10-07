import React from "react";
import { View } from "react-native";
import { Overlay, Button,  } from "react-native-elements";


export default function RingingAlarm({ isAlarmRinging }){
    return (
        <Overlay isVisible={isAlarmRinging} onBackdropPress={isAlarmRinging}>
            <View>
                <Text>Beep! Beep!</Text>

            </View>
        </Overlay>
    )
}