import React, { useState } from 'react';
import { View, StyleSheet, Text } from "react-native";
import { CheckBox } from 'react-native-elements';
import GlobalStyles from '../Style';

const Check = ({
    label,
    containerStyle,
    onPress,
    ...props
}) => {
    const [checked, setChecked] = useState(false);
    return (
        <View style={containerStyle}>
            <View style={styles.checkboxWraper}>
                <View style={styles.checkboxLabel}>
                    <Text >{label}</Text>
                </View>
                <CheckBox
                    right
                    containerStyle={styles.checkboxContainer}
                    title='Yes'
                    checked={checked}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    onPress={() => {setChecked(!checked); console.log(checked); onPress()}}
                    {...props}
                />          
            </View>
        </View>
        
    );
}

export default Check;

const styles = StyleSheet.create({
    checkboxWraper: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    checkboxLabel: {
        justifyContent: 'center', //Centered vertically
        //alignItems: 'left', // Centered horizontally
        // marginTop: 0,
        width: 200,

    },
    checkboxContainer: {
        backgroundColor: 'transparent'
    }
});


Check.defaultProps = {
    containerStyle: GlobalStyles.inputContainerStyle,
}