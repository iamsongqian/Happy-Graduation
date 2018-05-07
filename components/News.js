/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
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
const list =['推荐 ','军事','时政','娱乐','ACG']
const length = list.length
export default class News extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor='#FA7298'/>
        <ScrollableTabView
          renderTabBar={() => <DefaultTabBar/>}
          tabBarBackgroundColor='#FA7298'
          tabBarActiveTextColor='#FFFFFF'
          tabBarUnderlineStyle={{backgroundColor:'#FFFFFF',width:width/length/2,marginLeft:width/length/4}}
        >
          {
            list.map((item,i)=>
              <Text key={i} tabLabel={item}>{item}</Text>
            )
          }
        </ScrollableTabView>
      </View>
    );
  }
}