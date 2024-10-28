import React, { useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Background from "../Components/Background";
import AddAnActivity from "./AddAnActivity";
import AddADiet from "./AddADiet";
import PressableButton from "../Components/PressableButton";
import { database } from "../Firebase/firebaseSetup";
import { themes } from "../helper";
import { doc, deleteData } from "../Firebase/firebaseHelper";

export default function Edit({ route, navigation }) {
  const { item, type } = route.params;

  // Convert the date string back to Date object before passing to Add screen
  const convertedItem = {
    ...item,
    date: new Date(item.date), 
  };


  // Set up delete button in header
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PressableButton screenType="Edit" pressedHandler={handleDelete} />
      ),
    });
  }, [navigation]);

  // Handle delete button press
  const handleDelete = () => {
    Alert.alert("Delete", "Are you sure you want to delete this item?", [
      {
        text: "No",
      },
      {
        text: "Yes",
        onPress: () => {
            // Delete the item from the database
            deleteData(type, item.id);
            navigation.goBack();
        },
      },
    ]);
  };

  // conditionally render the Edit screen by rusing the Add screens based on the type
  return type === "activities" ? (
    <AddAnActivity initialData={convertedItem} navigation={navigation} />
  ) : (
    <AddADiet initialData={convertedItem} navigation={navigation} />
  );
}
