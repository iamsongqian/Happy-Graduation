/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from 'react-native';
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

export default class News extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor='#FA7298'/>
        <ScrollableTabView
          renderTabBar={() => <DefaultTabBar/>}
          tabBarBackgroundColor='#FA7298'
          tabBarActiveTextColor='#FFFFFF'
          tabBarUnderlineStyle={{backgroundColor:'#FFFFFF',width:width/12,marginLeft:width/24}}
        >
          <Text tabLabel='1'>1</Text>
          <Text tabLabel='2'>2</Text>
          <Text tabLabel='3'>3</Text>
          <Text tabLabel='4'>4</Text>
          <Text tabLabel='5'>5</Text>
          <Text tabLabel='6'>6</Text>
        </ScrollableTabView>
      </View>
    );
  }
}