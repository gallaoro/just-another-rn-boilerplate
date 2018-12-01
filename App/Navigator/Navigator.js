import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";

// import yours screens
import LaunchScreen from '../Containers/Launch/LaunchScreen'

import Tutorial from '../Containers/Tutorial/TutorailScreen'
import LoginScreen from '../Containers/Login/LoginScreen'
import SubscribeScreen from '../Containers/Subscribe/SubscribeScreen'

import Tab1 from '../Containers/Tab1/Tab1'
import Tab2 from '../Containers/Tab2/Tab2'
import Tab3 from '../Containers/Tab3/Tab3'

import Details from '../Containers/Details/DetailsScreen'

// style the header with a stylish violet
const headerStyleViolet = ({ navigation }) => ({
  headerTitleStyle: { color: 'white' },
  headerStyle: {
    backgroundColor: 'violet',
  },
  headerTintColor: 'white',
})

// style the header with a christmas red
const headerStyleRed = ({ navigation }) => ({
  headerTitleStyle: { color: 'white' },
  headerStyle: { backgroundColor: 'red' },
  headerTintColor: 'white'
})

// style the header with crazy colors
const headerStyleCrazy = ({ navigation }) => ({
  headerTitleStyle: { color: '#e45f92' },
  headerStyle: { backgroundColor: '#e3f134' },
  headerTintColor: '#12ff32'
})


const AppNavigator = createSwitchNavigator({
  Launch: {
    screen: LaunchScreen
  },
  Auth: {
    screen: createStackNavigator({
      Tutorial: Tutorial,
      Login: {
        screen: LoginScreen,
        navigationOptions: headerStyleViolet
      },
      Subscribe: {
        screen: SubscribeScreen,
        navigationOptions: headerStyleRed
      }
    },
    {
      initialRouteName: 'Tutorial',
      headerStyle: {
        backgroundColor: 'violet'
      },
      headerLayoutPreset: 'center' // to center the title text (Android) default is 'left'
    })
  },
  App: {
    screen: createBottomTabNavigator({
      Tab1: Tab1,
      Tab2: Tab2,
      Tab3: createStackNavigator({
        Tab3: Tab3,
        Details: {
          screen: Details,
          navigationOptions: headerStyleCrazy
        }
      })
    },{
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    })
  }
});

export default createAppContainer(AppNavigator);