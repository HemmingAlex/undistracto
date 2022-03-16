import TextButton from "./TextButton";
import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { useState } from "react";
export default {
  title: "Text based button",
  component: TextButton,
  updatedAt: new Date(2018, 0, 1, 9, 0),
};
const [color, setColor] = useState("red");

storiesOf("Task", module)
  .addDecorator((story) => <View>{story()}</View>)
  .add("default", () => (
    <TextButton
      click={() => {
        console.log("clicked!");
      }}
      text={"button"}
      buttonStyle={{
        margin: "auto",
      }}
      labelStyle={{ color: "blue", fontSize:30 }}
    />
  ));
