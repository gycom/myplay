import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
export default class MyplayApp extends Component {
  render() {
    return (
          <View style={{flex: 1, justifyContent: "center",alignItems:"center",color:"white"}}>
          <Text style={{color:"white"}}>Hello World!</Text>
          </View>
      );
  }
}

AppRegistry.registerComponent('Myplay',()=>MyplayApp
);
