import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { themes } from '../helper';
import PressableButton from './PressableButton';

export default function Item({ item, type, pressedHandler}) {
  const isActivity = type === "activities";   // a variable to check if the type is activity
  return (
    <PressableButton pressedHandler={pressedHandler}>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <Text style={styles.itemName}>
            {isActivity ? item.activity : item.description}{" "}
            {/* if the type is activity then display the activity else display the description */}
          </Text>
        </View>
        <View style={styles.rightContent}>
          {item.isSpecial && (
            <FontAwesome
              name="warning"
              size={20}
              color={themes.light.active}
              style={{ marginRight: themes.marginstyle.text }}
            />
          )}
          {/* render the date and duration or calories based on the type*/}
          <Text style={styles.itemText}>{item.date}</Text>
          <Text style={styles.itemText}>
            {isActivity ? `${item.duration} min` : `${item.calories}`}
          </Text>
        </View>
      </View>
    </PressableButton>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: themes.light.primary,
    borderRadius: themes.borderradius,
    padding: themes.paddingstyle.text,
    marginBottom: themes.marginstyle.primary,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemName: {
    color: themes.light.background,
    fontSize: themes.fontsize.itemname,
    fontWeight: "bold",
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    color: themes.light.primary,
    backgroundColor: themes.light.text,
    fontWeight: "bold",
    padding: themes.paddingstyle.text,
    margin: themes.marginstyle.text,
    borderRadius: themes.borderradius,
    minWidth: 80,
    textAlign: "center",
  },
});