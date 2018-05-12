/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, Image } from 'react-native';
import ShopCarItem from './ShopCarItem'

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  text: {
    marginLeft: 20,
    fontSize: 12,
    color: 'gray',
    marginTop: 10,
  }
});
export default class ShopCar extends Component {
  constructor(props){
    super(props)
    this.state ={
      list:this.props.navigation.state.params
    }
  }
  render() {
    const {list} = this.state
    return (
      <View>
        {
          JSON.stringify(list) === '[]' ?
            <View style={{ marginTop: 0.2 * height, alignItems: 'center' }}>
              <Image style={{ width: 100, height: 100, }} source={{ uri: 'http://s1.hdslb.com/bfs/static/ticket/static/img/empty-order.052a021.png' }} />
              <Text style={{ marginTop: 4, fontSize: 14, fontWeight: '100' }}>购物车里空空如也</Text>
            </View>
            : null
        }
        {
          list.map((item, index) =>
            <ShopCarItem
              key={index}
              imageIndex={item.imageIndex}
              text={item.text}
              price={item.price}
              number={item.number}
            />
          )
        }
      </View>
    );
  }
}