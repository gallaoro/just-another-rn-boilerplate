import React from 'react'
import { View, Text } from 'react-native'


export default class Details extends React.Component {
  static navigationOptions = {
    title: 'Details?!'
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'orange' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}