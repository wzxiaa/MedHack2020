import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import MainTabScreen from "./screens/MainTabScreen";

import HomeScreen from "./screens/HomeScreen";
import CalenderScreen from "./screens/CalenderScreen";
import RegisterResidentForm from "./screens/RegisterResidentForm";

//import style file
import GlobalStyles from "./Style";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

//database setup
import * as SQLite from 'expo-sqlite';
const db_name = "db"
global.db = SQLite.openDatabase(db_name);

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
              <MaterialCommunityIcons name="account-group" color={color} size={26} />
            ),
            
          }}
        />
        <Tab.Screen
          name="Calender"
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
        
        headerRight: () =>(
          <Icon.Button 
            name="ios-add-circle-outline" 
            style={GlobalStyles.headerIcon}
            onPress={() => navigation.navigate('ResidentRegistrationForm')}
          ></Icon.Button>
        )
      }}
    />
    <HomeStack.Screen
      name="ResidentRegistrationForm"
      component={RegisterResidentForm}
      options={{
        title:"Resident Registration",
        // headerStyle: GlobalStyles.header,
        // headerTitleStyle: GlobalStyles.headerTitle,
      }}
    />
    
  </HomeStack.Navigator>
);