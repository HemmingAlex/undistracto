import { StyleSheet } from "react-native";
import { Timer as Thing } from "react-native-stopwatch-timer";
import { useState, useEffect } from "react";
import { View } from "../Themed";
import TextButton from "../TextButton/TextButton";

interface TimerProps {
  duration: number;
  onFail?: () => void;
  onSuccess?: () => void;
  playPause?: () => void;
}

const Timer = ({ onFail, duration, onSuccess, playPause }: TimerProps) => {
  // Duration passed as variable, needs to be handled as state outside of component.
  const [newDuration, setNewDuration] = useState<number>(0);
  const [start, setStart] = useState<Boolean>(false);
  const [restart, setRestart] = useState<Boolean>(false);

  useEffect(() => {
    setRestart(true);
    setNewDuration(duration);
  }, [duration]);

  const timerStyles = {
    container: {
      backgroundColor: !start ? "red" : "blue",
      padding: 1,
      borderRadius: 15,
      width: 124,
    },
    text: {
      fontSize: 30,
      color: "#FFF",
      marginLeft: 7,
    },
  };

  // punishmnet for not finishing the time limit
  const Success = () => {
    setStart(false);
    setRestart(true);
    onSuccess;
  };

  //to be removed
  const PlayFail = () => {
    if (playPause) {
      playPause();
    }
    if (!start) {
      setStart(true);
    } else {
      // if stopping early use punishment
      if (onFail) {
        onFail();
      }
      setStart(false);
      setRestart(true);
    }
  };

  return (
    <View>
      <Thing
        totalDuration={newDuration}
        start={start}
        reset={restart}
        options={timerStyles}
        handleFinish={() => {
          alert("welldone! you didnt use your phone!");
          Success;
        }}
        //   getTime={}
      />
      <TextButton
        click={() => {
          PlayFail();
          console.log("clicked!");
        }}
        text={!start ? "start" : "exit"}
        buttonStyle={{
          margin: "auto",
          padding: 0,
          paddingHorizontal: 20,
          borderColor: "white",
          borderWidth: 3,
          backgroundColor: "white",
          borderRadius: 3,
        }}
        labelStyle={{ color: !start ? "red" : "blue", fontSize: 30 }}
      />
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  play: {
    color: "yellow",
    fontSize: 30,
  },
  pause: {
    color: "darkturquoise",
    fontSize: 30,
  },
});
