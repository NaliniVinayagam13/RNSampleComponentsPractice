import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

class PropsClassComponentExample extends Component {

    render() {
        return (
            <View style={{alignItems: 'center' }} >
                <Text style={styles.headingStyle}>Props Example</Text>


                <Text style={styles.contentStyle}>
                    Hello.. {this.props.name}!
                </Text>
            </View>
        );
    }
}

class PropsParentClass extends Component {
    render() {
        return (
            <View>
                <PropsClassComponentExample name='This is a Sample 1' />
                <PropsClassComponentExample name='This is a Sample 2' />
                <PropsClassComponentExample name='This is a Sample 3' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headingStyle: {
        margin: 20,
        fontSize: 25,
        color: 'purple',
        textAlign: 'center'
    },

    contentStyle: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
 
export default PropsParentClass;