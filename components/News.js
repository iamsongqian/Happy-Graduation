/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import ScrollableTabView ,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'
import HomeFlatListView from './HomeFlatListView'
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
  constructor(props){
    super(props)
    this.state={
      list:[ { columnName: '头条', requestCode: 'T1348647909107' }]
    }
  }
  componentDidMount(){
    this.setState({
      list :[
        { columnName: '头条', requestCode: 'T1348647909107' },
        { columnName: '娱乐', requestCode: 'T1348648517839' },
        { columnName: '科技', requestCode: 'T1348649580692' },
        { columnName: '游戏', requestCode: 'T1348654151579' },
        { columnName: '军事', requestCode: 'T1348649079062' },
        { columnName: '财经', requestCode: 'T1348649079062' },
        { columnName: '体育', requestCode: 'T1348649079062' },
        { columnName: '旅游', requestCode: 'T1348649079062' },
        { columnName: '教育', requestCode: 'T1348649079062' },
        { columnName: '历史', requestCode: 'T1348649079062' },
      ]
    })
  }
  render() {
    const {list} =this.state
    const length =list.length
    return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor='#FA7298'/>
        <ScrollableTabView
          renderTabBar={() => <ScrollableTabBar />}
          tabBarBackgroundColor='#FA7298'
          tabBarActiveTextColor='#FFFFFF'
          tabBarUnderlineStyle={{backgroundColor:'#FFFFFF',width:width/length/2,marginLeft:width/length/4}}
        >
          {
            list.map(item =>
              <HomeFlatListView
                key={item.columnName}
                tabLabel={item.columnName}
                requestCode={item.requestCode}
                navigation={this.props.navigation}
              />
            )
          }
        </ScrollableTabView>
      </View>
    );
  }
}