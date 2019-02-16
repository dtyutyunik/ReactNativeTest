import React, {Component} from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import {  } from "react-navigation";

export default class TakePic extends React.Component{

render(){

  return(
    <View>
    <Text> TakePic
    </Text>
    <Button title='TAke Pic' onPress={()=>alert('Take Pic')}/>

    </View>
  )
  }
}
