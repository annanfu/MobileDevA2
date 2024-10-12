import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { themes } from "../helper";


export default function Input({
  value,
  onChangeText,
  style,
  keyboardType = "default",
  ...props
}) {
  return (
    <TextInput
      style={[styles.input, style]}
      autoFocus={false}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    
    textAlignVertical: "top",
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: themes.light.primary,
    backgroundColor: themes.light.inputbackground,
    fontSize: 18,
    color: themes.light.primary,
    padding: 5,

  },
});
