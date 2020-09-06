import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useFormik, Formik } from "formik";
import Input from "../FormElement/Input";
import Button from "../FormElement/Button";
import Select from "../FormElement/Select";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import GlobalStyles from "../Style";

const PrescribedMedScreen = ({ route, navigation }) => {
  const [date, setDate] = useState(new Date());
  const { data } = route.params;
  console.log(data);
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
      onSubmit={(values) => console.log("submitted", values)}
    >
      {({ handleChange, handleSubmit, values }) => (
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
            onValueChange={(value) => {
              console.log(value);
              handleChange("route");
            }}
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
              onValueChange={handleChange("startingtime")}
              mode="datetime"
            />
            <Select
              label="Frequency"
              placeholder={{ label: "Select frequency ...", value: null }}
              onValueChange={(value) => {
                console.log(value);
                handleChange("frequency");
              }}
              items={[
                { label: "Just once", value: "justonce" },
                { label: "Once a day", value: "onceaday" },
                { label: "Twice a day", value: "twiceaday" },
                { label: "Once a week", value: "onceaweek" },
              ]}
            />
          </View>

          <Button text="Submit" onPress={insert_test} />
        </ScrollView>
      )}
    </Formik>
  );

  const insert_test = () => {
    global.db
      .transaction((tx) => {
        tx.executeSql(
          "insert Prescribed_med (med_name, ATC, dosage, route,startingtime,frequency,user_id) VALUES (?, ?, ?, ?, ?)",
          [
            values.med_name,
            values.ATC,
            values.dosage,
            values.route,
            values.startingtime,
            values.frequency,
            1,
          ]
        ).then(([tx, results]) => {
          resolve(results);
        });
      })
      .then((result) => {
        this.closeDatabase(db);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default PrescribedMedScreen;
