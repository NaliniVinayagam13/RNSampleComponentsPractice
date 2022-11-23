import React, {Component} from 'react'
import {Button, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableOpacityBase, View} from 'react-native';

class ApplicationLifecycleExample extends Component {

    constructor(){
super();
console.log('Constructor will be called at very 1st..');
    }

    UNSAFE_componentWillMount(){
        console.log('ComponentWillMount is called after Constructor and is used for Asynchronous tasks and Network calls..');
    }

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
        console.log('Render is the main view of the screen..');
        return(
            <KeyboardAvoidingView behavior = {Platform == 'android'? 'padding':'height'} style={{flex: 1}}>
        <SafeAreaView />
        <StatusBar hidden = {false} backgroundColor = 'purple' barStyle={'default'} ></StatusBar>
        <ScrollView style = {{flex: 1}}>
        <Text style = {{ padding: 15,  backgroundColor:'purple', fontSize: 25, color:'black', textAlign: 'center'}}>ApplicationLifecycleExample</Text>
            <TextInput keyboardType='email-address' scrollEnabled = {true} style = {styles.txtInputStyle}
            placeholder = "Email id1"
            autoCapitalize='sentences'
            onChangeText={this.setEmail}
            />

            <TextInput secureTextEntry = {true} style = {styles.txtInputStyle}
            placeholder = "Password1"
            onChangeText={this.setPwd}
            />

<TextInput keyboardType='email-address' scrollEnabled = {true} style = {styles.txtInputStyle}
            placeholder = "Email id2"
            autoCapitalize='sentences'
            onChangeText={this.setEmail}
            />

            <TextInput secureTextEntry = {true} style = {styles.txtInputStyle}
            placeholder = "Password2"
            onChangeText={this.setPwd}
            />


           <TouchableOpacity activeOpacity={0.7} onPress={() => this.login(this.loginStateModel.emailId, this.loginStateModel.pwd)}>
          <View style = {{ alignItems:'center'}}>
           <Text style = { styles.buttonStyle}>
            Login</Text>
            </View>
           </TouchableOpacity>

           <TouchableHighlight  onPress={() => this.login(this.loginStateModel.emailId, this.loginStateModel.pwd)}>
          <View style = {{alignItems:'center'}}>
           <Text style = {styles.buttonStyle}>
            Touchable Highlight</Text>
            </View>
           </TouchableHighlight>

        </ScrollView>
        
           </KeyboardAvoidingView>
        )
    }

    componentDidMount(){
        console.log('ComponentDidMount is called after render and is used for network calls.. ');
    }

    UNSAFE_componentWillReceiveProps(nextProp) {
        console.log('Updating methods are used to update the value of Props or State to React Native. These methods are called automatically when a component re-renders. ComponentWillReceiveProps is one of the updating method. componentWillReceiveProps called.', nextProp);
      }

      shouldComponentUpdate(nextProp, nextState){
        console.log('shouldComponnetUpdate is called every time before the screen or parent component re-renders. We can stop the re-rendering of the screen by passing false in this method.');
      }

      UNSAFE_componentWillUpdate(nextProp, nextState) {
console.log('It is called before the re-rendering when new state or props is received for updating. It does not allow the this.setState({}) method.');
      }
componentDidUpdate(prevProp, prevState){
    console.log('ComponentDidUpdate is called after the rendering, this method is mostly used to interact with updated rendering values and execute any post-render events.');
}

componentWillUnmount() {
    console.log('componentWillUnmount is called when the component is removed from the DOM, Users can clear any running timers, stop network requests and cleaning any previously stored value in the application in this method.');
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch is a part of the error handling method. It is used to find errors between JavaScript code and handle them by passing the correct message or argument. It will help us to use any try /cache block to handle any error.');
  }
  

}
    const styles = StyleSheet.create({
     txtInputStyle : {
    borderColor: 'brown', borderWidth:2, margin: 10, padding: 10, 
    fontSize: 14, color: 'green', 
     textAlignVertical: 'center'
     },

     buttonStyle: {
        margin:10, fontSize: 14, fontWeight:'bold', 
        color: 'black',  backgroundColor:'purple', 
        padding:10, textAlign: 'center'
     }
     });


export default ApplicationLifecycleExample;