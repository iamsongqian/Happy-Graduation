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
	Image
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import News from './components/News'
import Shopping from './components/Shopping'
import Mine from './components/Mine'
import BottomTabBar from './common/BottomTabBar';
import { createBottomTabNavigator} from 'react-navigation';
import news from './img/new.png';
import cart from './img/cart.png';
import account from './img/account.png';
const styles = StyleSheet.create({
	tabBarImage: {
		width: 24,
		height: 24,
		marginTop: 8,
	},
	tabBar: {
		backgroundColor: 'white',
	},
	tabBarLabel: {
		fontSize: 12,
		marginBottom: 8,
		marginTop: 6,
	},
	tabBarItem: {
		height: 56,
	},
	tabBarIcon: {
		height: 32,
	},
})


export const App = createBottomTabNavigator(
	{
		News: {
			screen: News,
			navigationOptions: {
				tabBarLabel: '资讯',
				tabBarIcon: ({ tintColor }) => <Image
					style={[styles.tabBarImage, { tintColor: tintColor }]}
					source={news} />,
			}
		},
		Shopping: {
			screen: Shopping,
			navigationOptions: {
				tabBarLabel: '兑换',
				tabBarIcon: ({ tintColor }) => <Image
					style={[styles.tabBarImage, { tintColor: tintColor }]}
					source={cart} />,
			}
		},
		Mine: {
			screen: Mine,
			navigationOptions: {
				tabBarLabel: '我的',
				tabBarIcon: ({ tintColor }) => <Image
					style={[styles.tabBarImage, { tintColor: tintColor }]}
					source={account} />,
			}
		},
	},
	{
		animationEnabled: true,
		tabBarPosition: 'bottom',
		swipeEnabled: true,
		backBehavior: 'none',
		tabBarOptions: {
			activeTintColor: '#F78DA0',
			inactiveTintColor: 'gray',
			showIcon: true,
			indicatorStyle: {
				height: 0,
			},
			style: styles.tabBar,
			tabStyle: styles.tabBarItem,
			labelStyle: styles.tabBarLabel,
			iconStyle: styles.tabBarIcon,
			pressOpacity: 0.8,
			upperCaseLabel: false,
		},
	}
)
