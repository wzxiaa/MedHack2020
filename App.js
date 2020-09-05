import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {StackNavigator} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import MainTabScreen from "./screens/MainTabScreen";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CalenderScreen from "./screens/CalenderScreen";
import PatientProfileScreen from "./screens/PatientProfileScreen";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
  <Tab.Navigator initialRouteName="Home" activeColor="#fff" backgroundColor="#009387">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "All Patients",
        tabBarColor: "#009387",
        
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-group" color={color} size={26} />
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
      component={CalenderScreen}
      options={{
        tabBarLabel: "Calender",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="calendar-clock" color={color} size={26} />
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
        
        headerRight: () =>(
          <Icon.Button 
          name="ios-add-circle-outline" 
          backgroundColor="#009387"
          size={30}
          onPress={() => navigation.navigate('PatientProfile')}
          ></Icon.Button>
        )
      }}
    />
    <HomeStack.Screen
      name="PatientProfile"
      component={PatientProfileScreen}
      options={{title:"Patient Profile"}}
    />
    
  </HomeStack.Navigator>
);

// const DetailsStackScreen = ({ navigation }) => (
//   <DetailsStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: "#009387",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         fontWeight: "bold",
//       },
//     }}
//   >
//     <DetailsStack.Screen
//       name="Details"
//       component={DetailsScreen}
//       options={{
        
//       }}
//     />
//   </DetailsStack.Navigator>
// );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
