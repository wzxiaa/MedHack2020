import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  FlatList,
  SafeAreaView,
} from "react-native";
import ListItem from "./ListItem";
import { withNavigation } from 'react-navigation';
import GlobalStyles from "../Style";

const li = ["aaaa", "sssss", "ssssss"];

var data = [
  {
    id: 1,
    name: "hello",
  },
  {
    id: 2,
    name: "hello",
  },
];

class ListDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allResidents: [],
    };
  }

  async componentDidMount() {
    console.log("start did mount");
    global.db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM All_users;`,
        [],
        (_, { rows: { _array } }) => {
          console.log(JSON.stringify(_array));
          this.state.allResidents = [];
          var json = JSON.parse(JSON.stringify(_array));
          for (var i in json) {
            this.state.allResidents.push(json[i]);
          }
          console.log(
            "reach did mount, finish promise" +
              JSON.stringify(this.state.allResidents)
          );
          // resolve(this.state.allResidents);
          this.forceUpdate();
        },
        (_, error) => console.log("QUERY ERROR " + JSON.stringify(error))
      );
    });
  }

  renderItem = ({ item }) => {
    return (
      <ListItem
        info={item}
        id={item.user_id}
        name={item.user_name}
        gender={item.gender}
        age={item.age}
        emergence_contact={item.emergency_contact}
        onPress={() => {
          // navigate to view page with user data
          this.props.navigation.navigate("ResidentInfoScreen", { data: item });
        }}
      />
    );
  };

  render() {
    // const navigation = this.props.navigation;
    return (
      <SafeAreaView style={GlobalStyles.inputContainerStyle}>
        <FlatList
          data={this.state.allResidents}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.user_id.toString()}
        />
      </SafeAreaView>
    );
  }
}

export default ListDisplay;