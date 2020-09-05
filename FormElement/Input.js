import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import GlobalStyles from '../Style';
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
      <Text style={GlobalStyles.inputTitleStyle}>{label}</Text>
      <TextInput style={inputStyle} {...props} />
      <Text style={styles.errorInput}>{touched && error}</Text>
    </View>
  );
};

// This creates an object of styles using React Native StyleSheet
const styles = StyleSheet.create({
    input: {
      borderBottomWidth: 1,
      minHeight: 40,
      paddingVertical: 10,
    },
    errorInput: { color: "red", fontSize: 12 },
});

Input.defaultProps = {
    inputStyle: styles.input,
    containerStyle: GlobalStyles.inputContainerStyle,
    touched: false,
    error: null,
};

export default Input;