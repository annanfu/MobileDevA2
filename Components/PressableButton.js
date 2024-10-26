import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { themes } from "../helper";

export default function PressableButton({
  children,
  componentStyle,
  pressedHandler,
  pressedStyle,
  text,
}) {
  return (
    <Pressable
      onPress={pressedHandler}
      style={({ pressed }) => [
        // the function can only apply to the style prop in the Pressable component
        text && styles.buttonStyle, // default button style
        componentStyle, // style from the parent component
        pressed && styles.defaultPressedStyle, // default onpressed style
        pressed && pressedStyle,
      ]}
    >
      {text ? <Text style={styles.buttonText}>{text}</Text> : children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    minWidth: 150,
    borderRadius: 5,
    padding: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: themes.light.text,
    fontSize: themes.fontsize.primary,
  },
  defaultPressedStyle: {
    //backgroundColor: "pink",
    opacity: 0.5,
  },
});
