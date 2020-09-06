import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Platform } from "react-native";
import {
  Container,
  Header,
  Body,
  CheckBox,
  Title,
  Card,
  CardItem,
  Left,
  Right,
  Icon,
  Content,
  Thumbnail,
  Grid,
  Col,
  Text,
  Button,
  Subtitle,
} from "native-base";
import GlobalStyles from "../Style";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={GlobalStyles.containerStyle}>
        <Card style={{ flex: 1, width: 360 }}>
          <TouchableOpacity onPress={this.props.onPress}>
            <CardItem>
              <Left>
                <View style={{ alignItems: "flex-start" }}>
                  <Title>{this.props.med_name}</Title>
                  
                </View>
              </Left>
              <Right>
                <View style={{ alignItems: "flex-end" }}>
                  <Subtitle>Dosage: {this.props.dosage}</Subtitle>
                  <Subtitle>ATC: {this.props.ATC}</Subtitle>
                </View>
              </Right>
            </CardItem>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}
