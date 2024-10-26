import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Activities from './Screens/Activities';
import Diet from './Screens/Diet';
import Settings from './Screens/Settings';
import AddAnActivity from './Screens/AddAnActivity';
import AddADiet from './Screens/AddADiet';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { themes } from './helper';
import React, { useState } from 'react';
import HeaderPressable from "./Components/HeaderPressable";



import { ThemeContext } from './Contexts/themeContext'; // Import ThemeContext
import { DataProvider } from './Contexts/dataContext';  // Import DataProvider




const Stack = createNativeStackNavigator(); // Create a navigation container reference
const Tab = createBottomTabNavigator(); // Create a bottom tab navigator

// Create a custom tab bar with icons 
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Activities"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: themes.light.active, // Set the active tab color
        tabBarInactiveTintColor: themes.light.inputbackground, // Set the inactive tab color
        tabBarStyle: {
          backgroundColor: themes.light.primary,
          borderTopWidth: 0, // This removes the top border of the tab bar
        },
        headerStyle: {
          backgroundColor: themes.light.primary,
          elevation: 0, // This removes the shadow on Android
          shadowOpacity: 0, // This removes the shadow on iOS
        },
        headerTintColor: themes.light.text, // Set the header text color
        headerTitleStyle: { fontWeight: "bold" }, // Set the header title style
        tabBarIcon: ({ color, size }) => {
          // Set the tab bar icons
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
        // Add a button to the header to navigate to the AddAnActivity screen
        options={({ navigation }) => ({
          headerRight: () => (
            <HeaderPressable
              pressedHandler={() => navigation.navigate("AddAnActivity")}
              screenType={"Activities"}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Diet"
        component={Diet}
        // Add a button to the header to navigate to the AddADiet screen
        options={({ navigation }) => ({
          headerRight: () => (
            <HeaderPressable
              pressedHandler={() => navigation.navigate("AddADiet")}
              screenType={"Diet"}
            />
          ),
        })}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [theme, setTheme] = useState(themes.light); // Default to light theme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>  
      <DataProvider>
        {/* Wrap the navigation container with the data provider */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: themes.light.text,
              headerStyle: { backgroundColor: themes.light.primary },
            }}
          >
            <Stack.Screen
              name=" "
              component={MyTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddAnActivity"
              component={AddAnActivity}
              options={{ title: "Add An Activity" }}
            />
            <Stack.Screen
              name="AddADiet"
              component={AddADiet}
              options={{ title: "Add A Diet" }}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </DataProvider>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({

});
