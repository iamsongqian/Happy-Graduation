
import React, {Component} from 'react';

import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
	tabs: {
		flexDirection: 'row',
		justifyContent:'space-around',
		borderTopColor: '#F0F0F0',
		borderTopWidth: 0.5,
	},

	tab: {
		flex:1
	},

	tabItem: {
		flexDirection: 'column',
		justifyContent:'center',
		alignItems: 'center',
	},
});
export default class WeixinTabBar extends Component {
	constructor(){
		super()
	}

	renderTabOption(tab, i) {
		let color = this.props.activeTab == i ? "#F2180D" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
		return (
			<TouchableOpacity onPress={()=>this.props.goToPage(i)} style={styles.tab} key={i}>
				<View style={styles.tabItem}>
					<Icon
						name={this.props.tabIconNames[i]} // 图标
						size={30}
						color={color}/>
					<Text style={{color: color}}>
						{this.props.tabNames[i]}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}

	render() {
		return (
			<View style={styles.tabs}>
				{this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
			</View>
		);
	}
}


