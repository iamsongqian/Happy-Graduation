/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { DeviceEventEmitter,StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
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
        { columnName: '体育', requestCode: 'T1348647909107' },
        { columnName: '游戏', requestCode: 'T1348648517839' },
        { columnName: '职场', requestCode: 'T1348649580692' },
        { columnName: '育儿', requestCode: 'T1348654151579' },
        { columnName: '娱乐', requestCode: 'T1348649079062' },
        { columnName: '健身', requestCode: 'T1348649079062' },
        { columnName: '汽车', requestCode: 'T1348649079062' },
        { columnName: '财经', requestCode: 'T1348649079062' },
        { columnName: '建康', requestCode: 'T1348649079062' },
      ],
      tabIndexName:''
    })
    this.deEmitter = DeviceEventEmitter.addListener('isFollow', (has) => {
      this.setState({ list: has })
    })
  }
  componentWillUnmount() {
    this.deEmitter.remove();
  }
  render() {
    let prev;
    let {list,tabIndexName} =this.state;
    return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor='#FA7298' />
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />}
          tabBarBackgroundColor='#FA7298'
          tabBarActiveTextColor='#FFFFFF'
          tabBarUnderlineStyle={{ backgroundColor: '#FFFFFF', height: 2 }}
          onChangeTab={(obj) => {
            prev = obj.i
            if(prev===0||prev===10){
              console.log(tabIndexName)
              return;
            }
            this.setState({tabIndexName:list[prev-1].columnName})
          }}
        >
          <HomeFlatListView
            tabLabel='推荐'
            requestCode='T1348649079062'
            navigation={this.props.navigation}
            tabName={tabIndexName}
          />
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
          <HomeFlatListView
            tabLabel='其他'
            requestCode='T1348649079062'
            navigation={this.props.navigation}
          />
        </ScrollableTabView>
      </View>
    );
  }
}