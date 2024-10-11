import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Activities from './Screens/Activities';
import Diet from './Screens/Diet';
import Settings from './Screens/Settings';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator(); // Create a navigation container reference
const Tab = createBottomTabNavigator(); // Create a bottom tab navigator

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Activities"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Activities"
        component={Activities}
        options={{
          tabBarLabel: "Activities",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="walking" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Diet"
        component={Diet}
        options={{
          tabBarLabel: "Diet",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="fastfood" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}





export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Activities" component={Activities} />
        <Stack.Screen name="Diet" component={Diet} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
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
