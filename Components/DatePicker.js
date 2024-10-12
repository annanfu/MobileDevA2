import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from "@react-native-community/datetimepicker";
import { themes } from "../helper";


export default function DatePicker({ value, onChange, style }) {
const [show, setShow] = useState(false);
const [mode, setMode] = useState("date");

const onChangeInternal = (event, selectedDate) => {
  const currentDate = selectedDate || value;
  setShow(false);
  onChange(currentDate);
};

const showMode = (currentMode) => {
setShow(true);
setMode(currentMode);
};
  
  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

const formatDate = (date) => {
  return date.toDateString();
};

return (
  <View>
    <TextInput
      style={styles.DateInput}
      value={formatDate(value)}
      onPressIn={showDatepicker}
      editable={false}
    />
    {show && (
      <DateTimePicker
        testID="dateTimePicker"
        value={value}
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
    //textAlign: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: themes.light.primary,
    backgroundColor: themes.light.inputbackground,
    fontSize: 18,
    color: themes.light.primary,
    padding: 5,
  },
});