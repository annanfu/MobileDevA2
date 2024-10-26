import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from "react";
import { DataContext } from "../Contexts/dataContext";
import Item from "./Item";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../Firebase/firebaseSetup";

export default function ItemList({type, navigation}) {
  console.log("Navigation in ItemsList:", navigation);
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, type),
      (querySnapshot) => {
        let newArray = [];
        querySnapshot.forEach((docSnapshot) => {
          console.log(docSnapshot.id);
          newArray.push({ ...docSnapshot.data(), id: docSnapshot.id });
          console.log(newArray);
        });
        setData(newArray);
      }
    );
    console.log("Data", data);
    // detach the listener when we no longer need to listen to the changes in data
    return () => {
      unsubscribe();
    };
  }, []);





  //const { activities, diet } = useContext(DataContext);
  //const data = type === "activity" ? activities : diet;   // if type is activity, then data is activities, else diet

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