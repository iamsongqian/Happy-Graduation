/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AsyncStorage,Modal, DeviceEventEmitter, StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, Image, ScrollView, TouchableWithoutFeedback, ToastAndroid } from 'react-native';
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
  check: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#F78DA0',
    height: 50,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkText: {
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  innerContainer: {
    borderRadius: 10, 
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#fff',
    height:120,
    width:240,
  },
});

export default class ShopCar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: this.props.navigation.state.params.list,
      point : this.props.navigation.state.params.point,
      total: 0,
      show: false,
      leftPoint:0
    }
  }

  componentDidMount() {
    const { list } = this.state
    console.log(list)
    let result = 0;
    for (var i = list.length - 1; i >= 0; i--) {
      result += list[i].number * list[i].price;
    }
    this.setState({
      total: result
    })
  }
  clear = () => {
    const {point,total}=this.state
    if(point<total){
      ToastAndroid.show('积分不够',ToastAndroid.SHORT);
    }else{
      this.setState({ show: true })
    }
  }
  thinkMore=()=>{
    this.setState({show:false})
  }
  goCheck = () =>{
    let {point,total,leftPoint}=this.state
    this.setState({
      point:point-total,
      show:false,
      leftPoint:point-total,
      list:[]
    })
    AsyncStorage.setItem('point','0',()=>{
      console.log(123)
    })
    ToastAndroid.show('兑换成功',ToastAndroid.SHORT)
    DeviceEventEmitter.emit('clearList',123)
  }
  render() {
    const { list,point ,total } = this.state
    return (
      <View>
        <Header navigation={this.props.navigation} text='购物车' />
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
            <View style={{ alignItems: 'center', width: width, flexDirection: 'row', backgroundColor: '#FFFFFF', position: 'absolute', height: 50, top: (height - 74) }}>
              <Text style={{ marginLeft: 15 }}>合计:</Text>
              <Text style={{ marginLeft: 10, color: '#F78DA0' }}>{this.state.total}</Text>
              <Text style={{ marginLeft: 15 }}>我的积分：</Text> 
              <Text  style={{color: '#F78DA0' }}> {point}</Text>
              <TouchableWithoutFeedback onPress={this.clear}>
                <View style={styles.check}>
                  <Text style={styles.checkText}>结算</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
        }
        <View >
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.show}
            onRequestClose={() => { console.log("Modal has been closed.") }}
          >
            <View style={styles.container}>
              <View style={styles.innerContainer}>
                <Text>确定要兑换吗</Text>
                <View style={{ flexDirection: 'row', marginTop: 30,justifyContent:'space-around',width:240 }}>
                  <TouchableWithoutFeedback onPress={this.thinkMore}>
                    <View><Text>再想想</Text></View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={this.goCheck}>
                    <View><Text>我要兑换</Text></View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}
