import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import CalenderScreen from "./screens/CalenderScreen";
import PatientProfileScreen from "./screens/PatientProfileScreen";

const HomeStack = createStackNavigator();
const CalendarStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        backgroundColor="#009387"
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "All Patients",
            tabBarColor: "#009387",

            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-group"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Calender"
          component={CalendarStackScreen}
          options={{
            tabBarLabel: "Calender",
            tabBarColor: "#009387",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="calendar-clock"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "All Patients",

        headerRight: () => (
          <Icon.Button
            name="ios-add-circle-outline"
            backgroundColor="#009387"
            size={30}
            onPress={() => navigation.navigate("PatientProfile")}
          ></Icon.Button>
        ),
      }}
    />
    <HomeStack.Screen
      name="PatientProfile"
      component={PatientProfileScreen}
      options={{ title: "Patient Profile" }}
    />
  </HomeStack.Navigator>
);

const CalendarStackScreen = ({ navigation }) => (
  <CalendarStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <CalendarStack.Screen
      name="Calendar"
      component={CalenderScreen}
      options={{}}
    />
  </CalendarStack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
