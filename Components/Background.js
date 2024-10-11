import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemeContext } from "../Contexts/themeContext";
import { useContext } from "react";

export default function Background({ children }) {
  const { theme } = useContext(ThemeContext); // Access the current theme
  
  return (
    <View style={[styles.background, { backgroundColor: theme.background }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
