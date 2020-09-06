import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Platform } from "react-native";
import { Container, Header, Body, CheckBox, Title, Card, CardItem, Left, Right, Icon, Content, Thumbnail, Grid, Col, Text, Button, Subtitle } from "native-base";
import GlobalStyles from "../Style";

export default class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={GlobalStyles.containerStyle}>
                <Card>
                    <TouchableOpacity onPress={this.props.onPress}>
                        <CardItem>
                        <Left>
                            <View style={{ alignItems: "flex-start" }}>
                                <Title>{this.props.name}</Title>
                                <Subtitle>{this.props.age}</Subtitle>
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
