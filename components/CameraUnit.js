import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Flex, WhiteSpace } from 'antd-mobile-rn';
import { Actions } from 'react-native-router-flux';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';

export default class CameraUnit extends Component {
	
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

	render() {
		const {videourl} = this.props
		return (
		<View style={styles.bigcontainer}>
			<View style={styles.container}>
				<Text style = {{ textAlign: 'center', fontSize:14, margin:10 }}>Камера {this.props.cameraname}</Text>
				<TouchableWithoutFeedback onPress={() => this.setState({paused: !this.state.paused})}>
					<VideoPlayer source={{uri: videourl}}   // Can be a URL or a local file.
						ref={(ref) => {
						this.player = ref
						}} 
						repeat={this.state.repeat} 
						rate={this.state.rate} 
						volume={this.state.volume} 
						muted={this.state.muted} 
						resizeMode={this.state.resizeMode}
						paused={this.state.paused}
						onLoad={this.onLoad} 
						onProgress={this.onProgress}
						onEnd={this.onEnd}					                                  
						onBuffer={this.onBuffer}                // Callback when remote video is buffering
						onError={this.videoError}               // Callback when video cannot be loaded
						style={styles.backgroundVideo}
						navigator={this.props.navigator}
						controlTimeout={1500}
						showOnStart={false}	
						disableSeekbar	
						disableBack	 			
						/>
				</TouchableWithoutFeedback>	 	
			</View>
		</View>	 
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
