import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class AddBook extends Component {
    render() {
        <View style={styles.container}>
            <Text style={style.title}>
                AddBook
            </Text>
        </View>
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: '10',
    }
});