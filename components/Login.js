/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AsyncStorage,
  TextInput,
  StyleSheet,
  Text,
  View,
  StatusBar, 
  TouchableOpacity,
  Dimensions, 
  Image,
  ToastAndroid,
  DeviceEventEmitter
} from 'react-native';
import acc from '../img/acc.png';
import pass from '../img/pass.png';
import ScrollableTabView ,{DefaultTabBar} from 'react-native-scrollable-tab-view';
import Header from './NewsDetailHeader'
import prev from '../img/1.png';
import after from '../img/2.png';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor:'#FBFAFA',
    borderColor: '#E9E9E9',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    height:40,
    padding: 0,
  },
  inputText:{
    marginLeft:30,
    color:'#242423',
    fontSize: 13,
  },
  textInput:{
    width:200,
    marginLeft: 10,
  },
  login:{
    backgroundColor:'#FA7298',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent:'center',
    height:27,
    width:120,
    marginTop: 20,
  }
});
export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      account:'',
      password:'',
      click:0
    }
  }
  loginFinish = (account,password) =>{

    AsyncStorage.getItem(account, (error, result) => {
      if (!error) {
          if (result===password) {
              ToastAndroid.show('登陆成功',ToastAndroid.SHORT);
              for(let i=0;i<20;i++){
                DeviceEventEmitter.emit('hasAccount',{account:account,show:true})
              }
               
              this.props.navigation.navigate('Mine')
          } else {
              ToastAndroid.show('用户名或密码错误',ToastAndroid.SHORT);
          }
      } else {
          ToastAndroid.show('发生错误',ToastAndroid.SHORT);
      }
    })
  }
  render() {
    let src = this.state.click === 0 ? prev : (this.state.click === 1 ? prev : after)
    const {navigate} = this.props.navigation;
    const {account,password} = this.state
    return (
      <View style={{backgroundColor:'#F5F5F5' ,flex:1}}>
      <Header navigation={this.props.navigation} text='登陆'/>
        <Image source={src} resizeMode='contain' style={{width:width}}/>
        <View style={styles.input}>
          <Image source={acc} style={{width:20,height:20,marginLeft:20}}  tintColor={this.state.click===1?'#FA7298':'#9B9B9B'}/>
          <TextInput 
            style={styles.textInput}
            underlineColorAndroid='transparent'
            onChangeText={(account) => this.setState({account})}
            value={this.state.account}
            placeholder='在这里输入账号'
            placeholderTextColor='#C5C5C5'
            onFocus ={()=>this.setState({click:1})}
          />
        </View>
        <View style={[styles.input,{marginTop:20}]}>
          <Image source={pass} style={{width:20,height:20,marginLeft:20}} tintColor={this.state.click===2?'#FA7298':'#9B9B9B'}/>
          <TextInput 
            style={styles.textInput}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            onFocus ={()=>this.setState({click:2})}
            placeholder='在这里输入密码'
            placeholderTextColor='#C5C5C5'
            secureTextEntry={true}
          /> 
        </View>
        <View style={{justifyContent:'center',flexDirection:'row'}}>
          <TouchableOpacity style={[styles.login,{backgroundColor:'#FFFFFF'}]} onPress={()=>navigate('Register')}>
            <Text style={{color: '#383838',fontSize: 13}}>注册</Text>
          </TouchableOpacity>
          <View style={{width:20}}/>
          <TouchableOpacity style={styles.login} onPress={()=>this.loginFinish(account,password)}>
            <Text style={{color: '#FFFFFF',fontSize: 13}}>登陆</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}