/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {TextInput, ToastAndroid,StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, Image,DeviceEventEmitter,AsyncStorage } from 'react-native';
import Header from '../NewsDetailHeader'

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBFAFA',
    marginTop: 20,
    borderColor: '#E9E9E9',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    height: 60,
    padding: 0,
  },
  inputText: {
    marginLeft: 30,
    color: '#242423',
    fontSize: 13,
  },
  textInput: {
    marginLeft: 20,
    width: 200
  },
  login: {
    backgroundColor: '#FA7298',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 27,
    width: 180,
    marginTop: 20,
  }
});
export default class Mima extends Component {
  constructor(props){
    super(props)
    this.state={
      account:this.props.navigation.state.params,
      password1:'',
      password3:'',
      password2:'',
    }
  }
  RegisterFinish = (account, password1, password2, password3) => {
    const { navigate } = this.props.navigation;
    AsyncStorage.getItem(account, (error, result) => {
      if (result !== password1) {
        ToastAndroid.show('原密码输入不正确', ToastAndroid.SHORT);
        return;
      }
      return;
    })
    if(password2!==password3){
      ToastAndroid.show('两次输入的密码不一样', ToastAndroid.SHORT);
      return;
    }else{
      AsyncStorage.setItem(account, password2, () => {
        console.log(account + '+' + password2)
        ToastAndroid.show('修改成功', ToastAndroid.SHORT)
        navigate('Login');
      });
    }
  }
  render() {
    const { account, password1,password2,password3 } = this.state
    return (
      <View style={{backgroundColor:'#F5F5F5' ,flex:1}}>
        <Header navigation={this.props.navigation} text='修改密码'/>
        <View>
          <View style={styles.input}>
            <Text style={styles.inputText}>你的账号:</Text>
            <Text style={styles.inputText}>{account}</Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.inputText}>输入旧密码:</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              onChangeText={(password1) => this.setState({ password1 })}
              value={this.state.password1}
              secureTextEntry={true}
              placeholder='输入旧密码'
              placeholderTextColor='gray'
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputText}>输入新密码:</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              onChangeText={(password2) => this.setState({ password2 })}
              value={this.state.password2}
              secureTextEntry={true}
              placeholder='长度大于6位且包含字母'
              placeholderTextColor='gray'
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputText}>再输入一次:</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              onChangeText={(password3) => this.setState({ password3 })}
              value={this.state.password3}
              secureTextEntry={true}
              placeholder='请再次输入'
              placeholderTextColor='gray'
            />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.login} onPress={() => this.RegisterFinish(account, password1,password2,password3)}>
            <Text style={{ color: '#FFFFFF', fontSize: 13 }}>修改</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}