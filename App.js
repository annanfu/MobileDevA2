import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Activities from './Screens/Activities';
import Diet from './Screens/Diet';
import Settings from './Screens/Settings';
import AddAnActivity from './Screens/AddAnActivity';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { themes } from './helper';
import React, { useState } from 'react';
import { ThemeContext } from './Contexts/themeContext'; // Import ThemeContext

const Stack = createNativeStackNavigator(); // Create a navigation container reference
const Tab = createBottomTabNavigator(); // Create a bottom tab navigator

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Activities"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: themes.light.active,
        tabBarInactiveTintColor: themes.light.text,
        tabBarStyle: { backgroundColor: themes.light.primary },
        headerStyle: { backgroundColor: themes.light.primary },
        headerTintColor: themes.light.text,
        headerTitleStyle: { fontWeight: "bold" },
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Activities") {
            return <FontAwesome5 name="walking" size={size} color={color} />;
          } else if (route.name === "Diet") {
            return <MaterialIcons name="fastfood" size={size} color={color} />;
          } else if (route.name === "Settings") {
            return <Ionicons name="settings-sharp" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen
        name="Activities"
        component={Activities}
        options={({ navigation }) => ({
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("AddAnActivity")}
              title="Add"
            />
          ),
        })}
      />
      <Tab.Screen name="Diet" component={Diet} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [theme, setTheme] = useState(themes.light); // Default to light theme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: themes.light.text,
            headerStyle: { backgroundColor: themes.light.primary },
          }}
        >
          <Stack.Screen
            name="Home"
            component={MyTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddAnActivity"
            component={AddAnActivity}
            options={{ title: "Add An Activity" }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
