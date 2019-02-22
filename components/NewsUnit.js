import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions, TouchableOpacity  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Pagination, WhiteSpace, WingBlank, List, Badge, Switch } from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/Ionicons';

export default class NewsUnit extends Component {
	
	constructor(props) {
		super(props);
		this.state = {	
		}

	}


	render () {
    const locale = {
      prevText: '<',
      nextText: '>',
    };

    const win = Dimensions.get('window');
    const ratio = win.width/541;
    const {newsimgurl} = this.props;
	const {newstitle} = this.props;
	const {newstext} = this.props;

	const goToNewsFullText = () => {
	 console.log('ya v NewsFullText');
	  Actions.NewsFullText();
	}

	return (
		<View>
		  	<WhiteSpace />
		  	<WingBlank size="sm">
	          <List>          
				<List.Item>
					<Badge text={0}><Text style={{color: 'black', fontSize: 14}}>{newstitle}</Text></Badge>
				</List.Item>
	            <List.Item>
	              	<Badge text={0}><Text>{newstext}</Text></Badge>
	            </List.Item>
	            <List.Item arrow="horizontal">
	            	<TouchableOpacity onPress = {goToNewsFullText}> 
	              		<Text style={{textAlign: 'right'}}>Подробнее</Text>
	              	</TouchableOpacity>	
	            </List.Item>
	          </List> 		
		  	</WingBlank>
		    <WhiteSpace />
		</View>     
	)}
}

