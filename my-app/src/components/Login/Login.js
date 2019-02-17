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
      pw2: '',
      isPwEqual: 'no'

    }
  }

  handleText = (e) => {
    // console.log([key])
    console.log(e)
    console.log([e])
    this.handlePwCheck();
  };

handlePwCheck= ()=>{
  if(this.state.pw1===this.state.pw2 && this.state.pw1.length>0){
    this.setState({
      isPwEqual: 'yes'
    });

  }
  else{
    this.setState({
      isPwEqual: 'no'
    })
  }

}

render(){


  return(
    <View style={styles.container}>
<Image style={styles.image} source={require('../../assets/camBack1.jpg')}/>
<Text style={styles.textHeading}>Log in</Text>
<TouchableOpacity style={styles.loginForm}>
<Form
placeholder="enter your email address"
value={this.state.email}
type="email"
onChangeText={(email)=>this.setState({email})}/>
<Form placeholder="enter your pw"
name='pw1'
value={this.state.pw1}
onChangeText={(pw1)=>this.setState({pw1})}/>
<Form placeholder="enter your pw again"
name='pw2'
value={this.state.pw2}
onChangeText={(pw2)=>this.setState({pw2})}/>

</TouchableOpacity>

    <Button title="Submit Login" onPress={this.handlePwCheck}/>
    <Button title="TAke me to camera stuff" onPress={()=>this.props.navigation.navigate('Camera')}/>
    <Text style={styles.text}>{this.state.email}</Text>
    <Text style={styles.text}>{this.state.pw1}</Text>
    <Text style={styles.text}>{this.state.pw2}</Text>
    <Text>{this.state.isPwEqual}</Text>
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
text:{
    color: 'white',
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
