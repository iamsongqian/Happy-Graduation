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
let list = []
export default class ShoppingList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }
  add = ()=>{
    debugger;
    let number = this.state.number + 1
    this.setState({number:number})
    let obj = {
      text: this.props.text,
      price: this.props.price,
      number: 1,
      imageIndex: this.props.imageIndex,
    }
    if(list.length===0){
      list.push( obj )
    }
    else {
      for (i = 0; i < list.length; i++) {
        if (JSON.stringify(obj.text) === JSON.stringify(list[i].text)) {
          list[i].number += 1
          console.log(list)
          return;
        }
         
      }
      list.push(obj)  
    }
    this.props.callback(list)
  }
  jian = () => {
    let eee = this.state.number - 1
    let member = [
      {
        text: this.props.text,
        price: this.props.price,
        number:1,
        imageIndex:this.props.imageIndex,
      }
    ]
    this.setState({ number: eee })
    for (i = 0; i <= list.length; i++) {
      if (JSON.stringify(member[0]) === JSON.stringify(list[i])){
        list.splice(i, 1)
        break
      }
    }
    this.props.callback(list)
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
                <Text style={{fontSize:11}}> {this.state.number} </Text>
              </View>
            }
            <TouchableOpacity onPress={this.add}><Image source={add} style={{width:12,height:12}}/></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

