import React, {Component} from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

export default function Form(props){
  return(
  <TextInput
  {...props}
  style={styles.input}
  />
  )
}

const styles = StyleSheet.create({

  input:{
    borderColor: 'black',
    borderWidth: 2,

    width: '100%',
    margin: 8,
    padding: 5,
    backgroundColor: 'gray'
    // backgroundColor: 'yellow',
  },

});
