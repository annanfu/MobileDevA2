import { StyleSheet, View, TextInput } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { themes } from "../helper";

export default function DatePicker({ value, onChange }) {
  const [show, setShow] = useState(false); // Show the calendar
  const [mode] = useState("date"); // Set the mode of the calendar
  const [displayDate, setDisplayDate] = useState(value); // Set the date to display

  const onChangeInternal = (event, selectedDate) => {
    setShow(false); // Close the calendar
    if (selectedDate) {
      setDisplayDate(selectedDate); // Update the displayed date
      onChange(selectedDate); // Call onChange with the selected date
    }
  };

  const showDatepicker = () => {
    // Show the calendar and display the current date as a string in the input
    if (show) {
      setShow(false); // If the calendar is already shown, collapse it
    } else {
      setDisplayDate(new Date()); // Update display date to the current date
      setShow(true); // Show the calendar
      onChange(new Date()); // Only call onChange when opening the calendar
    }
  };

  const formatDate = (date) => {
    return date ? date.toDateString() : "";
  };

  return (
    <View>
      <TextInput
        style={styles.DateInput}
        value={formatDate(displayDate)} // Show the formatted date
        onPressIn={showDatepicker} // When the user presses the input
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={displayDate || new Date()} // Use displayDate or the current date
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
