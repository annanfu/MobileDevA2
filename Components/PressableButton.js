import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { themes } from "../helper";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function PressableButton({
  children, // for custom components
  componentStyle, // style from the parent component
  pressedHandler, // function to handle the press
  pressedStyle, // style when pressed
  text, // text to display
  screenType, // type of screen activity, diet, edit
}) {
  const getIcons = () => {
    // return the header right icons based on the screen type
    switch (screenType) {
      case "Activities":
        return (
          <View style={styles.iconContainer}>
            <AntDesign name="plus" size={20} color="white" />
            <FontAwesome5 name="walking" size={20} color="white" />
          </View>
        );
      case "Diet":
        return (
          <View style={styles.iconContainer}>
            <AntDesign name="plus" size={20} color="white" />
            <MaterialIcons name="fastfood" size={20} color="white" />
          </View>
        );
      case "Edit":
        return (
          <View style={styles.iconContainer}>
            <FontAwesome name="trash" size={20} color="white" />
          </View>
        );

      default:
        return;
    }
  };

  return (
    <Pressable
      onPress={pressedHandler}
      style={({ pressed }) => [
        // Header button styles
        screenType && styles.headerStyle,
        // Regular button styles
        text && styles.buttonStyle,
        componentStyle, // style from the parent component
        pressed && styles.defaultPressedStyle, // default onpressed style
        pressed && pressedStyle,
      ]}
    >
      {screenType ? (
        getIcons()
      ) : text ? ( // if text is provided then display the custom button
        <Text style={styles.buttonText}>{text}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    marginRight: themes.marginstyle.mid,
    padding: themes.paddingstyle.text,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonStyle: {
    minWidth: 150,
    borderRadius: themes.borderradius,
    padding: themes.paddingstyle.text,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: themes.light.text,
    fontSize: themes.fontsize.primary,
  },
  defaultPressedStyle: {
    //backgroundColor: "pink",
    opacity: 0.5,
  },
});
