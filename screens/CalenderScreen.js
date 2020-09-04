import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CalenderScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CalenderScreen</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default CalenderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
