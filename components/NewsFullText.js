import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions, StyleSheet  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Pagination, WhiteSpace, WingBlank, List, Badge, Switch } from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/Ionicons';

export default class NewsFullText extends Component {
	
	constructor(props) {
		super(props);
		this.state = {	
		}
	}

	render () {

    const win = Dimensions.get('window');
    const ratio = win.width/541;

	return (
		<ScrollView style={styles.blank}>
				<Text style={styles.title}>Собрание родителей</Text>
				<Image
					style={{ 
					flex: 1,
					alignSelf: 'stretch',
					width: '100%',
					height: 362 * ratio,
					}}
					resizeMode={'contain'}  
					source={{uri: 'http://dogvdome.ru/wp-content/uploads/2017/06/%D0%9A%D0%B0%D0%BA%D0%B8%D0%B5-%D0%B5%D1%81%D1%82%D1%8C-%D0%BF%D0%BE%D1%80%D0%BE%D0%B4%D1%8B-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA-%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B3%D0%BE-%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D0%B0-1.jpg'}}
				/>
				<Text style={styles.content}>Lorem ipsum dolor sit amet, 
				consectetur adipisicing elit. Perferendis ad minima quibusdam, 
				nesciunt veritatis ipsa inventore debitis pariatur accusantium ab, 
				velit quo eos necessitatibus temporibus recusandae quae libero quidem, nobis!
				Lorem ipsum dolor sit amet, 
				consectetur adipisicing elit. Perferendis ad minima quibusdam, 
				nesciunt veritatis ipsa inventore debitis pariatur accusantium ab, 
				velit quo eos necessitatibus temporibus recusandae quae libero quidem, nobis!
				</Text>
				<Text style={styles.date}>14.11.2018</Text>
		</ScrollView>     
	)}
}

const styles = StyleSheet.create({
  blank: {
  	backgroundColor: 'white'
  },
  title: {
  	color: 'black',
  	fontSize: 18,
  	margin: 15
  },
  content: {
  	fontSize: 14,
  	color: 'black', 
  	margin: 10  	 	  	
  },
  date: {
  	fontSize: 12,
  	margin: 10  	 	  	
  }  
});