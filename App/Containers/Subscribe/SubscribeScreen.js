import React from 'react'
import { View, Text, Button } from 'react-native'

export default class Subscribe extends React.Component {
  static navigationOptions = {
    title: 'Subscribe'
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'orange' }}>
        <Text>Subscribe screen</Text>
        <Button title='Subscribe!' onPress={() => this.props.navigation.navigate('App')}/>
      </View>
    );
  }
}