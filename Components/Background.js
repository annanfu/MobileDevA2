import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { ThemeContext } from "../Contexts/themeContext";
import { useContext } from "react";

export default function Background({ children }) {
  const { theme } = useContext(ThemeContext); // Access the current theme
  
  return (
    <View style={[styles.background, { backgroundColor: theme.background }]}>

        <View style={styles.container}>{children}</View>

    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    //justifyContent: "center",
    marginTop: 20,
    flex: 1,
    padding: 20,
  },
});
