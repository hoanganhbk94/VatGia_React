import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import Colors from "../../styles/Colors";

export default class FlatProductItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableOpacity
                style={styles.container}
                onPress={this._onPress}
            >
                <Text>{this.props.item.name}</Text>
            </TouchableOpacity>
        );
    }

    _onPress = () => {
        this.props.onPressItem(this.props.item)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainColor
    }
});