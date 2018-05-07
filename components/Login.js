/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions,Button } from 'react-native';
import ScrollableTabView ,{DefaultTabBar} from 'react-native-scrollable-tab-view'

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FA7298',
    paddingVertical:8
  },
});
export default class Login extends Component {
  static navigationOptions = {
    title: '登陆',
    headerStyle: {
      backgroundColor: '#FA7298',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      alignSelf: 'center',
      fontSize:15,
      fontWeight: '100',
    },
    headerRight: (
      <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
    ),
  };

  render() {
    return (
      <View style={{flex:1}}>
        <Text>123</Text>
      </View>
    );
  }
}