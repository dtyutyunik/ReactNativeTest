import React, {Component} from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import {  } from "react-navigation";

export default class ViewPic extends React.Component{

render(){

  return(
    <View>
    <Text> ViewPic
    </Text>
    <Button title='View Pic' onPress={()=>alert('View Pic')}/>

    </View>
  )
  }
}
