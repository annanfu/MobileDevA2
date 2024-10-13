import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { ThemeContext } from "../Contexts/themeContext";
import { useContext } from "react";
import { themes } from '../helper';

export default function Background({ children }) {
  const { theme } = useContext(ThemeContext); // Access the current theme
  
  return (
    // render the background color based on the theme
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
    marginTop: themes.marginstyle.primary,
    flex: 1,
    padding: themes.paddingstyle.other,
  },
});
