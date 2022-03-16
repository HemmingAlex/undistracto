import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Slider, Text, Icon } from "react-native-elements";

type SlidersComponentProps = {
  timer: (e: number) => void;
  //prop to use the slider as duration of timer
};

export const HSliders: React.FunctionComponent<SlidersComponentProps> = ({
  timer,
}) => {
  const [value, setValue] = useState(25);

  const interpolate = (start: number, end: number, whole?: boolean) => {
    // 0 =>min  && 10 => MAX
    let k = (value - 0) / 50;
    // 50 is the length of the sldier 0 is the min it can be set
    let x: number;
    if (!whole) {
      x = (1 - k) * start + k * end;
    } else {
      x = Math.ceil((1 - k) * start + k * end);
    }
    return x;
  };

  const color = () => {
    let r = interpolate(0, 256);
    let g = interpolate(206, 212);
    let b = interpolate(209, 0);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <>
      <View style={[styles.contentView]}>
        <Slider
          value={value}
          onValueChange={(e) => {
            setValue(e);
            timer(e);
          }}
          maximumValue={60}
          minimumValue={0}
          step={12.5}
          allowTouchTrack
          trackStyle={{
            height: 5,
            backgroundColor: "transparent",
          }}
          thumbStyle={{ height: 20, width: 20, backgroundColor: "transparent" }}
          thumbProps={{
            children: (
              <Icon
                name="clock"
                type="fontisto"
                size={20}
                reverse
                containerStyle={{
                  bottom: 20,
                  right: 20,
                  shadowColor: color(),
                  shadowOffset: { width: interpolate(0, 4, false), height: interpolate(0, 4, false) },
                  shadowOpacity: interpolate(0, 1, false),
                  shadowRadius: interpolate(0, 12, false),
                }}
                color={color()}
              />
            ),
          }}
        />
      </View>
    </>
  );
};

export const VSliders: React.FunctionComponent<SlidersComponentProps> = ({
  timer,
}: SlidersComponentProps) => {
  const [vertValue, setVertValue] = useState(25);
  return (
    <>
      <Text style={styles.subHeader}>Vertical Slider</Text>
      <View style={styles.verticalContent}>
        <Slider
          value={vertValue}
          onValueChange={setVertValue}
          maximumValue={60}
          minimumValue={10}
          step={1}
          orientation="vertical"
          thumbStyle={{ height: 20, width: 16, backgroundColor: "transparent" }}
          thumbProps={{
            children: (
              <Icon
                name="icon-time"
                type="font-awesome"
                size={20}
                reverse
                containerStyle={{ bottom: 20, right: 20, width: 100 }}
                color="#f50"
              />
            ),
          }}
        />
      </View>
      <Text style={{ paddingLeft: 25 }}>Value: {vertValue}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  contentView: {
    padding: 20,
    width: 300,
    justifyContent: "center",
    alignItems: "stretch",
    margin: "auto",
  },
  verticalContent: {
    padding: 20,
    flex: 1,
    flexDirection: "row",
    height: 500,
    justifyContent: "center",
    alignItems: "stretch",
  },
  subHeader: {
    backgroundColor: "#2089dc",
    borderRadius: 3,
    padding: 20,
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },
});

// export default Sliders;
