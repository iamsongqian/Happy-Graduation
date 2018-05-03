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
  Image,
  TouchableOpacity
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import focus from '../img/focus.png';
import guan from '../img/guanzhu.png';
import lahei from '../img/heimingdan.png';
import qian from '../img/qiandao.png';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FA7298',
    alignItems: 'center',
    height:120
  },
  registerButton:{
    width:80,
    height:27,
    borderRadius: 3,
    position:'absolute',
    left:90,
    backgroundColor:'#FB8CAC',
    alignItems: 'center',
    justifyContent:'center',
  },
  register:{
    color:'#FFFFFF'
  },
  loginButton:{
    width:80,
    height:27,
    backgroundColor:'#FFFFFF',
    borderRadius: 3,
    position:'absolute',
    right:90,
    alignItems: 'center',
    justifyContent:'center',
  },
  login:{
    color:'#FA7298'
  },
  person:{
    marginTop: 10,
    height:35,
    backgroundColor:'#FFFFFF',
    justifyContent:'center'
  },
  Text:{
    marginLeft:15,
    color:'#242423',
    fontSize: 13,
  },
  button:{
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    borderTopColor: '#F0F0F0',
    borderTopWidth: 0.5,
    height:90
  },
  image:{
    width:35,
    height:35,
  },
  myButton:{
    alignItems: 'center',
    marginLeft: 15,
  },
  buttonText:{
    color:'#242423',
    fontSize: 11,
    marginTop: 8,
  }
});

export default class Mine extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.registerButton}><Text style={styles.register}>注册</Text></TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}><Text style={styles.login}>登陆</Text></TouchableOpacity>
        </View>
        <View style={styles.person}>
          <Text style={styles.Text}>个人中心</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.myButton}>
            <Image source={guan} style={styles.image}/>
            <Text style={styles.buttonText}>我的关注</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myButton}>
            <Image source={lahei} style={styles.image}/>
            <Text style={styles.buttonText}>黑名单</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.person}>
          <Text style={styles.Text}>我的服务</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.myButton}>
            <Image source={qian} style={styles.image} tintColor='#FA7298'/>
            <Text style={styles.buttonText}>签到</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

