import React, {Component} from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native';

class TextInputComponentExample extends Component {
    render() {
        return(
       <View style={{flex: 1, margin: 10}} >
        <Text style = {{margin: 20, fontSize: 25, color:'purple', textAlign: 'center'}}>TextInput Example</Text>

            <TextInput multiline = {true} keyboardType='email-address' scrollEnabled = {true} numberOfLines = {3} style = {{height:75, borderColor: 'orange', borderWidth:2, margin: 10, padding: 10, fontSize: 14, color: 'green', alignContent: 'flex-start', textAlignVertical: 'top'}}
            placeholder = "Enter your text here.."
            onChangeText={(enteredText) => this.setState({enteredText})}
            />

            <Text style = {{color: 'red', fontSize: 20, textAlign: 'center', margin: 10}}>
            {this.state?.enteredText}  
            </Text>

            <Text style = {{margin: 20, fontSize: 20, color:'purple', textAlign: 'center'}}>Credentials</Text>

            <TextInput keyboardType='email-address' scrollEnabled = {true} style = {{borderColor: 'green', borderWidth:2, margin: 10, padding: 10, fontSize: 14, color: 'green', alignContent: 'flex-start', textAlignVertical: 'top'}}
            placeholder = "Email id"
            onChangeText={(tIptEmail) => this.setState({tIptEmail})}
            />

<           TextInput secureTextEntry = {true} style = {{borderColor: 'green', borderWidth:2, margin: 10, padding: 10, fontSize: 14, color: 'green', alignContent: 'flex-start', textAlignVertical: 'top'}}
            placeholder = "Password"
            onChangeText={(tIptPwd) => this.setState({tIptPwd})}
            />

            <Text style = {{margin: 10, fontSize: 14, color: 'blue', textAlign: 'left'}}>
                Your Credentials are {'\n\n'}Email Id: {this.state?.tIptEmail} {'\n'}Password: {this.state?.tIptPwd}
            </Text>
        </View>
        )
    }
}

export default TextInputComponentExample;