import React from 'react'
import { View, Text, Button } from 'react-native'


export default class Tab1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'orange' }}>
        <Text>Welcome to the real app!</Text>
      </View>
    );
  }
}