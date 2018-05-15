/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, Image } from 'react-native';
import Header from '../NewsDetailHeader'

const {height, width} = Dimensions.get('window');

export default class OffPrice extends Component {
  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} text='优惠券'/>
        <View style={{ marginTop: 0.2 * height, alignItems: 'center' }}>
          <Image style={{ width: 100, height: 100, }} source={{ uri: 'http://s1.hdslb.com/bfs/static/ticket/static/img/empty-order.052a021.png' }} />
          <Text style={{ marginTop: 4, fontSize: 14, fontWeight: '100' }}>暂无可用的优惠券</Text>
        </View>
      </View>
    );
  }
}