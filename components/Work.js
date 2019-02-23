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
import Category from './Category.js';
import Tran from './Tran.js';
import Block from './Block.js';

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
			tran: false,
			block: false,
			andDo: false,
			orDo: false,
			arr: []
		}

		this.Arr = this.Arr.bind(this);
		this.whatArg = this.whatArg.bind(this);		
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
		return ( <Category/> );
	}

	renderBigger() {
		const { bigger } = this.state;
		   
		 return (
		   <View style={{ padding: 25 }}>
			 <Icon style={{color: '#315dfa', height: 36, fontSize: 30}} name='right' size={20}/>
		   </View>
		 );
	}

	renderSmaller() {
		const { smaller } = this.state;
		   
		 return (
		   <View style={{ padding: 25}}>
			 <Icon style={{color: '#315dfa', height: 36, fontSize: 30}} name='left' size={20}/>
		   </View>
		 );
	}

	renderAnd() {
		const { and } = this.state;
		   
		 return (
		   <View style={{ paddingTop: 5, paddingLeft: 25 }}>
			 <Text style={{fontSize: 20}}>И</Text>
		   </View>
		 );
	}

	renderOr() {
		const { or } = this.state;		   
		 return (
		   <View style={{ paddingTop: 5, paddingLeft: 25 }}>
			 <Text style={{fontSize: 20}}>ИЛИ</Text>
		   </View>
		 );
	}

	renderTran() {
		const { tran } = this.state;		   
		return ( <Tran/> );
	}

	renderBlock() {
		const { block } = this.state;		   
		return ( <Block/> );
	}

	renderAndDo() {
		const { andDo } = this.state;
		   
		 return (
		   <View style={{ paddingTop: 5, paddingLeft: 25 }}>
			 <Text style={{fontSize: 20}}>И</Text>
		   </View>
		 );
	}
	renderOrDo() {
		const { orDo } = this.state;		   
		 return (
		   <View style={{ paddingTop: 5, paddingLeft: 25 }}>
			 <Text style={{fontSize: 20}}>ИЛИ</Text>
		   </View>
		 );
	}	

	whatArg(value) {
		const {arr} = this.state;
		if (value == "spend") {
			arr.push("spend");
			this.setState({ spend: true });	
			this.setState({ arr: arr});
		}
		else if (value == "balance") {
			arr.push("balance");
			this.setState({ balance: true });	
			this.setState({ arr: arr});
		}
		else if( value == "sum") {
			arr.push("sum");
			this.setState({ sum: true });	
			this.setState({ arr: arr});
		}
		else if( value == "category") {
			arr.push("category");
			this.setState({ category: true });	
			this.setState({ arr: arr});
		}
		else if( value == "bigger") {
			arr.push("bigger");
			this.setState({ bigger: true });	
			this.setState({ arr: arr});
		}
		else if( value == "smaller") {
			arr.push("smaller");
			this.setState({ smaller: true });	
			this.setState({ arr: arr});
		}
		else if( value == "and") {
			arr.push("and");
			this.setState({ and: true });	
			this.setState({ arr: arr});
		}
		else if( value == "or") {
			arr.push("or");
			this.setState({ or: true });	
			this.setState({ arr: arr});
		}														
	}

	Arr(value) {
		console.log(this.state);
		console.log(value);
		this.whatArg(value);	
	}

	render () {
		const win = Dimensions.get('window');   
		const { spend, balance, sum, category, bigger, smaller, and, or, tran, block, andDo, orDo, arr} = this.state;

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
						{tran && this.renderTran()}
						{block && this.renderBlock()}
						{andDo && this.renderAndDo()}
						{orDo && this.renderOrDo()}
					</View>
				</View>	
					<WhiteSpace/>
				<View>
					<WhiteSpace/>
					<Text style={{ flex: 1,  marginLeft: 10}}>Условия</Text>
					<WhiteSpace/>
					<View style={styles.blockcontainer}>
						<Button type="ghost" inline size="large" onClick={ () => this.Arr('spend')} style={{ marginLeft: 10 }}>Потратил</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.Arr('balance') } style={{ marginLeft: 10 }}>Баланс</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.Arr('sum')} style={{ marginLeft: 10 }}>Сумма</Button>
					</View>
					<WhiteSpace/>
					<View style={styles.blockcontainer}>
						<Button type="ghost" inline size="large" onClick={ () => this.Arr('category') } style={{ marginLeft: 10 }}>Категория</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.Arr('bigger') } style={{ marginLeft: 10}}>Больше</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.Arr('smaller')} style={{ marginLeft: 10 }}>Меньше</Button>				
					</View>
					<WhiteSpace/>
					<View style={{ flex: 1, flexDirection: 'row'}}>	
						<Button type="ghost" inline size="large" onClick={ () => this.Arr('and') } style={{ marginLeft: 10 }}>И</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.Arr('or') } style={{ marginLeft: 10 }}>ИЛИ</Button>
					</View>
					<WhiteSpace/>
					<Text style={{ flex: 1,  marginLeft: 10}}>Действия</Text>
					<WhiteSpace/>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Button type="ghost" inline size="large" onClick={() => {this.setState({ tran: true });}} style={{ marginLeft: 10 }}>Перевод</Button>
						<Button type="ghost" inline size="large" onClick={() => {this.setState({ block: true });}} style={{ marginLeft: 10 }}>Заблокировать</Button>
					</View> 
					<WhiteSpace/>	
					<View style={{ flex: 1, flexDirection: 'row'}}>	
						<Button type="ghost" inline size="large" onClick={() => {this.setState({ andDo: true });}} style={{ marginLeft: 10 }}>И</Button>
						<Button type="ghost" inline size="large" onClick={() => {this.setState({ orDo: true });}} style={{ marginLeft: 10 }}>ИЛИ</Button>
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