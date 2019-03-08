import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ListBook extends Component {
    render() {
        <View style={styles.container}>
            <Text style={style.title}>
                ListBook
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