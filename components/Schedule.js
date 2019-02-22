import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Pagination, WhiteSpace, WingBlank, Steps } from 'antd-mobile-rn';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {schedules} from '../actions';

class Schedule extends Component {

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
									height: win.height-130,
							}}
							resizeMode={'contain'} 
							source={require('./img/3.jpg')} />   
			</ScrollView>
	)}
}

function mapStateToProps(state) {
  const {data, loading} = state.schedules.schedulesData;
  return {data, loading};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({ schedules: schedules}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Schedule);
