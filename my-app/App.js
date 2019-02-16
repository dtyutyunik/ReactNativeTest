import React from "react";
import { View, Text, Button } from "react-native";
import {createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

import AuthScreen from './src/components/AuthScreen/AuthScreen.js';
import Login from './src/components/Login/Login';
import Register from './src/components/Register/Register';
import Welcome from './src/components/Welcome/Welcome';

import TakePic from './src/components/Camera/TakePic.js';
import ViewPic from './src/components/Camera/ViewPic.js'

// <Button title="Go to AuthScreen" onPress={()=>  navigation.navigate('AuthScreen',{
//   itemId: Math.floor(Math.random()*10)
// })}/>


export default class App extends React.Component {
  render(){
    return < AppContainer/>;
  }
}

class HomeScreen extends React.Component {

  render() {

    const { navigation } = this.props;


    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Welcome to Landing Page</Text>

        <Button title="Register" onPress={()=>navigation.navigate('Register')}/>
        <Button title="Login" onPress={()=>navigation.navigate('Login')}/>
        



      </View>
    );
  }
}





const CameraBottomNavigator = createBottomTabNavigator(
  {
    Camera: {
      screen: TakePic,
      title: 'Take a Pic'
    },
    ViewPic: {
      screen: ViewPic,
      title: 'View Pics',
    },
  },
  //   {
  //     order: ['Camera', 'ViewPic'],
  // }
);

// const AppNavigator = createBottomTabNavigator(
const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    AuthScreen: {
      screen:AuthScreen,
      navigationOptions: {
          title: 'Auth Screen',
          type: 'didBlur'
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
          title: 'Log In',
          type: 'didBlur'
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
          title: 'Register'
      },
    },

  Welcome: {
    screen: Welcome,
    navigationOptions: {
        title: 'Welcome'
    },
  },
},
    {
        initialRouteName: 'Home'
      }

);

const AppNavigator = createSwitchNavigator({
  StackNavigator: StackNavigator,
  Camera: CameraBottomNavigator

});




const AppContainer = createAppContainer(AppNavigator);
