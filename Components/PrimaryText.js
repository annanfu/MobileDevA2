import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemeContext } from "../Contexts/themeContext";
import { useContext } from "react";

export default function PrimaryText({ children }) {
  const { theme } = useContext(ThemeContext); // Access the current theme

  return (
    <Text style={[styles.text, { color: theme.primary }]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
