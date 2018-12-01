import React from 'react'
import { View, Text, Button } from 'react-native'

export default class Tab2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'orange' }}>
        <Text>This is the Tab2!</Text>
        <Button title='Go to Tab3 programmatically' onPress={() => this.props.navigation.navigate('Tab3')}/>
      </View>
    );
  }
}