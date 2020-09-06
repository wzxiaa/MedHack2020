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
    containerStyle: {
      marginVertical: 10,
      marginHorizontal: 5,
      paddingHorizontal: 10,
    },
    headerTitle: {
      fontWeight: "bold",
      color: "#FFF"
    },
    headerIcon: {
      backgroundColor: themeBGColor,
      fontSize: 30,
      justifyContent: 'center',
      width: 25,
      marginRight: 10
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
    },

    //global input element style
    inputContainerStyle: {
        marginVertical: 10,
        marginHorizontal: 5,
        paddingHorizontal: 10,
    },
    inputTitleStyle: {
      fontWeight: 'bold',
    }
});

export default GlobalStyles;