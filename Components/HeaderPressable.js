import React from "react";
import { StyleSheet, View, Pressable, Platform } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { themes } from "../helper";

export default function HeaderPressable({ screenType, pressedHandler }) {
  const getIcons = () => {
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
        return null;
    }
  };

  return (
    <Pressable
      onPress={pressedHandler}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      android_ripple={{color: themes.light.active, radius: 18}}
    >
      {getIcons()}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 5,
    padding: 8,
    borderRadius: 20,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: themes.light.active,
  },
});
