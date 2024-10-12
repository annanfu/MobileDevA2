import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from "react";
import { DataContext } from "../Contexts/dataContext";
import Item from "./Item";


export default function ItemList({type}) {
  const { activities, diet } = useContext(DataContext);
  const data = type === "activity" ? activities : diet;

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item item={item} type={type} />}
      contentContainerStyle={styles.scrollViewContainer}
    />
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: "center",
  },

})