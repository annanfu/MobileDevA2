import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemsList from "../Components/ItemsList";
import Background from '../Components/Background';

export default function Activities({ navigation }) {
  return (
    <Background>
      <ItemsList type="activities" navigation={navigation} />
    </Background>
  );
}

const styles = StyleSheet.create({})