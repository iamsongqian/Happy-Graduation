/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, Image } from 'react-native';
import Header from '../NewsDetailHeader'

const {height, width} = Dimensions.get('window');

export default class Point extends Component {
  constructor(props){
    super(props)
    this.state={
      arr:''
    }
  }
  componentDidMount(){
    let a = moment().format('YYYY MMMM Do')
    let arr = a.split(' ')
    for(let i=0;i<MONTH.length;i++){
      if(arr[1] === MONTH[i]){
        arr[0]=arr[0]+'/'
        arr[2]=arr[2].replace(/th/,' ')
        arr.splice(1,1,CNMONTH[i])
      }
    }
    this.setState({arr})
  }
  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} text='我的积分' />
        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginLeft: 15 }}>{this.state.arr}</Text>
          <Text style={{ marginLeft: 200 }}>积分+30</Text>
        </View>
      </View>
    );
  }
}