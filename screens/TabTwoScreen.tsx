import { StyleSheet, TouchableHighlight } from "react-native";
import React, { useState } from "react";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import { Audio } from "expo-av";

export default function TabTwoScreen() {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  const [muisc, setSound] = React.useState();
  const [work, setWork] = React.useState("Time to work!");
  const [playing, setPlaying] = React.useState(false);

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Hello.mp4")
    );
    // deconstructed sound transformed into state sound
    setSound(sound);

    console.log("Playing Sound");
    setPlaying(!playing);
    setIsStopwatchStart(!isStopwatchStart);
    setResetStopwatch(false);

    if (!playing) {
      await sound.playAsync();
      setWork("take a break");
    } else {
      await sound.pauseAsync();
      setWork("back to work!");
    }
  }

  React.useEffect(() => {
    return muisc
      ? () => {
          console.log("Unloading Sound");
          muisc.unloadAsync();
        }
      : undefined;
  }, [muisc]);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          setIsStopwatchStart(!isStopwatchStart);
          setResetStopwatch(false);
          playSound();
        }}
      >
        <Text style={isStopwatchStart ? styles.buttonText : styles.test}>
          {!isStopwatchStart ? "START" : "STOP"}
        </Text>
      </TouchableHighlight>
      <Stopwatch
        start={isStopwatchStart}
        //To start
        reset={resetStopwatch}
        //To reset
        //options for the styling
        getTime={(time) => {
          console.log(time);
        }}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "red",
    fontSize: "30px",
  },
  test: {
    fontSize: "30px",
    color: "blue",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
