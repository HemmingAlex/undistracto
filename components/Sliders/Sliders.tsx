import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Slider, Text, Icon } from "react-native-elements";

type SlidersComponentProps = {
  timer: (e: number) => void;
};

export const HSliders: React.FunctionComponent<SlidersComponentProps> = ({
  timer,
}) => {
  const [value, setValue] = useState(25);

  const interpolate = (start: number, end: number) => {
    let k = (value - 0) / 10; // 0 =>min  && 10 => MAX
    return Math.ceil((1 - k) * start + k * end) % 256;
  };

  const color = () => {
    let r = interpolate(0, 0);
    let g = interpolate(206, 206);
    let b = interpolate(209, 2090);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <>
      <Text style={styles.subHeader}>Horizontal Slider</Text>

      <View style={[styles.contentView]}>
        <Slider
          value={value}
          onValueChange={(e) => {
            setValue(e);
            timer(e);
          }}
          maximumValue={60}
          minimumValue={12.5}
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
                containerStyle={{ bottom: 20, right: 20, padding:25 }}
                color={color()}
              />
            ),
          }}
        />
        <Text style={{ paddingTop: 20 }}>Value: {value}</Text>
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
