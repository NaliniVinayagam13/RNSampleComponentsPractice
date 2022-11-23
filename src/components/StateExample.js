import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

class StateExample extends Component {
    constructor() {
        super();
        this.state = { isToggle: true };
    }
    render() {
        return (
            <View style={{ flex: 1, margin: 10 }} >
                <Text style={{ margin: 20, fontSize: 25, color: 'purple', textAlign: 'center' }}>State Example</Text>
                <Button style={{ textAlign: 'center' }} color='green'
                    onPress= {() => {this.setState({ isToggle: !this.state.isToggle });
                }}
                    title={this.state.isToggle ? 'ON' : 'OFF'} />

                <Text style={{ color: 'red', fontSize: 20, textAlign: 'center', margin: 10 }}>
                    {this.state?.isToggle ? "Button is ON now" : "Button is OFF now"}
                </Text>
            </View>
        )
    }

}

export default StateExample;