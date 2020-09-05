import React from "react";
import { Text, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import GlobalStyles from '../Style';
// import PropTypes from "prop-types";

const Button = ({
    text,
    instructions,
    containerStyle,
    textStyle,
    isSubmitting,
    disabled,
    indicatorColor,
    onPress,
    ...props
}) => {
    return (
        <TouchableOpacity
            onPress={() => {
                if (instructions) instructions();
            }}
            disabled={disabled || isSubmitting}
            style={containerStyle}
            { ...props }
        >
            {isSubmitting ? (
                <ActivityIndicator color={indicatorColor} />
            ) : (
                <Text style={textStyle}>{text}</Text>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
      marginVertical: 10,
      marginHorizontal: 10,
      backgroundColor: "#009387",
      paddingVertical: 10,
      borderRadius: 5
    },
    textStyle: {
      textAlign: "center",
      color: "white",
      fontSize: 20
    }
});

Button.defaultProps = {
    text: "",
    isSubmitting: false,
    indicatorColor: "white",
    ...styles // this would spread the styles object
};

export default Button;