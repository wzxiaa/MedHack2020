import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Platform } from "react-native";
import { Avatar } from "react-native-elements";
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
        <Card style={{ flex: 1, width: 390 }}>
          <TouchableOpacity onPress={this.props.onPress}>
            <CardItem>
              <Left>
                <View style={{ alignItems: "flex-start" }}>
                  {/* <Avatar
                    size="medium"
                    icon={{name: 'user'}}
                    activeOpacity={0.7}
                  /> */}
                  <Title>{this.props.name}</Title>
                  <Subtitle>{this.props.emergence_contact}</Subtitle>
                </View>
              </Left>
              <Right>
                <View style={{ alignItems: "flex-end" }}>
                  <Subtitle>hello</Subtitle>
                </View>
              </Right>
            </CardItem>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}
