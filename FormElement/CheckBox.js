import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import GlobalStyles from '../Style';

const Check = ({
    label,
    containerStyle,
    placeholder,
    placeholderTextColor,
    disabled,
    value,
    ...props
}) => {
    return (
        <View style={containerStyle}>
            <View style={styles.checkboxWraper}>
                <Text style={GlobalStyles.inputTitleStyle}>{label}</Text>
                <CheckBox
                    value={value}
                    disabled={disabled}
                    {...props}
                />
            </View>
        </View>
    );
}

export default Check;

const styles = StyleSheet.create({
    checkboxWraper: {
      
    }
});


CheckBox.defaultProps = {
    containerStyle: GlobalStyles.inputContainerStyle,
    touched: false,
    error: null,
}