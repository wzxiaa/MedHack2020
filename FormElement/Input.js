import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
// import PropTypes from "prop-types";

const Input = ({
  label,
  inputStyle,
  containerStyle,
  touched,
  error,
  ...props
}) => {
  return (
    <View style={containerStyle}>
      <Text>{label}</Text>
      <TextInput style={inputStyle} {...props} />
      <Text style={styles.errorInput}>{touched && error}</Text>
    </View>
  );
};

// This creates an object of styles using React Native StyleSheet
const styles = StyleSheet.create({
    containerStyle: {
      marginVertical: 10,
      marginHorizontal: 5,
      paddingHorizontal: 10,
    },
    input: {
      borderBottomWidth: 1,
      minHeight: 40,
      padding: 10,
    },
    errorInput: { color: "red", fontSize: 12 },
});

Input.defaultProps = {
    inputStyle: styles.input,
    containerStyle: styles.containerStyle,
    touched: false,
    error: null,
};

export default Input;