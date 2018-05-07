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
    backgroundColor:'#FFFFFF',
    marginTop: 10,
  },
  inputText:{
    marginLeft:15,
    color:'#242423',
    fontSize: 13,
  },
});

export default class  Register  extends Component {
  componentDidMount(){
    console.log(111)
  }
  static navigationOptions = {
    title: '注册',
    headerStyle: {
      backgroundColor: '#FA7298',
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
      password:''
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.input}>
          <Text style={styles.inputText}>账号:</Text>
          <TextInput />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputText}>密码:</Text>
          <TextInput />
        </View>
      </View>
    );
  }
}