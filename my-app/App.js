import React from 'react';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import Input from './src/components/Input/Input';
export default class App extends React.Component {

  state={
    placeName: '',
    places: [],
  };

  placeNameChangeHandler = (e)=>{
  this.setState({placeName: e})};

  buttonPressed = ()=>{

    this.setState(prevState => {
      return {
        places: [...prevState.places, this.state.placeName.trim()]
      };
    })
  }


  placeDeleteHandler = index =>{
    this.setState(prevState=>{
      return {
        places: prevState.places.filter((place, i)=>{
            return i !==index;
        })
      }
    })
  }

  render() {
    const placesOutput= this.state.places.map((place, i)=>{
      return <ListItem
      key={i}
      placeName={place}
      onItemPressed={() => this.placeDeleteHandler(i)}
      />
    });

    return (
      <View style={styles.container}>



      <View style={styles.inputContainer}>
      <Input
          value={this.state.placeName}
            placeholder="Enter stuff"
            onChangeText={this.placeNameChangeHandler}
      />

        <Button style={styles.bu}
        title="click Me"
        onPress={this.buttonPressed}></Button>
        </View>

          <View style={styles.listContainer}>{placesOutput}</View>

             <Text>{this.state.placeName}</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    justifyContent: 'space-between',
    width: 320,
      // width: '70%',
     borderColor: "black",
     // borderWidth: 1,
  },
  listContainer:{
    width: '100%',
  },
  bu:{
    // width:'30%',
  }
});
