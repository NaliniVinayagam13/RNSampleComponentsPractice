
import React, { Component } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, SafeAreaView } from 'react-native'
export default class ImageComponentExample extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <ImageBackground source={{ uri: 'https://reactnative-examples.com/wp-content/uploads/2022/03/winter-scaled.jpg' }}
          style={styles.backgroundImage}>
          <Text style={styles.text}>
            Example of ImageBackground and Image in React Native
          </Text>
          <Image
            style={styles.imageStyle}
            source={{ uri: 'https://www.positronx.io/wp-content/uploads/2020/02/react-native-150x150-1.jpg' }}
          />

          <Image 
        style={styles.imageStyle}
          source={require('../assets/images/optisol_logo.png')} />
        </ImageBackground>

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