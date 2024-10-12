import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { themes } from '../helper';

export default function Item({ item, type}) {
  const isActivity = type === "activity"; 
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Text style={styles.itemName}>
          {isActivity ? item.activity : item.description}
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
        <Text style={styles.itemText}>{item.date.toDateString()}</Text>
        <Text style={styles.itemText}>
          {isActivity ? `${item.duration} min` : `${item.calories}`}
        </Text>
      </View>
    </View>
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