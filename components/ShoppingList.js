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

const PRICEOFF = Math.random()
const styles = StyleSheet.create({
})


export default class ShoppingList extends Component {
  constructor(props){
    super(props)
    this.state = {
      point:0
    }
  }
  render() {
    return (
      <View style={styles.container}>
        
      </View>  
    );
  }
}

