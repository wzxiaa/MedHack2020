import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import { useFormik, Formik } from "formik";
import Input from "../FormElement/Input";
import Button from "../FormElement/Button";
import Select from "../FormElement/Select";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import GlobalStyles from "../Style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const PrescribedMedScreen = ({ route, navigation }) => {
  const [date, setDate] = useState(new Date());
  const { data } = route.params;
  return (
    <Formik
      initialValues={{
        med_name: "",
        dosage: "",
        ATC: "",
        route: "",
        startingtime: "",
        frequency: "",
      }}
      onSubmit={(values) => {
        console.log("submitted", values);
        InsertData(values, data, navigation);
      }}
    >
      {({ handleChange, handleSubmit, values, setFieldValue, isSubmitting }) => (
        <>
          <SafeAreaView style={{flex:1}}>
            <KeyboardAwareScrollView>
              <ScrollView>

            <Input
              label="Medication Name"
              value={values.med_name}
              onChangeText={handleChange("med_name")}
            />
            <Input
              label="ATC"
              value={values.ATC}
              onChangeText={handleChange("ATC")}
            />
            <Input
              label="Dosage(mg)"
              value={values.dosage}
              onChangeText={handleChange("dosage")}
            />
            <Select
              label="Route"
              placeholder={{ label: "Select route ...", value: null }}
              onValueChange={(value) => setFieldValue("route", value)}
              items={[
                { label: "Oral", value: "oral" },
                { label: "Injection", value: "injection" },
                { label: "Rectal", value: "rectal" },
                { label: "Vaginal", value: "vaginal" },
                { label: "Ocular", value: "ocular" },
                { label: "Otic", value: "otic" },
                { label: "Nasal", value: "nasal" },
                { label: "inhalation", value: "inhalation" },
              ]}
            />
            <View style={GlobalStyles.inputContainerStyle}>
              <Text style={GlobalStyles.inputTitleStyle}>
                Selecting start time
              </Text>
              <DateTimePicker
                value={date}
                onChange={(event, date)=>{
                  setDate(date);
                  setFieldValue("startingtime", date);
                }}
                mode="datetime"
              />
              <Select
                label="Frequency"
                placeholder={{ label: "Select frequency ...", value: null }}
                onValueChange={(value) => setFieldValue("frequency", value)}
                items={[
                  { label: "Just once", value: "justonce" },
                  { label: "Once a day", value: "onceaday" },
                  { label: "Twice a day", value: "twiceaday" },
                  { label: "Once a week", value: "onceaweek" },
                ]}
              />
            </View>
            </ScrollView>
            </KeyboardAwareScrollView>
            </SafeAreaView>
            <View style={{flexDirection:'row', justifyContent:"center"}}>
              <View style={{flex:1}}>
                <Button text="Submit" onPress={handleSubmit} />
              </View>
              <View style={{flex:1}}>
                <Button text="Cancel" onPress={()=>navigation.navigate("MedicineView")} />
              </View>
            </View>
          </>
      )}
    </Formik>
  );
};

const InsertData = (values, data, navigation, updateFunction) => {
  global.db
    .transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Prescribed_med (med_name, ATC, dosage, route, startingtime, frequency, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          values.med_name,
          values.ATC,
          values.dosage,
          values.route,
          values.startingtime,
          values.frequency,
          data.user_id
        ],
        (_, { rows: { _array } }) => {
          console.log("Insert return " + JSON.stringify(_array));
          navigation.navigate("MedicineView");
        },
        (_, error) => console.log("INSERT ERROR " + JSON.stringify(error))
      );
  });
};

export default PrescribedMedScreen;
