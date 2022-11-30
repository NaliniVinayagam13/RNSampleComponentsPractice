
import React, { Component } from 'react';
import { SafeAreaView, Image, ImageBackground, StyleSheet, Text, Modal, Button, View } from 'react-native'


export default class ModalComponentExample extends Component {

  state = {
    isShown: false,
  }

  render() {
    return (

      <View style={styles.container}>

        <Modal animationType={"slide"}
          transparent={false}
          visible={this.state.isShown}
          onRequestClose={() => {console.log('Modal has closed')}}>

          <View style={styles.modal}>
            <Text style={styles.text}> Modal is Open Now</Text>
            <Button title="Click to close the modal"
              onPress={() => { this.setState({ isShown: !this.state.isShown }) }}></Button>
          </View>
        </Modal>

        <Button title="Click here to Open the Modal"
          onPress={() => this.setState({ isShown: true })}/>
      </View>
    );
  }
};

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     alignItems: 'center',
//   },

//   text: {
//     fontSize: 28,
//     textAlign: 'center',
//     color: 'white',
//     fontWeight: 'bold',
//     margin: 25,
//     paddingBottom: 15,
//     backgroundColor: "#000000c0",
//     padding: 5

//   },

//   imageStyle: {
//     height: 100, width: 100,
//     margin: 30

//   }

// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00BCD4",
    height: 300,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,

  },
  text: {
    color: '#3f2949',
    marginTop: 10
  }
});  