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
import { Item } from 'antd-mobile/lib/tab-bar';

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
			arrCondition: [],
			arrAction: []
		}

		this.ArrCondition = this.ArrCondition.bind(this);
		this.whatArg = this.whatArg.bind(this);		
	}

	renderSpend(key, item) {
		return ( <Spend key={ key } PickerDate={item.period} /> );
	}

	renderBalance(key, item) {
		return ( <Balance key={ key } date={item.date} /> );
	}

	renderSum(key, item) {
		return ( <Sum  key={ key } amount={item.amount} /> );
	}

	renderCategory() {
		const { category } = this.state;
		return ( <Category/> );
	}

	renderBigger(key, item) {
		 return (
		   <View style={{ padding: 25 }}>
			 <Icon style={{color: '#315dfa', height: 36, fontSize: 30}} name='right' size={20}/>
		   </View>
		 );
	}

	renderSmaller(key, item) {
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

	whatArg(value, arr, arrType) {
		//get condition/action object
		if(arr.length == 0) {
			//add new condition
			myObject = {};
			myObject.id = 1;
			console.log('length=000');
			console.log(myObject);

			arr.push(myObject);
		} else {
			//get last condition
			myObject = arr[arr.length - 1];
			console.log('length='+arr.length);
			console.log(myObject);
		}

		//modify condition/action object
		if (value == "spend") {
			myObject.type = 'spend';
			myObject.period = 'month';
		} else if (value == "balance") {
			myObject.type = 'balance';
			myObject.date = '23-02-2019';
		} else if( value == "sum") {
			myObject.amount = '100';
		} else if( value == "category") {
			myObject.category = 'alco';
		} else if( value == "bigger") {
			myObject.condition = 'gt';
		} else if( value == "smaller") {
			myObject.condition = 'lt';
		} else if( value == "and") {
			// arrCondition.push("and");
			// this.setState({ and: true });	
			// this.setState({ arrCondition: arrCondition});
		} else if( value == "or") {
			// arrCondition.push("or");
			// this.setState({ or: true });	
			// this.setState({ arrCondition: arrCondition});
		}

		//update state
		arr[arr.length - 1] = myObject;
			if(arrType == 1 ){
				this.setState((prevState) => { 
					return {
					...prevState,
					arrCondition: arr
					}
				})
			}else{
				this.setState((prevState) => { 
					return {
					...prevState,
					arrAction: arr
					}
				})
			}
	}

	ArrCondition(value, arrType) {
		const {arrCondition, arrAction} = this.state;
		if(arrType == 1){
			arr = arrCondition.slice(0);
		}else{
			arr = arrAction.slice(0);
		}

		console.log('this.state');
		console.log(this.state);
		console.log('value');
		console.log(value);
		this.whatArg(value, arr, arrType);	
	}
	renderObject(key, item) {
		console.log('renderObject');
		console.log(item);

		const renderCondLeft = () => {
			switch(item.type) {
				case 'spend':
					return this.renderSpend(key, item);
				case 'balance':
					return this.renderBalance(key, item);
				// case 'category':
				// 	this.renderCategory(key, item);
				// 	break;
				// case 'and':
				// 	return this.renderAnd(key, item);
				// case 'or':
				// 	return this.renderOr(key, item);
				// case 'tran':
				// 	return this.renderTran(key, item);
				// case 'block':
				// 	return this.renderBlock(key, item);
				// case 'andDo':
				// 	return this.renderAndDo(key, item);
				// case 'orDo':
				// 	return this.renderOrDo(key, item);
				default:
					<Error text={item} />;
					break;
			}};
		const renderCond = () => {
			switch(item.condition){
				case 'gt':
					return this.renderBigger(key, item);
				case 'lt':
					return this.renderSmaller(key, item);
			}
		};
		const renderCondRigth = () => {
			if(item.amount > 0){
				return this.renderSum(key, item);
			}
		};
		return (
			<View>
				{renderCondLeft()}
				{renderCond()}
				{renderCondRigth()}
			</View>
		);
	}

	renderArray(arr) {
		console.log('arr');
		console.log(arr);
		return arr.map((item,i) => {
			const key = i;
			return this.renderObject(key, item);
		});
	}

	render () {
		const win = Dimensions.get('window');   
		const { arrCondition, arrAction } = this.state;

		return (
			<ScrollView style={{backgroundColor: 'white', flex: 1}}>
				<View style={styles.container}>
						<Text style={styles.progtitle}>Условия</Text>
						<Text style={styles.progtitle}>Действие</Text>
				</View>
				<WhiteSpace/>
				<View style={styles.container}>
					<View style={{flex: 1, textAlign: 'center'}}>
						{
							this.renderArray(arrCondition)
						}
					</View>

					<View style={{flex: 1, textAlign: 'center'}}>
						{
							this.renderArray(arrAction)
						}
					</View>
				</View>	
					<WhiteSpace/>
				<View>
					<WhiteSpace/>
					<Text style={{ flex: 1,  marginLeft: 10}}>Условия</Text>
					<WhiteSpace/>
					<View style={styles.blockcontainer}>
						<Button type="ghost" inline size="large" onClick={ () => this.ArrCondition('spend',1)} style={{ marginLeft: 10 }}>Потратил</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.ArrCondition('balance',1) } style={{ marginLeft: 10 }}>Баланс</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.ArrCondition('sum',1)} style={{ marginLeft: 10 }}>Сумма</Button>
					</View>
					<WhiteSpace/>
					<View style={styles.blockcontainer}>
						<Button type="ghost" inline size="large" onClick={ () => this.ArrCondition('category',1) } style={{ marginLeft: 10 }}>Категория</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.ArrCondition('bigger',1) } style={{ marginLeft: 10}}>Больше</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.ArrCondition('smaller',1)} style={{ marginLeft: 10 }}>Меньше</Button>				
					</View>
					<WhiteSpace/>
					<View style={{ flex: 1, flexDirection: 'row'}}>	
						<Button type="ghost" inline size="large" onClick={ () => this.ArrCondition('and',1) } style={{ marginLeft: 10 }}>И</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.ArrCondition('or',1) } style={{ marginLeft: 10 }}>ИЛИ</Button>
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