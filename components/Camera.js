import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView, Dimensions, Image } from 'react-native';
import { Flex, WhiteSpace } from 'antd-mobile-rn';
import { Actions } from 'react-native-router-flux';
import Video from 'react-native-video';
import CameraUnit from './CameraUnit';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {camera} from '../actions';

class Camera extends Component {
	constructor(props) {
		super(props);

		this.state = {
			repeat: true,
			rate: 1,
			volume: 1,
			muted: false,
			resizeMode: 'contain', // video's mode: none, cover, stretch, contain
			duration: 0.0, // video's duration set on event onLoad
			currentTime: 0.0, // set on event onProgress
			paused: true, // check if video is pausing or not
			rateText: '1.0', // rate value in component Picker
			pausedText: 'Play', // view to user: 'Play' - when video is pausing, 'Pause' - when video is playing
			hideControls: false, // hide control button when video is playing and show it when user clicks on 			
		}

		this.onLoad = this.onLoad.bind(this);
		this.onPress = this.onPress.bind(this);
		this.onEnd = this.onEnd.bind(this);
	}

	onLoad(data) {
		this.setState({duration: data.duration});
	}

	onPress(data) {
		this.setState({currentTime: data.currentTime});
	}

	onEnd(data) {
		this.setState({pausedText: 'Play', paused: true});
	}

	componentDidMount() {
		this.props.camera();
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

function mapStateToProps(state) {
	const {camdata, loading} = state.camera.cameraData;
	return {camdata, loading};
  }
  
  function matchDispatchToProps (dispatch) {
	return bindActionCreators ({ camera: camera}, dispatch)
  }
  
  export default connect(mapStateToProps, matchDispatchToProps)(Camera);