
import React, {Component} from 'react';

import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import news from './img/new.png';
import cart from './img/cart.png';
import account from './img/account.png';

const tab=['资讯','商城','我的']
const styles = StyleSheet.create({
	tabs: {
		flexDirection: 'row',
		justifyContent:'space-around',
		borderTopColor: '#F0F0F0',
		borderTopWidth: 0.5,
		paddingVertical: 5,
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
		super();
		this.state={
			tab:0
		}
	}
	render() {
		return (
			<View style={styles.tabs}>
				<TouchableOpacity onPress={()=>{this.props.goToPage(0);this.setState({tab:0})}}>
					<View style={styles.tabItem}>
						<Image source={news} style={{width: 20, height: 20}}/>
						<Text style={{color: this.state.tab===0?'#F2180D':'#ADADAD'}}>
							{tab[0]}
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>{this.props.goToPage(0);this.setState({tab:1})}}>
					<View style={styles.tabItem}>
						<Image source={cart} style={{width: 20, height: 20}}/>
						<Text style={{color: this.state.tab===1?'#F2180D':'#ADADAD'}}>
							{tab[1]}
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>{this.props.goToPage(0);this.setState({tab:2})}}>
					<View style={styles.tabItem}>
						<Image source={account} style={{width: 20, height: 20}}/>
						<Text style={{color: this.state.tab===2?'#F2180D':'#ADADAD'}}>
							{tab[2]}
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}


