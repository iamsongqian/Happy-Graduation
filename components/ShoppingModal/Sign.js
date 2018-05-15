/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableWithoutFeedback, Dimensions, Image } from 'react-native';
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

export default class Sign extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bool:true,
      times: [],
      status:'点此签到'
    }
  }
  sign=()=>{
    let a = moment().format('YYYY MMMM Do')
    
    this.setState({
      status:'已签到',
    })
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
          {
            this.state.times.length === 0 ? <Text>暂无记录</Text> :
              <Text>{this.state.times}</Text>


          }
        </View>
      </View>
    );
  }
}