import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import GlobalStyles from '../Style';

const Select = ({
  label,
  placeholder,
  placeholderTextColor,
  ...props
}) => {
  return (
    <View style={GlobalStyles.inputContainerStyle}>
        <Text style={GlobalStyles.inputTitleStyle}>{label}</Text>
        <RNPickerSelect
            style={pickerSelectStyles} 
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            {...props}
        />
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Select;