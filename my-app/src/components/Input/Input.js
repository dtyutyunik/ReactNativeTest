import React from 'react';

import {StyleSheet, Text, View,TextInput } from 'react-native';

export default function Input(props){
  return(


  <View>
  <TextInput
  value={props.value}
  placeholder={props.placeholder}
  onChangeText={props.onChangeText}
  />
  </View>
)
}
