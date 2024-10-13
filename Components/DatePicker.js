import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { themes } from "../helper";

export default function DatePicker({ value, onChange, style }) {
  const [show, setShow] = useState(false);  // Show the calendar
  const [mode, setMode] = useState("date");  // Set the mode of the calendar
  const [displayDate, setDisplayDate] = useState(null);  // Set the date to display

  const onChangeInternal = (event, selectedDate) => {
    setShow(false);  // Close the calendar
    // If the user selects a date, set the display date and call the onChange function
    if (selectedDate) {
      setDisplayDate(selectedDate);
      onChange(selectedDate);
    }
  };

  // Show the calendar
  const showDatepicker = () => {
    const currentDate = new Date();  // Get the current date
    if (
      show &&
      displayDate &&
      displayDate.toDateString() === currentDate.toDateString()
    ) {
      // If calendar is open and current date is already selected, close the calendar and call onChange
      setShow(false);
      onChange(currentDate);
    } else {
      // Otherwise, show the calendar and set the current date
      setDisplayDate(currentDate);
      setShow(true);
      if (!show) {
        // Only call onChange if we're opening the calendar
        onChange(currentDate);
      }
    }
  };

  const formatDate = (date) => {
    return date ? date.toDateString() : "";
  };

  return (
    <View>
      <TextInput
        style={styles.DateInput}
        value={formatDate(displayDate)}
        onPressIn={showDatepicker}  // when the user presses the input 
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={displayDate || new Date()} // either the display date or the current date
          mode={mode}
          is24Hour={true}
          display="inline"
          onChange={onChangeInternal}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  DateInput: {
    borderWidth: themes.borderwidth,
    borderRadius: themes.borderradius,
    borderColor: themes.light.primary,
    backgroundColor: themes.light.inputbackground,
    fontSize: themes.fontsize.input,
    color: themes.light.primary,
    padding: themes.paddingstyle.text,
  },
});
