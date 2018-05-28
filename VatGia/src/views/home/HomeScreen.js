import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text
} from 'react-native';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.navigationView}>
                    <TextInput style={styles.searchInput}
                               placeholder={'Enter keyword...'}
                               onChangeText={this.onChangeSearchInput}
                    />
                    <View style={styles.searchButton}>
                        <Text>Search</Text>
                    </View>
                </View>
                <View style={styles.bodyView}>

                </View>
            </View>
        );
    }

    onChangeSearchInput = (text) => {
        this.setState({text});
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    navigationView: {
        height: 64,
        flexDirection: 'row',
        backgroundColor: '#aaaaaa'
    },
    searchInput: {
        flex: 1,
        backgroundColor: 'red'
    },
    searchButton: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyView: {
        flex: 1,
        backgroundColor: 'yellow'
    }
});