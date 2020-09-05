import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const PatientProfileScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
      </View>
    );
  };

export default PatientProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
