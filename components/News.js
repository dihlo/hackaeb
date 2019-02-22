import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions  } from 'react-native';
import { Pagination, WhiteSpace, WingBlank, List, Badge, Switch } from 'antd-mobile-rn';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {news} from '../actions';

import NewsUnit from './NewsUnit';


class News extends Component {

	constructor(props) {
		super(props);
		this.state = {	
		}

	}

	render () {
	
	const win = Dimensions.get('window');   
	
	return (
	  <ScrollView style={{backgroundColor: 'white'}}>
            <Image 
						style={{ 
								flex: 1,
								alignSelf: 'stretch',
								width: win.width,
								height: win.height-100,
						}}
            resizeMode={'contain'} 
            source={require('./img/2.jpg')} />   
	  </ScrollView>
	)}
}

export default News;
