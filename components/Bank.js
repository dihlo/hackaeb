import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView, Image, Dimensions } from 'react-native';
import { Tabs, Flex, WhiteSpace, Badge } from 'antd-mobile-rn';
import { Actions } from 'react-native-router-flux';
import CameraUnit from './CameraUnit';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {camera} from '../actions';



class Bank extends Component {
	constructor(props) {
		super(props);
	}
    

	render() {
    
    const win = Dimensions.get('window');    
    const ratio = win.width/541;

    const tabs = [
        { title: 'ГЛАВНАЯ' },
        { title: 'ПЛАТЕЖИ И ПЕРЕВОДЫ' },
    ];
    const style = {
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,
        backgroundColor: '#fff',
    };
		return (
		<ScrollView style={{backgroundColor: 'white'}}>
            <Image 
			style={{ 
                flex: 1,
                alignSelf: 'stretch',
                width: win.width,
                height: win.height-206,
            }}
            resizeMode={'contain'} 
            source={require('./img/1.jpg')} />      
		</ScrollView>	 
   );}
}

const styles = StyleSheet.create({

})

export default Bank;