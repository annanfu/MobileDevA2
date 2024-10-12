import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../Components/Background'
import PrimaryText from '../Components/PrimaryText'
import Input from '../Components/Input'


export default function AddAnActivity({navigation}) {
  const [duration, setDuration] = React.useState('');
  return (
    <Background>
      <PrimaryText>Activity *</PrimaryText>
      <PrimaryText>Duration (min) *</PrimaryText>
      <Input onChangeText={(duration) => setDuration(duration)} value={duration} />

      <PrimaryText>Date *</PrimaryText>
    </Background>
  );
}

const styles = StyleSheet.create({})