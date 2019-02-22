import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, Image, StyleSheet, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Pagination, WhiteSpace, WingBlank, Steps, Button, DatePicker, List} from 'antd-mobile-rn';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {schedules} from '../actions';
import Icon from 'react-native-vector-icons/AntDesign';
import Spend from './Spend.js';
import Balance from './Balance.js';
import Sum from './Sum.js';

class Work extends Component {

	constructor(props) {
		super(props);
		this.state = {
			spend: false,
			balance: false,
			sum: false,
			category: false,
			bigger: false,
			smaller: false,
			and: false,
			or: false,
		}
	}

	renderSpend() {
		const { spend } = this.state;
		return ( <Spend/> );
	}

	renderBalance() {
		const { balance } = this.state;
		return ( <Balance/> );
	}

	renderSum() {
		const { sum } = this.state;
		return ( <Sum/> );
	}

	renderCategory() {
		const { category } = this.state;
		   
		 return (
		   <View style={{ padding: 25 }}>
			 <Text>категория</Text>
		   </View>
		 );
	}

	renderBigger() {
		const { bigger } = this.state;
		   
		 return (
		   <View style={{ padding: 25 }}>
			 <Text>больше</Text>
		   </View>
		 );
	}

	renderSmaller() {
		const { smaller } = this.state;
		   
		 return (
		   <View style={{ padding: 25 }}>
			 <Text>меньше</Text>
		   </View>
		 );
	}

	renderAnd() {
		const { and } = this.state;
		   
		 return (
		   <View style={{ padding: 25 }}>
			 <Text>и</Text>
		   </View>
		 );
	}

	renderOr() {
		const { or } = this.state;		   
		 return (
		   <View style={{ padding: 25 }}>
			 <Text>или</Text>
		   </View>
		 );
	}

	render () {
		const win = Dimensions.get('window');   
		const { spend, balance, sum, category, bigger, smaller, and, or} = this.state;

		return (
			<ScrollView style={{backgroundColor: 'white', flex: 1}}>
				<View style={styles.container}>
						<Text style={styles.progtitle}>Условия</Text>
						<Text style={styles.progtitle}>Действие</Text>
				</View>
				<WhiteSpace/>
				<View style={styles.container}>
					<View style={{flex: 1, textAlign: 'center'}}>
						{spend && this.renderSpend()}
						{balance && this.renderBalance()}
						{sum && this.renderSum()}
						{category && this.renderCategory()}
						{bigger && this.renderBigger()}
						{smaller && this.renderSmaller()}
						{and && this.renderAnd()}
						{or && this.renderOr()}
					</View>

					<View style={{flex: 1, textAlign: 'center'}}>
						{spend && this.renderSpend()}
						{balance && this.renderBalance()}
						{sum && this.renderSum()}
						{category && this.renderCategory()}
						{bigger && this.renderBigger()}
						{smaller && this.renderSmaller()}
						{and && this.renderAnd()}
						{or && this.renderOr()}
					</View>
				</View>	
					<WhiteSpace/>
				<View>
					<WhiteSpace/>
					<Text style={{ flex: 1,  marginLeft: 10}}>Условия</Text>
					<WhiteSpace/>
					<View style={styles.blockcontainer}>
						<Button type="ghost" inline size="large" onClick={() => {this.setState({ spend: true });}} style={{ marginLeft: 10 }}>Потратил</Button>
						<Button type="ghost" inline size="large" onClick={() => {this.setState({ balance: true });}} style={{ marginLeft: 10 }}>Баланс</Button>
						<Button type="ghost" inline size="large" onClick={() => {this.setState({ sum: true });}} style={{ marginLeft: 10 }}>Сумма</Button>
					</View>
					<WhiteSpace/>
					<View style={styles.blockcontainer}>
						<Button type="ghost" inline size="large" onClick={() => {this.setState({ category: true });}} style={{ marginLeft: 10 }}>Категория</Button>
						<Button type="ghost" inline size="large" onClick={() => {this.setState({ bigger: true });}} style={{ marginLeft: 10}}>Больше</Button>
						<Button type="ghost" inline size="large" onClick={() => {this.setState({ smaller: true });}} style={{ marginLeft: 10 }}>Меньше</Button>				
					</View>
					<WhiteSpace/>
					<View style={{ flex: 1, flexDirection: 'row'}}>	
						<Button type="ghost" inline size="large" onClick={() => {this.setState({ and: true });}} style={{ marginLeft: 10 }}>И</Button>
						<Button type="ghost" inline size="large" onClick={() => {this.setState({ or: true });}} style={{ marginLeft: 10 }}>ИЛИ</Button>
					</View>
					<WhiteSpace/>
					<Text style={{ flex: 1,  marginLeft: 10}}>Действия</Text>
					<WhiteSpace/>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Button type="ghost" inline size="large" style={{ marginLeft: 10 }}>Перевод</Button>
						<Button type="ghost" inline size="large" style={{ marginLeft: 10 }}>Заблокировать</Button>
					</View>
					<WhiteSpace/>	
					<View style={{ flex: 1, flexDirection: 'row'}}>	
						<Button type="ghost" inline size="large" style={{ marginLeft: 10 }}>И</Button>
						<Button type="ghost" inline size="large" style={{ marginLeft: 10 }}>ИЛИ</Button>
					</View>
				</View>				
			</ScrollView>
	)}
}

export default (Work);

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  flexDirection: 'row',
	  backgroundColor: 'white',
	},
	progtitle: {
	  flex: 1,
	  margin: 10,
	  textAlign: 'center',
	  color: 'black',
	  fontSize: 14
	},
	blockcontainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'white',
	}
  });