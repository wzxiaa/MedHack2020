import React, { Component } from "react";
import { FlatList, SafeAreaView } from "react-native";
import MedItem from "./MedItem";

export default class MedListDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMedicine: [],
    };
  }

  async componentDidMount() {
    // console.log("start did mount");
    global.db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM Prescribed_med;`,
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

  renderItem = ({ item, navigation }) => {
    return (
      <MedItem med_name={item.med_name} ATC={item.ATC} dosage={time.dosage} />
    );
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.allMedicine}
          renderItem={this.renderItem}
          //TODO: cheng key
          keyExtractor={(item) => item.rid.toString()}
        />
      </SafeAreaView>
    );
  }
}
