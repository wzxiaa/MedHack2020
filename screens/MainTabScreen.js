import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import ProfileScreen from "./ProfileScreen";
import CalenderScreen from "./CalenderScreen";
import PatientProfileScreen from "./PatientProfileScreen";

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const CalendarStack = createStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: "Details",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    /> */}
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
    {/* <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    /> */}
  </Tab.Navigator>
);

export default MainTabScreen;

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
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
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
