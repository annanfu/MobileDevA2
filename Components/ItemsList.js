import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from "react";
import { DataContext } from "../Contexts/dataContext";
import Item from "./Item";


export default function ItemList({type, navigation}) {
  const { activities, diet } = useContext(DataContext);
  const data = type === "activity" ? activities : diet;   // if type is activity, then data is activities, else diet

  function handlePress(item) {
    navigation.navigate("Edit", { item, type });
  }


  return (
    <FlatList  // renders a list of items
      data={data}
      renderItem={({ item }) => (
      <Item
        item={item}
        type={type}
        pressedHandler={() => handlePress(item)}
        />
      )} // renders each item
      contentContainerStyle={styles.scrollViewContainer}  
    />
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: "center",
  },

})