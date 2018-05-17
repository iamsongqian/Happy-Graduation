/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TextInput,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ToastAndroid
} from 'react-native';
import Header from './NewsDetailHeader'

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

const { height, width } = Dimensions.get('window');
const regBox = {  
  regEmail : /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,//邮箱  
  regMobile : /^0?1[3|4|5|8][0-9]\d{8}$/,//手机    
  regPassword:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/ //密码
}  
export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      password1: '',
      password2: ''
    }
  }
  RegisterFinish = (account, password1, password2) => {
    const { navigate, goBack, state } = this.props.navigation;
    if (account === '' || password1 === '') {
      ToastAndroid.show('账号或密码不能为空', ToastAndroid.SHORT)
      return;
    }
    if (regBox.regEmail.test(account) || regBox.regMobile.test(account)) { }
    else {
      ToastAndroid.show('账号格式不正确', ToastAndroid.SHORT)
      return;
    }
    if (password1 !== password2) {
      ToastAndroid.show('密码请输入一致', ToastAndroid.SHORT)
      return;
    }
    if (!(regBox.regPassword).test(password1)) {
      ToastAndroid.show('密码格式不正确', ToastAndroid.SHORT)
      return;
    }
    AsyncStorage.setItem(account, password1, () => {
      console.log(account + 'and' + password1)
    });
    ToastAndroid.show('注册成功', ToastAndroid.SHORT)
    navigate('Login');
  }
  render() {
    const { account, password1,password2 } = this.state
    return (
      <View style={{ backgroundColor: '#F5F5F5', flex: 1 }}>
      <Header navigation={this.props.navigation} text='注册'/>
        <View style={styles.input}>
          <Text style={styles.inputText}>输入账号:</Text>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid='transparent'
            onChangeText={(account) => this.setState({ account })}
            value={this.state.account}
            placeholder='请输入邮箱或手机'
            placeholderTextColor='gray'
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputText}>输入密码:</Text>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid='transparent'
            onChangeText={(password1) => this.setState({ password1 })}
            value={this.state.password1}
            secureTextEntry={true}
            placeholder='密码长度大于6位且包含字母'
            placeholderTextColor='gray'
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputText}>再次输入:</Text>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid='transparent'
            onChangeText={(password2) => this.setState({ password2 })}
            value={this.state.password2}
            secureTextEntry={true}
            placeholder='请再次输入'
            placeholderTextColor='gray'
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.login} onPress={() => this.RegisterFinish(account, password1,password2)}>
            <Text style={{ color: '#FFFFFF', fontSize: 13 }}>注册</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}