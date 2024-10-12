import { StyleSheet, Text, View, Button, Alert, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import Background from "../Components/Background";
import PrimaryText from "../Components/PrimaryText";
import ButtonArea from "../Components/ButtonArea";
import Input from "../Components/Input";
import DatePicker from "../Components/DatePicker";
import { DataContext } from "../Contexts/dataContext";
import { themes } from "../helper";

export default function AddADiet({ navigation }) {
  const { addDiet } = useContext(DataContext); // Get the addDiet function from the context
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState(null);



  function handleSave() {

    if (!description || isNaN(calories) || calories <= 0 || !date) {
      Alert.alert("Invalid Input", "Please check your input values", [
        { text: "OK" },
      ]);
      return;
    } else {
      addDiet({
        description: description,
        calories: calories,
        date: date,
        isSpecial: calories > 800,
      });
      navigation.goBack();
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <Background>
      <PrimaryText>Description *</PrimaryText>
      <Input
        onChangeText={(description) => setDescription(description)}
        value={description}
        style={{ height: 100 }}
        multiline={true}
      />

      <PrimaryText>Calories *</PrimaryText>
      <Input
        onChangeText={(calories) => setCalories(calories)}
        value={calories}
      />

      <PrimaryText>Date *</PrimaryText>
      <DatePicker
        value={date}
        onChange={(newDate) => setDate(newDate)}
      />

      <ButtonArea>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Save" onPress={handleSave} />
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
