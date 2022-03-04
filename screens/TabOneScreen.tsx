import { StyleSheet, Button } from "react-native";
import * as React from "react";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { Audio } from "expo-av";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [work, setWork] = React.useState("Time to work!");
  const [isplaying, setIsPlaying] = React.useState(false);

  const [isTimerStart, setIsTimerStart] = React.useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = React.useState(false);
  const [timerDuration, setTimerDuration] = React.useState(90000);
  const [resetTimer, setResetTimer] = React.useState(false);
  const [resetStopwatch, setResetStopwatch] = React.useState(false);

  //music
  const [playbackObject, setPlaybackObject] = React.useState(null);
  const [playbackStatus, setPlaybackStatus] = React.useState(null);

  React.useEffect(() => {
    async function effector() {
      if (playbackObject === null) {
        const { sound: store } = await Audio.Sound.createAsync(
          { uri: "http://foo/bar.mp3" },
          { shouldPlay: true }
        );
        setPlaybackObject(store);
      }
    }
    effector();
  }, []);

  //fporgot what this is doing, please write notes alex

  async function playSound() {
    setIsStopwatchStart(!isStopwatchStart);
    setResetStopwatch(false);
    setIsPlaying(!isplaying);
    if (!isplaying) {
      setWork("take a break");
    } else {
      setWork("back to work!");
    }
  }
  // const playbackObject = new Audio.Sound();
  // // OR
  // const { sound: playbackObject } = await Audio.Sound.createAsync(
  //   { uri: 'http://foo/bar.mp3' },
  //   { shouldPlay: true }
  // );
  const handleAudioPlayPause = async () => {
    if (playbackObject !== null && playbackStatus === null) {
      const status = await playbackObject.loadAsync(
        { uri: Audio.uri },
        { shouldPlay: true }
      );
      console.log(status);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>The first page, with the facto bot and stuff</Text> */}
      <Button
        title={work}
        onPress={() => {
          playSound();
          handleAudioPlayPause();
        }}
      />
      <Stopwatch
        laps
        msecs
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
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "yellow",
    color: "red",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
