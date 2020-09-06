import React from "react";
import { Text, ScrollView, StyleSheet, View, SafeAreaView } from "react-native";
import GlobalStyles from "../Style";
import Button from "../FormElement/Button";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Table, Row, Rows } from "react-native-table-component";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import MedListDisplay from "../Components/MedListDisplay";
import PrescribedMedScreen from "../screens/PrescribedMedScreen";
import { FlatList } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";

const Tab = createMaterialTopTabNavigator();
const MedicineStack = createStackNavigator();

const InfoTabScreen = ({ route, navigation }) => {
  const { data } = route.params;
  console.log(data);
  return (
    <Tab.Navigator
      initialRouteName="Basics"
      shifting="true"
      // barStyle={GlobalStyles.tabBar}
    >
      <Tab.Screen
        name="Basics"
        children={() => <ResidentInfoScreen data={data} />}
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
        children={() => <MedicineStackScreen data={data} />}
        options={{
          tabBarLabel: "Medicine",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pill" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MedicineStackScreen = ({ data, navigation }) => {
  console.log(data);
  return (
    <MedicineStack.Navigator
      screenOptions={{
        headerStyle: GlobalStyles.header,
        headerTitleStyle: GlobalStyles.headerTitle,
        headerTintColor: "#FFF",
      }}
    >
      <MedicineStack.Screen
        name="MedicineView"
        children={() => (
          <ResidentMedScreen navigation={navigation} data={data} />
        )}
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
};

const ResidentInfoScreen = ({ data }) => {
  const tableHead = ["Disease", "Has symptom"];
  const tableData = [
    ["Asthma", data.asthma],
    ["Acid Reflux", data.acid_reflux],
    ["Chronic low back pain", data.chronic_low_back_pain],
    ["Erectile dysfunction", data.erectile_dysfunction],
    ["Prostate problem", data.prostate_problem],
    ["Cholesterol problem", data.cholesterol_problem],
    ["Gout", data.gout],
    ["migraine", data.migraine],
    ["Thyroid problem", data.thyroid_problem],
    ["Couagulation Problem", data.couagulation_problem],
    ["Diabete", data.diabete],
    ["High blood pressure", data.high_blood_pressure],
    ["Osteopenia", data.osteopenia],
    ["Alcoholism", data.alcoholism],
  ];
  return (
    <View style={GlobalStyles.containerStyle}>
      <ScrollView>
        <Entry label="Name" data={data.name} />
        <Entry label="Age" data={data.age} />
        <Entry label="Gender" data={data.gender} />
        <Entry label="Emergency Contact" data={data.emergency_contact} />
        <Divider
          style={{ backgroundColor: "#009387", height: 2, marginVertical: 5 }}
        />
        {/* Table showing medical history */}
        <View>
          <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
            <Row data={tableHead} style={styles.head} textStyle={styles.text} />
            <Rows data={tableData} textStyle={styles.text} />
          </Table>
        </View>
      </ScrollView>
    </View>
  );
};

const Entry = ({ label, data }) => {
  return (
    <View style={styles.entryStyle}>
      <Text style={styles.textStyle}>{label}</Text>
      <Text style={styles.textStyle}>{data}</Text>
    </View>
  );
};

const ResidentMedScreen = ({ data, navigation }) => {
  return (
    <>
      <View style={GlobalStyles.inputContainerStyle}>
        <SafeAreaView>
          <MedListDisplay />
        </SafeAreaView>
      </View>
      <View style={styles.bottom}>
        <Button
          containerStyle={styles.buttonContainerStyle}
          text="Add prescribed medicine"
          onPress={() => navigation.navigate("MedicineAddForm", { data: data })}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  entryStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    padding: 3,
  },
  textStyle: {
    fontSize: 17,
  },
  buttonContainerStyle: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#009387",
    paddingVertical: 10,
    borderRadius: 5,
  },
  bottom: { flex: 1, justifyContent: "flex-end", marginBottom: 5 },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});

export default InfoTabScreen;
