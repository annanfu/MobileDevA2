import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ButtonArea({ children }) {
// This component is a container for buttons
  return <View style={styles.buttonArea}>{children}</View>;
}

const styles = StyleSheet.create({
  buttonArea: {
    marginTop: 180,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
