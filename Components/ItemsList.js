import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from "react";
import { DataContext } from "../Contexts/dataContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";



export default function ItemList({type}) {
  const { activities, diets } = useContext(DataContext);
  const data = type === "activity" ? activities : diets;

  const items = ({ item }) => {
    return (
      <View>
        {item.isSpecial && (
          <FontAwesome name="warning" size={24} color="black" />
        )}
        <Text>{type === "activity" ? item.activity : item.food}</Text>
        <Text>{item.date.toDateString()}</Text>
        <Text>{item.duration} min</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={items}
      contentContainerStyle={styles.scrollViewContainer}
    />
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: "center",
  },

})