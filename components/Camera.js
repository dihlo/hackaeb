import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView, Dimensions, Image } from 'react-native';
import { Flex, WhiteSpace } from 'antd-mobile-rn';
import { Actions } from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {camera} from '../actions';

class Camera extends Component {
	constructor(props) {
		super(props);

		this.state = {
	
		}

	}



	render() {

		const win = Dimensions.get('window');   
	
		return (
			<ScrollView style={{backgroundColor: 'white'}}>
							<Image 
							style={{ 
									flex: 1,
									alignSelf: 'stretch',
									width: win.width,
									height: win.height-135,
							}}
							resizeMode={'contain'} 
							source={require('./img/4.jpg')} />   
			</ScrollView> 
   );}
}

const styles = StyleSheet.create({
	container: {
		height: 200,
	},
	backgroundVideo: {
		position: 'absolute',
		top: 30,
		left: 0,
		bottom: 0,
		right: 0,
	},	
})

export default (Camera);