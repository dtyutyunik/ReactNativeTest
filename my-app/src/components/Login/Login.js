import React, {Component} from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { } from "react-navigation";

export default class Login extends React.Component{

render(){

  return(
    <View>
    <Text> Login
    </Text>
    <Button title='Login' onPress={()=>alert('login pressed')}/>
    <Button title="TAke me to camera stuff" onPress={()=>this.props.navigation.navigate('Camera')}/>
    </View>
  )
  }
}
