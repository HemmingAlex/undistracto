import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Timer from "../components/Timer/Timer";
import { HSliders } from "../components/Sliders";

export default function TabTwoScreen() {
  const [value, setValue] = useState<number>(25);
  const [playing, setPlaying] = useState<boolean>(false);
  const [expereince, setExperience] = useState<number>(0);

  let store = 25;

  const newFunct = (e: number) => {
    store = e;
    if (!playing) {
      setValue(e);
    }
  };

  //testing
  // const storedValue = 1;
  // useEffect(() => {
  //   setExperience(storedValue);
  // }, []);


  return (
    <View style={styles.container}>
      {playing ? <Text>Hello</Text> : <HSliders timer={newFunct} />}
      <Timer
        onFail={() => {
          alert("early exit");
          setPlaying(false);
          // setExperience(expereince > 0 ?expereince -1 : 0)
        }}
        playPause={() => {
          setPlaying(true);
        }}
        onSuccess={() => {
          setPlaying(false);
          // setExperience(expereince+1);
        }}
        duration={value * 60 * 1000}
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
