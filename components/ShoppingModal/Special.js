/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  DeviceEventEmitter
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import Header from '../NewsDetailHeader'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  person: {
    marginTop: 10,
    height: 35,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center'
  },
  Text: {
    marginLeft: 15,
    color: '#242423',
    fontSize: 13,
  },
  button: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
    borderTopColor: '#F0F0F0',
    borderTopWidth: 0.5,
  },
  touch:{
    width: 80,
    height: 30,
    backgroundColor: '#FA7298',
    borderRadius: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  touchText:{
    color:'#FFFFFF',

  }
});
class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {item} = this.props
    return (
      <TouchableWithoutFeedback onPress={()=>this.props.callback(item)} >
        <View style={styles.touch} >
          <Text style={styles.touchText} >{item.columnName}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
export default class Special extends Component {
  constructor(props) {
    super(props)
    this.state = {
      has:[
        
      ],
      no:[
        { columnName: '体育', requestCode: 'T1348647909107' },
        { columnName: '游戏', requestCode: 'T1348648517839' },
        { columnName: '职场', requestCode: 'T1348649580692' },
        { columnName: '育儿', requestCode: 'T1348654151579' },
        { columnName: '娱乐', requestCode: 'T1348649079062' },
        { columnName: '健身', requestCode: 'T1348649079062' },
        { columnName: '汽车', requestCode: 'T1348649079062' },
        { columnName: '财经', requestCode: 'T1348649079062' },
        { columnName: '建康', requestCode: 'T1348649079062' },
      ],
    }
  }

  follow = (item, index) => {
    let list=[]
    const {no,has}=this.state
    no.push(item)
    has.splice(index,1)
    this.setState({
      has, no
    },
    DeviceEventEmitter.emit('isFollow',has))

  }
  unfollow = (item, index) => {
    let list =[]
    const {no,has}=this.state
    has.push(item)
    no.splice(index,1)
    this.setState({
      has, no
    },
    DeviceEventEmitter.emit('isFollow',has))
  }
  render() {
    const {has,no}=this.state
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} text='我的关注'/>
        <View style={styles.person}>
          <Text style={styles.Text}>已关注</Text>
        </View>
        <View style={styles.button}>
          {
            has.length === 0 ? <Text>点击下方可关注</Text> :
              has.map((item, index) =>
                <Button item={item} key={index} callback={()=>this.follow(item,index)}/>
              )
          }
        </View>
        <View style={styles.person}>
          <Text style={styles.Text}>未关注</Text>
        </View>
        <View style={styles.button}>
          {
            no.length === 0 ? <Text>没有更多了,点击上方可关注</Text> :
              no.map((item, index) => 
                <Button item={item} key={index} callback={()=>this.unfollow(item,index)} />
              )
          }
        </View>
      </View>
    );
  }
}
