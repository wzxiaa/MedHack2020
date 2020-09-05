import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import CalenderScreen from "./screens/CalenderScreen";
import RegisterResidentForm from "./screens/RegisterResidentForm";

//import style file
import GlobalStyles from "./Style";

const HomeStack = createStackNavigator();
const CalendarStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

//load DB

import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

FileSystem.downloadAsync(
  Asset.fromModule(require("./assets/sqlite.db")).uri,
  `${FileSystem.documentDirectory}SQLite/sqlite.db`
);

//database setup
import * as SQLite from "expo-sqlite";
const db_name = "sqlite.db";
global.db = SQLite.openDatabase(db_name);

console.log(FileSystem.documentDirectory + "SQLite/databasename");

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        shifting="true"
        barStyle={GlobalStyles.tabBar}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "All residents",
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
      headerStyle: GlobalStyles.header,
      headerTitleStyle: GlobalStyles.headerTitle,
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "All Patients",
        // headerStyle: GlobalStyles.header,
        // headerTitleStyle: GlobalStyles.headerTitle,

        headerRight: () => (
          <Icon.Button
            name="ios-add-circle-outline"
            style={GlobalStyles.headerIcon}
            onPress={() => navigation.navigate("ResidentRegistrationForm")}
          ></Icon.Button>
        ),
      }}
    />
    <HomeStack.Screen
      name="ResidentRegistrationForm"
      component={RegisterResidentForm}
      options={{
        title: "Resident Registration",
        // headerStyle: GlobalStyles.header,
        // headerTitleStyle: GlobalStyles.headerTitle,
      }}
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
