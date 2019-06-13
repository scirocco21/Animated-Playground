import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import Ball from './src/Ball.js'

export default class App extends Component {
  render(){ 
    return (
    <View style={styles.container}>
      <Ball/>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

 