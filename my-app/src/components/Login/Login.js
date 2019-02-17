import React, {Component} from "react";
import { TouchableOpacity, Image,View, Text, Button, StyleSheet, TextInput } from "react-native";
import { } from "react-navigation";
import { Input,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Form from '../Form/Form';
//

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      email: '',
      pw1: '',
      pw2: ''

    }
  }

  handleText = (e) => {
    alert(e.target)
    this.setState({
      // [name]: value
    })
  };

render(){


  return(
    <View style={styles.container}>
<Image style={styles.image} source={require('../../assets/camBack1.jpg')}/>
<Text style={styles.textHeading}>Log in</Text>
<TouchableOpacity style={styles.loginForm}>
<Form
placeholder="enter your email address"
name='email'
value={this.state.email}
onChangeText={this.handleText}/>
<Form placeholder="enter your pw"
name='pw1'
value={this.state.pw1}
onChangeText={this.handleText}/>
<Form placeholder="enter your pw again"
name='pw2'
value={this.state.pw2}
onChangeText={this.handleText}/>

</TouchableOpacity>

    <Button title="Switch to Login" onPress={()=>alert('login pressed')}/>
    <Button title="TAke me to camera stuff" onPress={()=>this.props.navigation.navigate('Camera')}/>
  <Text>  {this.state.name}</Text>
  <Text>  {this.state.pw1}</Text>
    <Text>{this.state.pw2}</Text>
    </View>
  )
  }

}

const styles = StyleSheet.create({
  loginForm:{

    borderColor: 'black',
    backgroundColor: 'white',
    // borderWidth: 2,
    // borderWidth: 0.5,
    // backgroundColor: 'red',
    width: '80%',
  },
  textHeading:{
    fontSize: 24,
    color: 'black',

  },
  image:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',


  },
  container:{
    flex: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    borderWidth: 0.5,
  },
});
