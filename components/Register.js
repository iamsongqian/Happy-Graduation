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
  Dimensions
} from 'react-native';


const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor:'#FBFAFA',
    marginTop: 20,
    borderColor: '#E9E9E9',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    height:60,
    padding: 0,
  },
  inputText:{
    marginLeft:30,
    color:'#242423',
    fontSize: 13,
  },
  textInput:{
    marginLeft: 20,
    width:200
  },
  login:{
    backgroundColor:'#FA7298',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent:'center',
    height:27,
    width:180,
    marginTop: 20,
  }
});

const {height, width} = Dimensions.get('window');

export default class  Register  extends Component {
  static navigationOptions = {
    title: '注册账号',
    headerStyle: {
      elevation: 0,
      backgroundColor: '#FA7298',
      height:30
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      alignSelf: 'center',
      fontSize:15,
      fontWeight: '100',
    },
    headerRight: (
      <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
    ),
  };
  constructor(props){
    super(props)
    this.state={
      account:'',
      password1:'',
      password2:''
    }
  }
  componentDidMount(){

  }
  RegisterFinish = (acc,pass) =>{
    const {navigate,goBack,state} = this.props.navigation;
    AsyncStorage.setItem(acc,pass,()=>{
      console.log(acc+'and'+pass)
    });
    state.params.callback(acc);
    goBack();
  }
  render() {
    const {account,password2} = this.state
    return (
      <View style={{backgroundColor:'#F5F5F5' ,flex:1}}>
        <View style={styles.input}>
          <Text style={styles.inputText}>输入账号:</Text>
          <TextInput 
            style={styles.textInput}
            underlineColorAndroid='transparent'
            onChangeText={(account) => this.setState({account})}
            value={this.state.account}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputText}>输入密码:</Text>
          <TextInput 
            style={styles.textInput}
            underlineColorAndroid='transparent'
            onChangeText={(password1) => this.setState({password1})}
            value={this.state.password1}
            password={true}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputText}>再次输入:</Text>
          <TextInput 
            style={styles.textInput}
            underlineColorAndroid='transparent'
            onChangeText={(password2) => this.setState({password2})}
            value={this.state.password2}
            password={true}
          />
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={styles.login} onPress={()=>this.RegisterFinish(account,password2)}>
            <Text style={{color: '#FFFFFF',fontSize: 13}}>注册</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}