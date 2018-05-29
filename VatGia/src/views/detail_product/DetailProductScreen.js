import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Colors from "../../styles/Colors";

export default class DetailProductScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainColor
    }
});