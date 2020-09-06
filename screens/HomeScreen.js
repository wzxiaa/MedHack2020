import React from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import * as FileSystem from "expo-file-system";



const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const theme = useTheme();

  const data = {
    name:"Tianzhu", 
    age:10, 
    gender:"female", 
    emergency_contact:"1111"
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <Text style={{ color: colors.text }}>All Patients</Text>

      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("ResidentInfoScreen", {data:data})}
      />
      <Button title="Create table" onPress={create} />
      <Button title="Insert table" onPress={insert} />
      <Button title="Query table" onPress={query} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const create = () => {
  console.log(FileSystem.documentDirectory);
  console.log("create table .... test" + JSON.stringify(global.db));
  global.db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, first_name TEXT, last_name TEXT, age INTEGER, gender INTEGER);`
    );
  });
};

const insert = () => {
  console.log("insert table .... ");
  global.db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO test (first_name, last_name, age, gender) VALUES first_name = ?, last_name = ?, age = ?, gender = ?;`,
      ["mary", "jane", 22, 1],
      (_, { rows: { _array } }) =>
        console.log("Insert return " + JSON.stringify(_array)),
      (_, error) => console.log("INSERT ERROR " + JSON.stringify(error))
    );
  });
};

// const query = () => {
//   console.log("query table ....");
//   global.db.transaction((tx) => {
//     tx.executeSql(
//       `SELECT * FROM test;`,
//       [],
//       (_, { rows }) => console.log("Query return " + JSON.stringify(rows)),
//       (_, error) => console.log("QUERY ERROR " + JSON.stringify(error))
//     );
//   });
// };

const query = () => {
  console.log("query table ....");
  global.db.transaction((tx) => {
    tx.executeSql(
      `SELECT * FROM All_users;`,
      [],
      (_, { rows }) => console.log("Query return " + JSON.stringify(rows)),
      (_, error) => console.log("QUERY ERROR " + JSON.stringify(error))
    );
  });
};
