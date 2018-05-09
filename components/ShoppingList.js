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
  Dimensions
} from 'react-native';
import add from '../img/add.png';
import jian from '../img/fuadd.png'

const { height, width } = Dimensions.get('window');
const widthItem = (width - 15) / 2
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    width: widthItem,
    height: 0.7 * widthItem,
    marginLeft: 5,
    backgroundColor:'#FFFFFF'
  },
  image:{
    width: widthItem,
    height: 0.57 * widthItem,
  },
  buttomText:{
    color:'#E1A15B',
    fontWeight: 'normal',
    fontSize: 12,
  }
})

export default class ShoppingList extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }
  add = ()=>{
    let qqq = this.state.number + 1
    this.setState({number:qqq})
  }
  jian =  () =>{
    let eee = this.state.number - 1
    this.setState({number:eee})
  }
  render() {
    const imageSource = this.props.imageSource
    return (
      <View style={styles.container}>
        <Image source={imageSource} style={styles.image} resizeMode='stretch'/>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:20}}>
          <Text style={styles.buttomText}>{this.props.price} 积分</Text>
          <View style={{flexDirection:'row',alignItems:'center',position:'absolute',right:7}}>
            {
              this.state.number <= 0?null:
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={this.jian}><Image source={jian} style={{width:12,height:12}}/></TouchableOpacity>
                <Text> {this.state.number} </Text>
              </View>
            }
            <TouchableOpacity onPress={this.add}><Image source={add} style={{width:12,height:12}}/></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

