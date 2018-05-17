import React from 'react'; 
import {View} from 'react-native'
import {createStackNavigator} from "react-navigation"; 
import {App} from './App'; 
import Login from './components/Login'
import Register from './components/Register'
import ShopCar from './components/ShoppingModal/ShopCar'
import OffPrice from './components/ShoppingModal/OffPrice'
import Point from './components/ShoppingModal/Point'
import Sign from './components/ShoppingModal/Sign'
import NewsDetail from './components/NewsDetail'
import VideoDetail from './components/VideoDetail'
import Special from './components/ShoppingModal/Special'
export const FirstPage = createStackNavigator ({
  App:{
    screen:App,
    navigationOptions:{
      header:null
    }
  },
  Login: {
    screen: Login,
    navigationOptions:{
      header:null
    }
  },
  NewsDetail: {
    screen: NewsDetail,
    navigationOptions:{
      header:null
    }
  },
  VideoDetail: {
    screen: VideoDetail,
    navigationOptions:{
      header:null
    }
  },
  Register: {
    screen: Register,
    navigationOptions:{
      header:null
    }
  },
  ShopCar: {
    screen: ShopCar,
    navigationOptions:{
      header:null
    }
  },
  OffPrice: {
    screen: OffPrice,
    navigationOptions:{
      header:null
    }
  },
  Point: {
    screen: Point,
    navigationOptions:{
      header:null
    }
  },
  Sign: {
    screen: Sign,
    navigationOptions:{
      header:null
    }
  },
  Special: {
    screen: Special,
    navigationOptions:{
      header:null
    }
  }
})