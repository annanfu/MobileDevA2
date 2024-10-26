import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PressableButton({
  children,
  componentStyle,
  pressedHandler,
  pressedStyle,
}) {
  return (
    <Pressable
      onPress={pressedHandler}
      style={({ pressed }) => [
        // the function can only apply to the style prop in the Pressable component
        componentStyle, // style from the parent component
        pressed && styles.defaultPressedStyle, // default onpressed style
        pressed && pressedStyle,
      ]}
    >
      <View>{children}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({

  defaultPressedStyle: {
    //backgroundColor: "pink",
    opacity: 0.5,
  },
});
