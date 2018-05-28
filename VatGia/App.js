import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>Hello world!!!</Text>
          <View style={styles.view}>

            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    view: {
      height: 200,
        width: Dimensions.get('window').width,
        backgroundColor: '#741e19'
    }
});
