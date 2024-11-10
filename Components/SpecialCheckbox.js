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
    flexDirection: "row",
    alignItems: "center",
    padding: themes.paddingstyle.small,
    marginVertical: themes.marginstyle.primary,
  },
  label: {
    flex: 1,
    marginRight: themes.marginstyle.text,
    color: themes.light.primary,
    fontSize: themes.fontsize.primary,
    fontWeight: "bold",
  },
});
