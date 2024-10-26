// Screens/Edit.js
import React, { useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Background from "../Components/Background";
import AddAnActivity from "./AddAnActivity";
import AddADiet from "./AddADiet";
import PressableButton from "../Components/PressableButton";
// import { doc, deleteDoc } from "firebase/firestore";
import { database } from "../Firebase/firebaseSetup";
import { themes } from "../helper";

export default function Edit({ route, navigation }) {
  console.log("Edit Screen Navigation:", navigation);
  const { item, type } = route.params;

  // Convert the date string back to Date object before passing to Add screen
  const convertedItem = {
    ...item,
    date: new Date(item.date), // Converts "Mon Jul 15 2024" back to Date object
  };

  // Set up delete button in header
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PressableButton screenType="Edit" pressedHandler={handleDelete} />
      ),
    });
  }, [navigation]);

  const handleDelete = () => {
    Alert.alert("Delete", "Are you sure you want to delete this item?", [
      {
        text: "No",
      },
      {
        text: "Yes",
        onPress: async () => {
          try {
            const collectionName =
              type === "activities" ? "activities" : "diet";
            await deleteDoc(doc(database, collectionName, item.id));
            navigation.goBack();
          } catch (error) {
            Alert.alert("Error", "Failed to delete item");
          }
        },
      },
    ]);
  };

  return type === "activities" ? (
    <AddAnActivity initialData={convertedItem} navigation={navigation} />
  ) : (
    <AddADiet initialData={convertedItem} navigation={navigation} />
  );
}
