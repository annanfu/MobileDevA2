import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useContext } from "react";
import { ThemeContext } from "../Contexts/themeContext";
import { themes } from '../helper';
import Background from '../Components/Background';

export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    setTheme((previousTheme) => (previousTheme === themes.light ? themes.dark : themes.light));
  }

  return (
    <Background>
      <Button title="Toggle" onPress={toggleTheme} />
    </Background>
  )
}


const styles = StyleSheet.create({})
