
import React, { Component } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, Modal, Button } from 'react-native'
import { Button } from 'react-native-paper';

export default class ModalComponentExample extends Component {

  state = {
    isShown: false,
  }

  render() {
    return (

      <SafeAreaView style={{ flex: 1 }}>

        <Modal animationType='slide'
          transparent={false}
          visible={this.state.isShown}
          onRequestClose={() => { console.log('Modal has closed') }}>

          <View style={styles.modal}>
            <Text> Modal is Open Now</Text>
            <Button title='Click to close the modal'
            onPress={() => {this.setState({isShown: !this.state.isShown})}}></Button>
          </View>
        </Modal>

<Button title='Click here to Open the Modal'
onPress={() => this.setState({isShown: true})}></Button>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
  },

  text: {
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    margin: 25,
    paddingBottom: 15,
    backgroundColor: "#000000c0",
    padding: 5

  },

  imageStyle: {
    height: 100, width: 100,
    margin: 30

  }

});