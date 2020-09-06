import React, { useState } from 'react';
import { View, StyleSheet, Text } from "react-native";
import { CheckBox } from 'react-native-elements';
import GlobalStyles from '../Style';

const Header = ({
    label,
    textStyle,
    containerStyle,
    ...props
}) => {
    return (
        <View style={containerStyle}>
            <Text style={textStyle}>{label}</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    }
});


Header.defaultProps = {
    containerStyle: GlobalStyles.inputContainerStyle,
    textStyle: styles.textStyle
}