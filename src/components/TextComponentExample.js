import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native';

class TextComponentExample extends Component {
    render() {
        return(
       <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'blue', margin: 10}} >
            <Text numberOfLines={2} ellipsizeMode='tail' style = {{color: 'red', fontSize: 20, textAlign: 'center', margin: 10}}>
            Hi.. This is a sample text testing now for ellipsis at max 2 lines!!
            Hi.. This is a sample text testing now for ellipsis at max 2 lines!!
            Hi.. This is a sample text testing now for ellipsis at max 2 lines!!
            </Text>
        </View>
        )
    }
}

// const styles = StyleSheet.create({
//     container: {flex: 1, justifyContent: 'center', backgroundColor: 'orange'},
// })

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center'
//     },
//   })
export default TextComponentExample;