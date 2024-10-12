import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { themes } from "../helper";

export default function DatePicker({ value, onChange, style }) {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [displayDate, setDisplayDate] = useState(null);

  const onChangeInternal = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDisplayDate(selectedDate);
      onChange(selectedDate);
    }
  };

  const showDatepicker = () => {
    const currentDate = new Date();
    if (
      show &&
      displayDate &&
      displayDate.toDateString() === currentDate.toDateString()
    ) {
      // If calendar is open and current date is already selected, close the calendar
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
        onPressIn={showDatepicker}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={displayDate || new Date()}
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
