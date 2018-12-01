import React from 'react'
import { View, Text, Button } from 'react-native'

export default class Tutorial extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'orange' }}>
        <Text>This a tutorial</Text>
        <Button title='Go to Login' onPress={() => this.props.navigation.navigate('Login')}/>
        <Button title='Go to Subscribe' onPress={() => this.props.navigation.navigate('Subscribe')}/>
      </View>
    );
  }
}