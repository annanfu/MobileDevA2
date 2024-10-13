import { StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native'
import React, {useContext, useState} from 'react'
import Background from '../Components/Background'
import PrimaryText from '../Components/PrimaryText'
import ButtonArea from '../Components/ButtonArea'
import Input from '../Components/Input'
import DropDownPicker from 'react-native-dropdown-picker'
import DatePicker from '../Components/DatePicker'
import { DataContext } from '../Contexts/dataContext'
import { themes } from '../helper'


export default function AddAnActivity({navigation}) {
  const { addActivity } = useContext(DataContext); // Get the addActivity function from the context
  const [duration, setDuration] = useState("");  // a state variable to store the duration
  const [date, setDate] = useState(null);  // a state variable to store the date
  
  // state variables for the DropDownPicker used to select the activity
  const [open, setOpen] = useState(false);
  const [activity, setActivity] = useState(null);
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
    // Check if the input values are valid
    if (!activity || isNaN(duration) || duration <= 0 || !date) {
      Alert.alert("Invalid Input", "Please check your input values", [{ text: "OK" }]);
      return;
    } else {
      // Add the activity object to the data context
      addActivity({
        activity: activity,
        duration: duration,
        date: date,
        isSpecial: (activity === 'Running' || activity === 'Weights') && duration > 60,
        }
     );
      navigation.goBack();  // Go back to the previous screen
    }
  }

  return (
    <Background>
      <PrimaryText>Activity *</PrimaryText>
      <DropDownPicker
        open={open}   // whether the dropdown is open
        value={activity}   // the selected value
        items={items}   // the list of items
        setOpen={setOpen}   // function to set the open state variable
        setValue={setActivity}   // function to set the activity state
        setItems={setItems}   // function to set the items state
        placeholder="Select An Activity"
        style={styles.dropDownContainer}
        textStyle={styles.dropDownText}
        placeholderStyle={styles.dropDownText}
      />
      <PrimaryText>Duration (min) *</PrimaryText>
      <Input
        onChangeText={(duration) => setDuration(duration)}
        value={duration}
      />

      <PrimaryText>Date *</PrimaryText>
      <DatePicker
        value={date}
        onChange={(newDate) => setDate(newDate)}  // update the date state variable
        display="default"
      />

      <ButtonArea>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Save" onPress={handleSave} />  
      </ButtonArea>
    </Background>
  );
}

const styles = StyleSheet.create({
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
});