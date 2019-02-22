import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions, TouchableOpacity  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, Badge, WhiteSpace, WingBlank, Pagination, Flex, Button, Card } from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/AntDesign';


export default class Prod extends Component {

	constructor(props) {
		super(props);
		this.state = {	
		}
	}


	render () {
	
		const win = Dimensions.get('window')
		
		return (
			<ScrollView style={{backgroundColor: 'white'}}>
				<View style={{backgroundColor: '#ccccccd6', height: 36}}> 
					<Text style={{fontSize: 16, color: 'black', paddingTop: 8, paddingLeft: 18, fontWeight: "bold" }}>Заявление</Text>
				</View>
				<View style={{marginTop: 8, margingLeft: 18, height: 36, flexDirection: 'row', flex: 1}}>
					<View style={{paddingLeft: 18, paddingRight: 18, height: 36,}}>
						<Icon style={{color: '#315dfa', height: 36, fontSize: 30}} name='Safety' size={20}/>
					</View>	
					<Text style={{
						fontSize: 16, color: 'black', 
						paddingTop: 4, 
						fontWeight: "bold", 
						width: win.width - 50,
						borderBottomColor: '#ccccccd6',
						borderBottomWidth: 1.5,
						}}>Открытие вклада</Text> 
				</View>
				<WhiteSpace />
				<View style={{marginTop: 8, margingLeft: 18, height: 36, flexDirection: 'row', flex: 1}}>
					<View style={{paddingLeft: 18, paddingRight: 18, height: 36,}}>
						<Icon style={{color: '#315dfa', height: 36, fontSize: 30}} name='solution1' size={20}/>
					</View>	
					<Text style={{
						fontSize: 16, color: 'black', 
						paddingTop: 4, 
						fontWeight: "bold", 
						width: win.width - 50,
						borderBottomColor: '#ccccccd6',
						borderBottomWidth: 1.5,
						}}>Заявление на кредит</Text> 
				</View>
				<WhiteSpace />
				<TouchableOpacity onPress={()=> {Actions.work();}}  style={{marginTop: 8, margingLeft: 18, height: 36, flexDirection: 'row', flex: 1}}>
					<View style={{paddingLeft: 18, paddingRight: 18, height: 36,}}>
						<Icon style={{color: '#315dfa', height: 36, fontSize: 30}} name='barchart' size={20}/>
					</View>	
					<Text style={{
						fontSize: 16, color: 'black', 
						paddingTop: 4, 
						fontWeight: "bold", 
						width: win.width - 50,
						borderBottomColor: '#ccccccd6',
						borderBottomWidth: 1.5,
						}}>IFFFT для Вас</Text> 
				</TouchableOpacity >				
			</ScrollView>
	)}
}
