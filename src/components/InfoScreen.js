import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class InfoScreen extends Component {
   
    moveToHomeScreenListener = () => {
        this.props.navigation.goBack()
    };
    moveToAboutScreenListener = () => {
        this.props.navigation.navigate("AboutScreen")
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ margin: 25, color:'black', fontWeight: 'bold' }}>Info Screen</Text>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ margin: 10, width: 150 }}
                        onPress={this.moveToAboutScreenListener}>
                        <Text style={ styles.buttonStyleForText}>Move to About Screen</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ margin: 10, width: 150 }}
                        onPress={this.moveToHomeScreenListener}>
                        <Text style = {styles.buttonStyleForText}>Move Back to Home Screen</Text>
                    </TouchableOpacity>

                </View>

            </View>)
    }
}

const styles = StyleSheet.create({
    buttonStyleForText: {
        backgroundColor:'blue',
        color:'white',
        textAlign:'center',
        padding: 10
    }
})

export default InfoScreen