import { StyleSheet, TouchableHighlight } from "react-native";
import { Timer as Thing } from "react-native-stopwatch-timer";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { Text, View } from "../Themed";

const TestMusic = () => {

    const [muisc, setSound] = useState();
    const [work, setWork] = useState("Time to work!");
    const [playing, setPlaying] = useState(false);
    
    // async function playSound() {
    //         console.log("Loading Sound");
    //         const { sound } = await Audio.Sound.createAsync(
    //               require("../assets/Hello.mp4")
    //             );
    //             // deconstructed sound transformed into state sound
    //             setSound(sound);
    //   console.log("Playing Sound");
    //   setPlaying(!playing);
    //   setIsStopwatchStart(!isStopwatchStart);
    //   setResetStopwatch(false);
  
    //   if (!playing) {
    //         await sound.playAsync();
    //         setWork("take a break");
    //       } else {
    //             await sound.pauseAsync();
    //             setWork("back to work!");
    //           }
    //         }
          
          useEffect(() => {
                return muisc
                  ? () => {
                          console.log("Unloading Sound");
                          muisc.unloadAsync();
                        }
                      : undefined;
                  }, [muisc]);


                  return [play, stop, restart, getTime]
                }

                //todo
                // used with the stopwatch

            //last stage of adding music to the undistracto app.

            // then add the pokemon training thorugh lack fo distraction.