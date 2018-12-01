/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, } from 'react-native';
import StatusBar from './App/Components/StatusBar/StatusBar';
import Navigator from './App/Navigator/Navigator';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <StatusBar backgroundColor="#000" barStyle="light-content" /> */}
        <Navigator />
      </View>
    );
  }
}