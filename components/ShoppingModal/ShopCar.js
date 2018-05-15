/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { DeviceEventEmitter,StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, Image,ScrollView,TouchableWithoutFeedback,ToastAndroid } from 'react-native';
import ShopCarItem from './ShopCarItem'
import empty from '../../img/empty.png'
import Header from '../NewsDetailHeader'
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
  },
  check:{
    position:'absolute',
    right:0,
    backgroundColor:'#F78DA0',
    height:50,
    width:110,
    alignItems: 'center',
    justifyContent:'center'
  },
  checkText:{
    color:'#FFFFFF'
  }
});

export default class ShopCar extends Component {
  constructor(props){
    super(props)
    this.state ={
      list:this.props.navigation.state.params.list,
      total:0
    }
  }
  clear = () =>{
    ToastAndroid.show( '结算完成' ,ToastAndroid.LONG)
    this.setState({list:[]},
      DeviceEventEmitter.emit('clearList','true')
    )
    this.props.navigation.goBack()
  }
  componentDidMount() {
    console.log(this.props)
    const {list} = this.state
    let result = 0;
    for (var i = list.length - 1; i >= 0; i--) {
      result += list[i].number * list[i].price;
    }
    this.setState({
      total: result
    })
  }
  render() {
    const {list} = this.state
    return (
      <View>
      <Header navigation={this.props.navigation} text='购物车'/>
        <ScrollView>
          {
            JSON.stringify(list) === '[]' ?
              <View style={{ marginTop: 0.2 * height, alignItems: 'center' }}>
                <Image style={{ width: 100, height: 100, }} source={empty} />
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
        </ScrollView>
        {
          JSON.stringify(list) === '[]' ? null :
            <View style={{alignItems:'center',width:width,flexDirection:'row',backgroundColor:'#FFFFFF',position:'absolute',height:50,top:(height-100)}}>
              <Text style={{marginLeft:15}}>合计:</Text>
              <Text style={{marginLeft:20,color:'#F78DA0'}}>{this.state.total}</Text>
              <TouchableWithoutFeedback onPress={this.clear}><View style={styles.check}><Text style={styles.checkText}>结算</Text></View></TouchableWithoutFeedback>
            </View>
        }
      </View>
    );
  }
}
