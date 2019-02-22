import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Pagination, WhiteSpace, WingBlank, Steps } from 'antd-mobile-rn';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {schedules} from '../actions';

class Work extends Component {

	constructor(props) {
		super(props);
		this.state = {	
		}
	}


	render () {
		const win = Dimensions.get('window');   
	
		return (
			<ScrollView style={{backgroundColor: 'white'}}>
                <Text>тут будем работать</Text>
			</ScrollView>
	)}
}

export default (Work);