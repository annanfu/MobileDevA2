import { StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native'
import React, {useContext, useState} from 'react'
import Background from '../Components/Background'
import PrimaryText from '../Components/PrimaryText'
import ButtonArea from '../Components/ButtonArea'
import Input from '../Components/Input'
import DropDownPicker from 'react-native-dropdown-picker'
import DatePicker from '../Components/DatePicker'

import { themes } from '../helper'
import PressableButton from '../Components/PressableButton'
import { writeToDB, updateData } from '../Firebase/firebaseHelper'
import SpecialCheckbox from "../Components/SpecialCheckbox";

export default function AddAnActivity({navigation, initialData}) {

  const [duration, setDuration] = useState(initialData?.duration || "");  // a state variable to store the duration
  const [date, setDate] = useState(initialData?.date || null);  // a state variable to store the date
  const [removeSpecial, setRemoveSpecial] = useState(false);  // a state variable to store the special status

  
  // state variables for the DropDownPicker used to select the activity
  const [open, setOpen] = useState(false);
  const [activity, setActivity] = useState(initialData?.activity || null);
  const [items, setItems] = useState([
    { label: "Walking", value: "Walking" },
    { label: "Running", value: "Running" },
    { label: "Swimming", value: "Swimming" },
    { label: "Weights", value: "Weights" },
    { label: "Yoga", value: "Yoga" },
    { label: "Cycling", value: "Cycling" },
    { label: "Hiking", value: "Hiking" },
  ]);

  function handleSave() {
    // If the user is editing an existing activity
    if (initialData) {
      Alert.alert("Important", "Are you sure you want to save these changes?", [
        { text: "No"},
        {
          text: "Yes",
          onPress: () => {
            // If the user confirms, save the data
            saveData();
          },
        },
      ]);
    } else {
      // If the user is adding a new activity, save the data
      saveData();
    }
  }

  function saveData() {
    // validate the input values
    if (!activity || isNaN(duration) || duration <= 0 || !date) {
      Alert.alert("Invalid Input", "Please check your input values", [{ text: "OK" }]);
      return;
    } else {
      // If the input values are valid, create or update the activity object
      let activityData = {
        activity: activity,
        duration: duration,
        date: date.toDateString(),
        // If the activity is Running or Weights and the duration is greater than 60 minutes, mark it as special
        isSpecial: initialData?.isSpecial
        // If the activity is special, check if the user wants to remove the special status
          ? removeSpecial
            ? false
            : ((activity === "Running" || activity === "Weights") &&
              duration > 60)
          : ((activity === "Running" || activity === "Weights") && duration) > 60,
      };
      if (initialData) {
        // If the user is editing an existing activity, update the data
        updateData(activityData, "activities", initialData.id);
      } else {
        // If the user is adding a new activity, write the data to the database
        writeToDB(activityData, "activities");
      }
      // Add the activity object to the data context
      /*addActivity({
        activity: activity,
        duration: duration,
        date: date,
        isSpecial: (activity === 'Running' || activity === 'Weights') && duration > 60,
        }
     );*/
      navigation.goBack();
    }
  }


  return (
    <Background>
      <PrimaryText>Activity *</PrimaryText>
      <DropDownPicker
        open={open} // whether the dropdown is open
        value={activity} // the selected value
        items={items} // the list of items
        setOpen={setOpen} // function to set the open state variable
        setValue={setActivity} // function to set the activity state
        setItems={setItems} // function to set the items state
        placeholder="Select An Activity"
        style={styles.dropDownContainer}
        textStyle={styles.dropDownText}
        placeholderStyle={styles.dropDownText}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <PrimaryText>Duration (min) *</PrimaryText>
        <Input
          onChangeText={(duration) => setDuration(duration)}
          value={duration}
        />

        <PrimaryText>Date *</PrimaryText>
        <DatePicker
          value={date}
          onChange={(newDate) => setDate(newDate)} // update the date state variable
          display="default"
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
              onValueChange={(newValue) => setRemoveSpecial(newValue)} // If the user wants to remove the special status, check the box
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
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1, // Allow the ScrollView to grow
  },
  dropDownContainer: {
    borderColor: themes.light.primary,
    borderWidth: themes.borderwidth,
    borderRadius: themes.borderradius,
    marginBottom: themes.marginstyle.primary,
    backgroundColor: themes.light.inputbackground,
  },
  dropDownText: {
    fontSize: themes.fontsize.input,
    color: themes.light.primary,
  },
  specialContainer: {
    marginTop: themes.marginstyle.special,
  },
  normalContainer: {
    marginTop: themes.marginstyle.normal,
  },
});