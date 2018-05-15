import React, { PureComponent } from 'react'
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	Dimensions,
	TouchableOpacity,
} from 'react-native'
import error from '../img/404.png'
import Header from './NewsDetailHeader'
export default class VideoDetail extends PureComponent {

	render() {
		return (
			<View>
				<Header navigation={this.props.navigation} text='视频详情' />
				<View style={{alignItems:'center',marginTop:50}}>
					<Image source={error} style={{ width: 200, height: 200 }} resizeMode='contain'/>
					<Text style={{fontSize:16,color:'#242423',marginTop:10,fontWeight:'normal'}}>Oops!There's somgthing wrong</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})