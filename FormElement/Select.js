import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Select = ({
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
        <RNPickerSelect
            style={inputStyle} 
            
            {...props}
        />
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

Select.defaultProps = {
    inputStyle: styles.input,
    containerStyle: styles.containerStyle,
    touched: false,
    error: null,
};

export default Select;