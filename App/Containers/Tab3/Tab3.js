import React from 'react'
import { View, Text, Button } from 'react-native'

export default class Tab3 extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'orange' }}>
        <Text>This is the Tab3!</Text>
        <Button title='Go to Details' onPress={() => this.props.navigation.navigate('Details')}/>
      </View>
    );
  }
}