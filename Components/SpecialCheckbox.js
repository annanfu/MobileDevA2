import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { themes } from "../helper";

export default function SpecialCheckbox({ value, onValueChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        This item is marked as special. Select the checkbox if you would like to
        approve it.
      </Text>
      <Checkbox value={value} onValueChange={onValueChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flexDirection: "row",
    alignItems: "center",
    padding: 3,
    marginVertical: 10,
  },
  label: {
    flex: 1,
    marginRight: 4,
    color: themes.light.primary,
    fontSize: themes.fontsize.primary,
    fontWeight: "bold",
  },
});
