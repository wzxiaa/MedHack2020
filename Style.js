import React from "react";
import { StyleSheet } from "react-native";

const themeBGColor = "#009387";

const GlobalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    headerTitle: {
      fontWeight: "bold",
      color: "#FFF"
    },
    headerIcon: {
      backgroundColor: themeBGColor,
      fontSize: 30
    },
    header: {
      backgroundColor: themeBGColor
    },
    tabBar: {
      backgroundColor: themeBGColor,
    },
    tabItem: {
      backgroundColor: themeBGColor,
      color: themeBGColor,
      justifyContent: 'center',
      flex: 1,
      borderWidth: 1,
      paddingHorizontal: 5
    }
});

export default GlobalStyles;