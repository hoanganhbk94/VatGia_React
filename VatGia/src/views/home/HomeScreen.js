import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import Common from "../../utils/Common";
import Colors from "../../styles/Colors";
import MockData from "../../network/MockData";

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
                               placeholder={'Bạn muốn tìm kiếm sản phẩm gì?'}
                               onChangeText={this._onChangeSearchInput}
                    />
                    <TouchableOpacity
                        style={styles.searchButton}
                        onPress={this._onPressSearchButton}
                    >
                        <Image source={require('../../assets/images/icn_search.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.bodyView}>
                    <FlatList
                        data={MockData.arrProducts}
                        renderItem={this._renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        );
    }

    _onChangeSearchInput = (text) => {
        this.setState({text});
    };

    _onPressSearchButton = () => {
        Common.log("abc");
    };

    _renderItem = ({item}) => {
        return <Text>{item.name}</Text>
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navigationView: {
        height: 64,
        flexDirection: 'row'
    },
    searchInput: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        borderColor: 'blue',
        borderRadius: 4
    },
    searchButton: {
        width: 64,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.mainColor
    },
    bodyView: {
        flex: 1,
        backgroundColor: 'yellow'
    }
});