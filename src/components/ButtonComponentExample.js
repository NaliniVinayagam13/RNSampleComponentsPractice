import React, {Component} from 'react'
import {Button, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableOpacityBase, View} from 'react-native';

class ButtonComponentExample extends Component {

    loginStateModel = {
        emailId : '',
        pwd: ''
    }

    setEmail = (text) => {
        this.loginStateModel.emailId = text
    }

    setPwd = (text) => {
        this.loginStateModel.pwd= text
    }

    login = (emailId, pwd) => {
        alert('MailId: '+emailId+' -- Password: '+pwd)
    }
    render() {
        return(
       <View style={{flex: 1, margin: 10}} >
        <Text style = {{margin: 20, fontSize: 25, color:'purple', textAlign: 'center'}}>Button Example with StyleSheet</Text>

            <TextInput multiline = {true} keyboardType='email-address' scrollEnabled = {true} numberOfLines = {3} style = {{ display: 'none', height:75, borderColor: 'orange', borderWidth:2, margin: 10, padding: 10, fontSize: 14, color: 'green', alignContent: 'flex-start', textAlignVertical: 'top'}}
            placeholder = "Enter your text here.."
            onChangeText={(enteredText) => this.setState({enteredText})}
            />

            <Text style = {{ color: 'red', fontSize: 20, textAlign: 'center', margin: 10, display: 'none'}}>
            {this.state?.enteredText}  
            </Text>

            <TextInput keyboardType='email-address' scrollEnabled = {true} style = {styles.txtInputSTyle}
            placeholder = "Email id"
            autoCapitalize='sentences'
            onChangeText={this.setEmail}
            />

            <TextInput secureTextEntry = {true} style = {this.styles.txtInputSTyle}
            placeholder = "Password"
            onChangeText={this.setPwd}
            />

            {/* <Button onPress= { () => this.login(this.loginStateModel.emailId, this.loginStateModel.pwd)} title='Login' color="#654321"/> */}
           
           <TouchableOpacity activeOpacity={0.7} onPress={() => this.login(this.loginStateModel.emailId, this.loginStateModel.pwd)}>
          <View style = {{ alignItems:'center'}}>
           <Text style = { styles.buttonStyle}>
            Login</Text>
            </View>
           </TouchableOpacity>

           <TouchableHighlight  onPress={() => this.login(this.loginStateModel.emailId, this.loginStateModel.pwd)}>
          <View style = {{  alignItems:'center'}}>
           <Text style = {this.styles.buttonStyle}>
            Touchable Highlight</Text>
            </View>
           </TouchableHighlight>
           
        </View>
        )
    }

     styles = StyleSheet.create({
     txtInputSTyle : {
    borderColor: 'brown', borderWidth:2, margin: 10, padding: 10, 
    fontSize: 14, color: 'green', 
    alignContent: 'flex-start', textAlignVertical: 'top'
     },

     buttonStyle: {
        margin:10, fontSize: 14, fontWeight:'bold', 
        color: 'black',  backgroundColor:'purple', 
        padding:10, textAlign: 'center'
     }
     });
}

export default ButtonComponentExample;