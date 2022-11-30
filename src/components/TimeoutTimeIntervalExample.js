
import React, { Component } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, SafeAreaView } from 'react-native'
export default class TimeoutTimeIntervalExample extends Component {

  render() {
    let Join = setTimeout(function acknowledgement() {
      alert('Congratulations, You have Done -- A');
    }, 3000);

    let Join2 = setTimeout(() => {
      alert('Congratulations, You have Done -- B');
    }, 5000);

    function acknowledgement() {
      alert('Congratulations, You have Done -- C');
    }

    let Join3 = setTimeout(acknowledgement, 7000);

    var isDisplayed = false;
    var counter = 0;
    function showOrHideText() {
      counter++;
      isDisplayed = !isDisplayed;
      alert('Congratulations, You have Done -- '+counter);

      if(counter == 10){
        clearTimeout(showOrHide);
      }
    }

    const showOrHide = setInterval(showOrHideText, 2000);

    return (

      { Join },

      { Join2 },

      { Join3 },

      {showOrHide},

      <SafeAreaView style={{ flex: 1 }}>

        <ImageBackground source={{ uri: 'https://reactnative-examples.com/wp-content/uploads/2022/03/winter-scaled.jpg' }}
          style={styles.backgroundImage}>
          <Text style={styles.text}>
            Example of ImageBackground and Image in React Native
          </Text>
          <Image
            style={{ height: 100, width: 100,
              margin: 30, display: isDisplayed?'none': 'flex'}}
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