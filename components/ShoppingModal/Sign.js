/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {DeviceEventEmitter,ToastAndroid, StyleSheet, Text, View, StatusBar, TouchableWithoutFeedback, Dimensions, Image } from 'react-native';
import moment from 'moment'
import Header from '../NewsDetailHeader'
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  loginButton: {
    width: 140,
    height: 40,
    backgroundColor: '#FA7298',
    borderRadius: 3,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  login: {
    color: '#FFFFFF'
  },
  record:{
    marginTop: 10,
    borderColor: '#E0E0E0',
    borderTopWidth: 0.5,
    width:width
  }
});
const MONTH = ['Jan','Feb','Mar','Apr','May','Jun' ,'Aug','Sep','Oct','Nov','Dec']
const CNMONTH = ['1/','2/','3/','4/','5/','6/','7/','8/','9/','10/','11/','12/']
export default class Sign extends Component {
  constructor(props) {
    super(props)
    this.state = {
      times: '',
      status:'点此签到'
    }
  }
  sign=()=>{
    let a = moment().format('YYYY MMMM Do')
    let arr = a.split(' ')
    for(let i=0;i<MONTH.length;i++){
      if(arr[1] === MONTH[i]){
        arr[0]=arr[0]+'/'
        arr[2]=arr[2].replace(/th/,' ')
        arr.splice(1,1,CNMONTH[i])
      }
    }
    this.setState({
      status:'已签到',
      times:arr
    })
    DeviceEventEmitter.emit('Sign',true)
    if(this.state.status === '已签到'){
      ToastAndroid.show( '请不要重复签到' ,ToastAndroid.SHORT)
    }

  }
  render() {
    return (
      <View style={{ alignItems: 'center' ,backgroundColor:'#F0F0F0' }}>
      <Header navigation={this.props.navigation} text='签到'/>
        <View style ={{alignItems: 'center', justifyContent: 'center',height:160}}>
          <TouchableWithoutFeedback onPress={this.sign}>
            <View style={styles.loginButton}><Text style={styles.login}>{this.state.status}</Text></View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.record}>
          <View style={{width:width,paddingVertical:20,borderColor:'#E0E0E0',borderBottomWidth:0.5}}>
            <Text style={{fontSize:20,color:'#FA7298',marginLeft:15,}}>签到记录</Text>
          </View>
          
          {
            this.state.times === '' ?
              <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginLeft: 15 }}>暂无记录</Text>
              </View>
            :
              <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginLeft: 15 }}>{this.state.times}</Text>
                <Text style={{ marginLeft: 200 }}>积分+30</Text>
              </View>
          }
        </View>
      </View>
    );
  }
}