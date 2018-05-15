import React from 'react'; 
import {View} from 'react-native'
import {createStackNavigator} from "react-navigation"; 
import {App} from './App'; 
import Login from './components/Login'
import Register from './components/Register'
import ShopCar from './components/ShoppingModal/ShopCar'
import OffPrice from './components/ShoppingModal/OffPrice'
import Sign from './components/ShoppingModal/Sign'
export const FirstPage = createStackNavigator ({
  App:{
    screen:App,
    navigationOptions:{
      header:null
    }
  },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register
  },
  ShopCar: {
    screen: ShopCar,
    navigationOptions: {
      title: '购物车',
      headerStyle: {
        elevation: 0,
        backgroundColor: '#FA7298',
        height: 30
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: '100',
      },
      headerRight: (
        <View style={{ height: 44, width: 55, justifyContent: 'center', paddingRight: 15 }} />
      ),
    }
  },
  OffPrice: {
    screen: OffPrice,
    navigationOptions: {
      title: '优惠券',
      headerStyle: {
        elevation: 0,
        backgroundColor: '#FA7298',
        height: 30
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: '100',
      },
      headerRight: (
        <View style={{ height: 44, width: 55, justifyContent: 'center', paddingRight: 15 }} />
      ),
    }
  },
  Sign: {
    screen: Sign,
    navigationOptions: {
      title: '签到',
      headerStyle: {
        elevation: 0,
        backgroundColor: '#FA7298',
        height: 30
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: '100',
      },
      headerRight: (
        <View style={{ height: 44, width: 55, justifyContent: 'center', paddingRight: 15 }} />
      ),
    }
  }
})