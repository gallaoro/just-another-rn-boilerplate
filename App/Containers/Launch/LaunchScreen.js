import React from 'react'
import { View, Text, Image } from 'react-native'
import { Images } from '../../Themes'

export default class LaunchScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Auth')
    }, 2000);  // navigate to Auth after 2 sec
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'orange' }}>
        <Image source={Images.launchLogo}/>
        <Text>Your app name</Text>
      </View>
    );
  }
}