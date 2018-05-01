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
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import News from './components/News'
import Shopping from './components/Shopping'
import Mine from './components/Mine'
import WeixinTabBar from './WeixinTabBar';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tabNames: ['资讯', '商城', '我的', ],
			tabIconNames: ['md-home', 'ios-albums-outline', 'ios-paper-plane-outline'],
		};
	}
	render() {
		let tabNames = this.state.tabNames;
		let tabIconNames = this.state.tabIconNames;
		return (
			<ScrollableTabView
				renderTabBar={() => <WeixinTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
				tabBarPosition='bottom'
			>
				<News />
				<Shopping />
				<Mine />
			</ScrollableTabView>
		);
	}
}