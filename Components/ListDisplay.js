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

export default class ListDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allResidents: [],
    };
  }

  async componentDidMount() {
    // return new Promise((resolve, reject) => {
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
    // });
  }

  // UNSAFE_componentWillMount() {
  //   global.db.transaction((tx) => {
  //     tx.executeSql(
  //       `SELECT * FROM All_users;`,
  //       [],
  //       (_, { rows: { _array } }) => {
  //         var temp = [];
  //         var json = JSON.parse(JSON.stringify(_array));
  //         for (var i in json) {
  //           temp.push(json[i]);
  //           // this.setState({
  //           //   allResidents: this.state.allResidents.push(json[i]),
  //           // });
  //         }
  //         this.setState({
  //           allResidents: temp,
  //         });
  //         // console.log(this.state.allResidents[0].user_id);
  //         console.log(JSON.stringify(temp));
  //       },
  //       (_, error) => console.log("QUERY ERROR " + JSON.stringify(error))
  //     );
  //   });
  // }

  renderItem = ({ item }) => {
    return (
      <ListItem
        name={item.user_name}
        emergence_contact={item.emergency_contact}
      />
    );
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.allResidents}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.user_id.toString()}
        />
      </SafeAreaView>
    );
  }
}
