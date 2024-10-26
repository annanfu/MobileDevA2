import { StyleSheet, Text, View, Button, Alert, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import Background from "../Components/Background";
import PrimaryText from "../Components/PrimaryText";
import ButtonArea from "../Components/ButtonArea";
import Input from "../Components/Input";
import DatePicker from "../Components/DatePicker";

import { themes } from "../helper";
import PressableButton from "../Components/PressableButton";
import { writeToDB } from "../Firebase/firebaseHelper";

export default function AddADiet({ navigation }) {
  console.log("Navigation:", navigation);

  const [description, setDescription] = useState("");  // a state variable to store the description
  const [calories, setCalories] = useState("");  // a state variable to store the calories
  const [date, setDate] = useState(null);  // a state variable to store the date



  function handleSave() {
    // Check if the input values are valid
    if (!description || isNaN(calories) || calories <= 0 || !date) {
      Alert.alert("Invalid Input", "Please check your input values", [
        { text: "OK" },
      ]);
      return;
    } else {
      let newDiet = {
        description: description,
        calories: calories,
        date: date.toDateString(),
        isSpecial: calories > 800, // if calories is greater than 800, then it is a special diet
      };
      writeToDB(newDiet, "diet");
      // Add the diet object to the data context
      /*addDiet({
        description: description,
        calories: calories,
        date: date.toDateString(),
        isSpecial: calories > 800, // if calories is greater than 800, then it is a special diet
      }); */
      navigation.goBack(); // Go back to the previous screen
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Background>
        <PrimaryText>Description *</PrimaryText>
        <Input
          onChangeText={(description) => setDescription(description)} // update the description state variable
          value={description}
          style={{ height: 100 }}
          multiline={true}
        />

        <PrimaryText>Calories *</PrimaryText>
        <Input
          onChangeText={(calories) => setCalories(calories)} // update the calories state variable
          value={calories}
        />

        <PrimaryText>Date *</PrimaryText>
        <DatePicker
          value={date}
          onChange={(newDate) => setDate(newDate)} // update the date state variable
        />

        <ButtonArea>
          <PressableButton
            pressedHandler={() => navigation.goBack()}
            text="Cancel"
            componentStyle={{ backgroundColor: themes.light.cancel }}
          />
          <PressableButton
            pressedHandler={handleSave}
            text="Save"
            componentStyle={{ backgroundColor: themes.light.primary }}
          />
        </ButtonArea>
      </Background>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    },
});
