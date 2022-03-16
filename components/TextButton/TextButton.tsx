import {
  StyleSheet,
  TouchableHighlight,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Text } from "../Themed";

interface TextButtonProps {
  buttonStyle: ViewStyle;
  labelStyle: TextStyle;
  click?: () => void;
  text: string;
}

const TextButton: React.SFC<TextButtonProps> = ({
  buttonStyle,
  text,
  labelStyle,
  click,
}): JSX.Element => {
  const styles = StyleSheet.create({
    button: buttonStyle,
    label: labelStyle,
  });

  return (
    <TouchableHighlight style={styles.button} onPress={click}>
      <Text style={styles.label}>{text}</Text>
    </TouchableHighlight>
  );
};

export default TextButton;
