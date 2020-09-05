import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
<<<<<<< HEAD
import { StackNavigator } from "@react-navigation/native";
=======
>>>>>>> 69c42e88d8371ef23f6df40cd55e1dada0c99b17
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

//database setup
import * as SQLite from 'expo-sqlite';
const db_name = "db"
global.db = SQLite.openDatabase(db_name);

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        backgroundColor="#009387"
=======
      <Tab.Navigator 
        initialRouteName="Home" 
        shifting="true" 
        barStyle={GlobalStyles.tabBar}
>>>>>>> 69c42e88d8371ef23f6df40cd55e1dada0c99b17
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
<<<<<<< HEAD
            tabBarLabel: "All Patients",
            tabBarColor: "#009387",

            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-group"
                color={color}
                size={26}
              />
            ),
=======
            tabBarLabel: "All residents",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-group" color={color} size={26} />
            ),
            
>>>>>>> 69c42e88d8371ef23f6df40cd55e1dada0c99b17
          }}
        />
        <Tab.Screen
          name="Calender"
<<<<<<< HEAD
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
=======
          component={CalenderScreen}
          options={{
            tabBarLabel: "Calender",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar-clock" color={color} size={26} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Profile"
          component={CalenderScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarColor: "#009387",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer> 
>>>>>>> 69c42e88d8371ef23f6df40cd55e1dada0c99b17
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
<<<<<<< HEAD

        headerRight: () => (
          <Icon.Button
            name="ios-add-circle-outline"
            backgroundColor="#009387"
            size={30}
            onPress={() => navigation.navigate("PatientProfile")}
=======
        // headerStyle: GlobalStyles.header,
        // headerTitleStyle: GlobalStyles.headerTitle,
        
        headerRight: () =>(
          <Icon.Button 
            name="ios-add-circle-outline" 
            style={GlobalStyles.headerIcon}
            onPress={() => navigation.navigate('ResidentRegistrationForm')}
>>>>>>> 69c42e88d8371ef23f6df40cd55e1dada0c99b17
          ></Icon.Button>
        ),
      }}
    />
    <HomeStack.Screen
<<<<<<< HEAD
      name="PatientProfile"
      component={PatientProfileScreen}
      options={{ title: "Patient Profile" }}
=======
      name="ResidentRegistrationForm"
      component={RegisterResidentForm}
      options={{
        title:"Resident Registration",
        // headerStyle: GlobalStyles.header,
        // headerTitleStyle: GlobalStyles.headerTitle,
      }}
>>>>>>> 69c42e88d8371ef23f6df40cd55e1dada0c99b17
    />
  </HomeStack.Navigator>
<<<<<<< HEAD
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
=======
);
>>>>>>> 69c42e88d8371ef23f6df40cd55e1dada0c99b17
