import React from "react";
import { View } from "react-native";
import { useState } from "react";

const RingingView = ({ isRinging }) => {
  const [time, setTime] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Ringing!</Text>
      <Text>time : {time}sec.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RingingView;
