import React, {Component} from "react";
import { View, Text, Button ,StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import Login from './Login/Login.js';
// import SingUp from './SingUp/SignUp.js';


export default class AuthScreen extends Component{
render(){
const {navigation}=this.props;
const itemId= navigation.getParam('itemId', 'No-id')
  return(
    <View style={styles.container}>
    <Text> Register</Text>
    <Text> itemId: {itemId}</Text>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'black',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    borderRadius: 4,
    borderWidth: 0.5,

  }
});
