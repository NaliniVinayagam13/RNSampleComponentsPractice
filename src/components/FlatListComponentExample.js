import React, { Component } from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, SafeAreaView, View, Alert } from 'react-native'
class FlatlistComponentExample extends Component {

  renderHeader = () => {
    var header = (
      <View style={{ backgroundColor: 'orange', padding: 15 }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
          Courses Offered</Text>
      </View>
    );
    return header
  };

  renderSeparator = () => {
    return (
      <View style={{ height: 1, backgroundColor: "black" }} />
    );
  };

  getListViewItem = (item) => {
    Alert.alert('Clicked item: ' + item.key)
  }

  render() {
      
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <Text style={styles.headertext}>
          FlatList Example
        </Text>

        <FlatList
          data={[{ key: 'C1' }, { key: 'c++2' }, { key: 'Java3' }, { key: 'kotlin4' },
          { key: 'ReactNative5' }, { key: 'php6' }, { key: 'MachineLanguage7' },
          { key: 'C8' }, { key: 'c++9' }, { key: 'Java10' }, { key: 'kotlin11' },
          { key: 'ReactNative12' }, { key: 'php13' }, { key: 'MachineLanguage14' },
          { key: 'C15' }, { key: 'c++16' }, { key: 'Java17' }, { key: 'kotlin18' },
          { key: 'ReactNative19' }, { key: 'php20' }, { key: 'MachineLanguage21' }]}
          renderItem={({ item }) =>

            <View style={{ flexDirection: 'row', margin:10, alignItems: 'center' }}>

              <Image style = {{marginLeft: 10, marginRight: 10}}
              source={require('../assets/images/gallery_icon.png')} />

              <Text style={styles.text}
                onPress={this.getListViewItem.bind(this, item)}
              >
                {item.key}
              </Text>
            </View>
          }
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
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
    fontSize: 18,
    textAlign: 'center',
    color: 'purple',
    padding: 10,
    alignContent: 'center'
  },

  headertext: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    padding: 20,
    backgroundColor: 'purple'
  },

  imageStyle: {
    height: 100, width: 100,
    margin: 30
  }

});

export default FlatlistComponentExample;