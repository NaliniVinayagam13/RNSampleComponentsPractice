import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import InfoScreen from "./InfoScreen";

export default class Aboutscreen extends Component {

  popToFirstScreenListener = () => {
    this.props.navigation.popToTop()
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ margin: 25, color: 'black', fontWeight: 'bold' }}>About Screen</Text>

        <View style={{ flexDirection: 'row' }}>
          <Button style = {{textAlign: 'center'}}
          
          // title={"Go to About <br/> Screen Again".split("<br/>").join("\n")}
          title={"Go to About \n Screen Again"}
            onPress={() => this.props.navigation.push('AboutScreen')}></Button>

          <TouchableOpacity style={{ margin: 10, width: 150 }}
            onPress={this.popToFirstScreenListener}>
            <Text style = {styles?.buttonStyleForText}>Move to First Screen..</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyleForText: {
    backgroundColor:'blue',
    color: 'white',
    padding: 10,
    textAlign:'center',
    
  }
})



