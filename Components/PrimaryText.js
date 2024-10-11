import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { themes } from "./helper";

export default function PrimaryText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: themes.light.primary,
    fontSize: 20,
    marginBottom: 10,
  },
});
