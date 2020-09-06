import React from 'react';
import { Text, ScrollView, StyleSheet, View, SafeAreaView } from 'react-native';
import GlobalStyles from '../Style';
import Button from '../FormElement/Button';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";

import PrescribedMedScreen from '../screens/PrescribedMedScreen';
import { FlatList } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

const MedicineStack = createStackNavigator();

const InfoTabScreen = ({
    navigation
}) => {
    // const data = navigation.state.params.data;
    return (
        <Tab.Navigator 
            initialRouteName="Basics"
            shifting="true"
            // barStyle={GlobalStyles.tabBar}
        >
            <Tab.Screen 
                name="Basics" 
                children={()=><ResidentInfoScreen/>}
                options={{
                    tabBarLabel: "Basic Info",
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                        name="information"
                        color={color}
                        size={26}
                    />
                    ),
                }}
            />
            <Tab.Screen 
            name="Medicine" 
            component={MedicineStackScreen}
            options={{
                tabBarLabel: "Medicine",
                tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                    name="pill"
                    color={color}
                    size={26}
                />
                ),
            }} />
        </Tab.Navigator>
  );
}


const MedicineStackScreen = ({ navigation }) => (
    <MedicineStack.Navigator
      screenOptions={{
        headerStyle: GlobalStyles.header,
        headerTitleStyle: GlobalStyles.headerTitle,
      }}
    >
      <MedicineStack.Screen
        name="MedicineView"
        component={ResidentMedScreen}
        options={{
          title: "Prescribed medicines",
        }}
      />
      <MedicineStack.Screen
        name="MedicineAddForm"
        component={PrescribedMedScreen}
        options={{
          title: "Add new prescribed medicine",
        }}
      />
    </MedicineStack.Navigator>
  );

const ResidentInfoScreen = ({
    route,
    navigation,
}) => {
    // const { data } = route.params;
    const data = {
        name:"Lancer", 
        age:7, 
        gender:"male", 
        emergency_contact:"1111"
    };
    return (
        <View style={GlobalStyles.inputContainerStyle}>
            <ScrollView>
                <Entry label="Name" data={data.name} />
                <Entry label="Age" data={data.age} />
                <Entry label="Gender" data={data.gender} />
                <Entry label="Emergency Contact" data={data.emergency_contact} />
                
                {/* <Button text="Add prescribed medicine" onPress={()=>navigation.navigate()}/> */}
            </ScrollView>
        </View>
    );
};

const Entry = (({
    label,
    data
}) => {
    return (
        <View style={styles.entryStyle}>
            <Text style={styles.textStyle}>{label}</Text>
            <Text style={styles.textStyle}>{data}</Text>
        </View>
    );
});

const ResidentMedScreen = ({
    navigation,
}) => {
    return (
        <>
            <View style={GlobalStyles.inputContainerStyle}>
                <SafeAreaView>
                    <ScrollView>
                    </ScrollView>
                </SafeAreaView>
                
                
            </View>
            <View style={styles.bottom}>
                <Button containerStyle={styles.buttonContainerStyle} text="Add prescribed medicine" onPress={()=>navigation.navigate("MedicineAddForm")}/>  
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    entryStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        padding: 3
    },
    textStyle: {
        fontSize: 17
    },
    buttonContainerStyle: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: "#009387",
        paddingVertical: 10,
        borderRadius: 5
    },
    bottom: {flex: 1, justifyContent: 'flex-end', marginBottom: 5}
})

export default InfoTabScreen;