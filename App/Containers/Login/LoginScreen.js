import React from 'react'
import { View, Text, Button } from 'react-native'

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
    headerLayoutPreset: 'center'
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'orange' }}>
        <Text>Login screen</Text>
        <Button title='Login!' onPress={() => this.props.navigation.navigate('App')}/>
      </View>
    );
  }
}