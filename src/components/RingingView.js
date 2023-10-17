import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableHighlight, TouchableOpacity } from "react-native";
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'

const RingingView = () => {

  const [isTimeRunning, setIsTimeRunning] = useState(false);

  return(
    <View style={styles.container}>
      <Text style={styles.body}>Testing Timer</Text>
      <Stopwatch laps msecs start={isTimeRunning} options={options}/>
      <TouchableOpacity onPress={()=>setIsTimeRunning(!isTimeRunning)} style={styles.touchableOpacity}>
        <Text style={styles.body}>Start/Stop</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    fontSize: 30,
    color: '#000',
  },
  touchableOpacity:{
    backgroundColor: '#6495ed',
    fontSize: 30,
    marginTop: 30,
    padding: 10,
    borderRadius: 100,
  }
});

const options = {
  container: {
    backgroundColor: 'transparent',
    borderRadius: 100,
    width: 320,
  },
  text: {
    fontSize: 40,
    color: 'red',
    marginLeft: 30,
  }
};

export default RingingView;