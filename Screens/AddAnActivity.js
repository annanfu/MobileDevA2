import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useContext, useState} from 'react'
import Background from '../Components/Background'
import PrimaryText from '../Components/PrimaryText'
import ButtonArea from '../Components/ButtonArea'
import Input from '../Components/Input'
import DropDownPicker from 'react-native-dropdown-picker'
import DatePicker from '../Components/DatePicker'
import { DataContext } from '../Contexts/dataContext'


export default function AddAnActivity({navigation}) {
  const { addActivity } = useContext(DataContext); // Get the addActivity function from the context
  const [activity, setActivity] = useState(null);
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Walking", value: "walking" },
    { label: "Running", value: "running" },
    { label: "Swimming", value: "swimming" },
    { label: "Weights", value: "weights" },
    { label: "Yoga", value: "yoga" },
    { label: "Cycling", value: "cycling" },
    { label: "Hiking", value: "hiking" },
  ]);




  function handleSave() {
    if (!activity || isNaN(duration) || duration <= 0 || !date) {
      Alert.alert("Invalid Input", "Please check your input values", [{ text: "OK" }]);
      return;
    } else {
      addActivity(activity, duration, date);
      navigation.goBack();
    }
  }

  return (
    <Background>
      <PrimaryText>Activity *</PrimaryText>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeItem={(item) => setActivity(item.value)}
        placeholder="Select An Activity"
      />
      <PrimaryText>Duration (min) *</PrimaryText>
      <Input
        onChangeText={(duration) => setDuration(duration)}
        value={duration}
      />

      <PrimaryText>Date *</PrimaryText>
      <DatePicker
        value={date}
        onChange={() => setDate(date)}
        display="default"
      />
      <ButtonArea>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Save" onPress={handleSave} />
      </ButtonArea>
    </Background>
  );
}

const styles = StyleSheet.create({})