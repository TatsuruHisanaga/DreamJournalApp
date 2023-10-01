import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

const Timer = () => {

  const [time, setTime] = useState(0);

  const startTimer = ()=>{};

  return(
    <View style={styles.container}>
      <Text>{}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Timer;