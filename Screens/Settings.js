import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useContext } from "react";
import { ThemeContext } from "../Contexts/themeContext";
import { themes } from '../helper';
import Background from '../Components/Background';
import PressableButton from '../Components/PressableButton';

export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);  // Access the current theme

  // Function to toggle the theme
  function toggleTheme() {
    setTheme((previousTheme) => (previousTheme === themes.light ? themes.dark : themes.light));
  }

  return (
    <Background>
      <View style={styles.container}>
        <PressableButton
          text="Toggle Theme"
          pressedHandler={toggleTheme}
          componentStyle={{ backgroundColor: themes.light.primary }}
        />
      </View>
    </Background>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
