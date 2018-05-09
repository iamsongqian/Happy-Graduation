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
  TouchableOpacity,
  ScrollView
} from 'react-native';
import ShoppingList from './ShoppingList'
import shopcar from '../img/shopcar.png';
import payoff from '../img/payoff.png'

import hero1 from '../hero/hero1.png';
import hero2 from '../hero/hero2.png';
import hero3 from '../hero/hero3.png';
import hero4 from '../hero/hero4.png';
import hero5 from '../hero/hero5.png';
import hero6 from '../hero/hero6.png';
import hero7 from '../hero/hero7.png';





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FA7298',
    paddingVertical: 8
  },
  headerText: {
    color: '#FFFFFF'
  },
  headerImage: {
    width: 15,
    height: 15,
  },
  headerImageButton_1: {
    position: 'absolute',
    right: 45,
    alignItems: 'center',
  },
  headerImageButton_2: {
    position: 'absolute',
    right: 15,
    alignItems: 'center',
  },
  shopText: {
    fontSize: 7,
    color: '#FFFFFF',
  },
  point: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 0.5,
    alignItems: 'center',
  },
  pointText: {
    fontSize: 12,
    color: 'gray'
  },
  pointButton: {
    borderRadius: 12,
    borderColor: 'lightpink',
    borderWidth: 1,
    position: 'absolute',
    right: 10,
    paddingHorizontal: 4,
    paddingVertical: 1,
  }
});

const imageList = [hero1,hero2]
  
export default class Shopping extends Component {
  constructor(props) {
    super(props)
    this.state = {
      point: 0
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>兑换中心</Text>
          <TouchableOpacity style={styles.headerImageButton_1}>
            <Image source={shopcar} style={styles.headerImage} resizeMode='contain' />
            <Text style={styles.shopText}>购物车</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerImageButton_2}>
            <Image source={payoff} style={[styles.headerImage, { marginTop: 1 }]} resizeMode='contain' />
            <Text style={styles.shopText}>优惠券</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.point}>
          <Text style={[styles.pointText, { marginLeft: 15 }]}>可用积分: </Text>
          <Text style={[styles.pointText, { color: '#E1A15B' }]}>{this.state.point}</Text>
          <TouchableOpacity style={styles.pointButton}><Text style={styles.pointText}>我的积分</Text></TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <ShoppingList imageSource={hero1} price='100' text='山猫兽' />
            <ShoppingList imageSource={hero2} price='200' text='猎人之贮' />
            <ShoppingList imageSource={hero3} price='300' text='铭刻 碎击之冠' />
            <ShoppingList imageSource={hero4} price='400' text='铭刻 大器之握' />
            <ShoppingList imageSource={hero5} price='500' text='双面盟友的燃烧之杖' />
            <ShoppingList imageSource={hero6} price='600' text='无双诡魅' />
            <ShoppingList imageSource={hero7} price='700' text='心渊魔角' />
          </View>
        </ScrollView>


      </View>
    );
  }
}

