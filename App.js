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
import BottomTabBar from './common/BottomTabBar';

export default class App extends Component {

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ScrollableTabView
				renderTabBar={() => <BottomTabBar />}
				tabBarPosition='bottom'
				locked={true}
				scrollWithoutAnimation={true}
			>
				<News />
				<Shopping />
				<Mine />
			</ScrollableTabView>
		);
	}
}