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

import shopcar from '../img/shopcar.png';
import payoff from '../img/payoff.png'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#FA7298',
    paddingVertical:8
  },
  headerText: {
    color:'#FFFFFF'
  },
  headerImage:{
    width:15,
    height:15,
  },
  headerImageButton_1 :{
    position:'absolute',
    right: 45,
  },
  headerImageButton_2 :{
    position:'absolute',
    right: 15,
  }
});


export default class Shopping extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>兑换中心</Text>
          <TouchableOpacity style={styles.headerImageButton_1}>
            <Image source={shopcar} style={styles.headerImage} resizeMode ='contain'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerImageButton_2}>
            <Image source={payoff} style={styles.headerImage} resizeMode ='contain'/>
          </TouchableOpacity>
        </View>
        <View>
          
        </View>
      </View>  
    );
  }
}

