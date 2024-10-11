import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";



export default function Input({
  value,
  onChangeText,
  style,
  keyboardType = "default",
}) {
  return (
    <TextInput
      style={[styles.input, style]}
      autoFocus={false}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    marginTop: 10,
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 20,
  },
});