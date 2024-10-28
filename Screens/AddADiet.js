import { StyleSheet, Text, View, Button, Alert, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import Background from "../Components/Background";
import PrimaryText from "../Components/PrimaryText";
import ButtonArea from "../Components/ButtonArea";
import Input from "../Components/Input";
import DatePicker from "../Components/DatePicker";

import { themes } from "../helper";
import PressableButton from "../Components/PressableButton";
import { writeToDB, updateData } from "../Firebase/firebaseHelper";
import SpecialCheckbox from "../Components/SpecialCheckbox";

export default function AddADiet({ navigation, initialData }) {
  const [description, setDescription] = useState(initialData?.description || null); // a state variable to store the description
  const [calories, setCalories] = useState(initialData?.calories || ""); // a state variable to store the calories
  const [date, setDate] = useState(initialData?.date || null); // a state variable to store the date
  const [removeSpecial, setRemoveSpecial] = useState(false);

  function handleSave() {
    // Check if the input values are valid
    if (initialData) {
      Alert.alert("Important", "Are you sure you want to save these changes?", [
        { text: "No"},
        {
          text: "Yes",
          onPress: () => {
            saveData();
          },
        },
      ]);
    } else {
      saveData();
    }
  }
  

  function saveData() {
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
        isSpecial: initialData?.isSpecial
          ? removeSpecial
            ? false
            : calories > 800
          : calories > 800, // if calories is greater than 800, then it is a special diet
      };
      if (initialData) {
        updateData(newDiet, "diet", initialData.id);
      } else {
        writeToDB(newDiet, "diet");
      }
      // Add the diet object to the data context
      /*addDiet({
        description: description,
        calories: calories,
        date: date.toDateString(),
        isSpecial: calories > 800, // if calories is greater than 800, then it is a special diet
      }); */
      navigation.goBack();
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
        <View
          style={
            initialData?.isSpecial
              ? styles.specialContainer
              : styles.normalContainer
          }
        >
          {initialData?.isSpecial && (
            <SpecialCheckbox
              value={removeSpecial}
              onValueChange={(newValue) => setRemoveSpecial(newValue)}
            />
          )}
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
                </View>
      </Background>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  specialContainer: {
    marginTop: themes.marginstyle.special,
  },
  normalContainer: {
    marginTop: themes.marginstyle.normal,
  },
});
