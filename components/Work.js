import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, StyleSheet, TextInput } from 'react-native';
import { WhiteSpace, Button } from 'antd-mobile-rn';
import { RenderObject } from './RenderObject';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postcases } from '../actions';

class Work extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			arrCondition: [],
			arrAction: []
		}

		this.AddInArray = this.AddInArray.bind(this);
		this.whatArg = this.whatArg.bind(this);
		this.SaveArray = this.SaveArray.bind(this);
		this.ResetArray = this.ResetArray.bind(this);
	}

	whatArg(value, arr, arrType) {
		//get condition/action object
		if(arr.length == 0) {
			//add new condition/action object
			myObject = {};
			myObject.serial = 1;
			myObject.blockSorting = [];
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
		} else if (value == "bank_account") {
			myObject.type = 'bank_account';
			myObject.bank_account = '6768764823';
		} else if (value == "tran") {
			myObject.type = 'bank_account';
			myObject.bank_account = '6768764823';
		} else if (value == "block") {
			myObject.type = 'block';
			myObject.period = 'month';						
		} else if( value == "and") {
			//add new AND condition
			myObject = {};
			myObject.serial = arr.length + 1;
			myObject.blockSorting = [];
			myObject.logicType = 'and';
			console.log('length='+arr.length);
			console.log(myObject);
			arr.push(myObject);
		} else if( value == "or") {
			//add new OR condition
			myObject = {};
			myObject.blockSorting = [];
			myObject.serial = arr.length + 1;
			myObject.logicType = 'or';
			console.log('length='+arr.length);
			console.log(myObject);
			arr.push(myObject);
		}

		//add in blockSorting
		myObject.blockSorting.push(value);

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

	AddInArray(value, arrType) {
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
		
		//TODO check available to add

		this.whatArg(value, arr, arrType);	
	}

	SaveArray() {
		const {arrCondition, arrAction} = this.state;
		
		postJson = {
			name: this.state.name,
			conditions: arrCondition,
			actions: arrAction
		};

		this.props.postcases(postJson); 
	}

	ResetArray() {
		this.setState({
			name: '',
			arrCondition: [],
			arrAction: []
		})
	}

	renderArray(arr) {
		console.log('arr');
		console.log(arr);
		return arr.map((item, i) => {
			const key = i;
			return RenderObject(key, item);
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
						<Button type="ghost" inline size="large" onClick={ () => this.AddInArray('bank_account',1)} style={{ marginLeft: 10 }}>Счет</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.AddInArray('spend',1)} style={{ marginLeft: 10 }}>Потратил</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.AddInArray('balance',1) } style={{ marginLeft: 10 }}>Баланс</Button>
					</View>
					<WhiteSpace/>
					<View style={styles.blockcontainer}>
						<Button type="ghost" inline size="large" onClick={ () => this.AddInArray('category',1) } style={{ marginLeft: 10 }}>Категория</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.AddInArray('bigger',1) } style={{ marginLeft: 10}}>Больше</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.AddInArray('smaller',1)} style={{ marginLeft: 10 }}>Меньше</Button>				
					</View>
					<WhiteSpace/>
					<View style={{ flex: 1, flexDirection: 'row'}}>	
						<Button type="ghost" inline size="large" onClick={ () => this.AddInArray('sum',1)} style={{ marginLeft: 10 }}>Сумма</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.AddInArray('and',1) } style={{ marginLeft: 10 }}>И</Button>
						<Button type="ghost" inline size="large" onClick={ () => this.AddInArray('or',1) } style={{ marginLeft: 10 }}>ИЛИ</Button>
					</View>
					<WhiteSpace/>
					<Text style={{ flex: 1,  marginLeft: 10}}>Действия</Text>
					<WhiteSpace/>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Button type="ghost" inline size="large" onClick={() => {this.AddInArray('tran', 2)}} style={{ marginLeft: 10 }}>Перевод</Button>
						<Button type="ghost" inline size="large" onClick={() => {this.AddInArray('block', 2);}} style={{ marginLeft: 10 }}>Заблокировать</Button>
					</View> 
					<WhiteSpace/>	
					<View style={{ flex: 1, flexDirection: 'row'}}>	
						<Button type="ghost" inline size="large" onClick={() => {this.AddInArray('and', 2);}} style={{ marginLeft: 10 }}>И</Button>
					</View>
				</View>
					<WhiteSpace/>
				<View>
					<View style={{ flex: 1, flexDirection: 'row'}}>	
						<TextInput
							style={{height: 40, borderBottomColor: 'gray', borderBottomWidth: 1}}
							onChangeText={(name) => this.setState({name})}
							placeholder = 'Введите название'
							value={this.state.name}
						/>
						<Button type="primary" inline size="large" onClick={ () => this.SaveArray()} style={{ marginLeft: 10 }}>Сохранить</Button>
					</View>
				</View>
				<View>
					<View style={{ flex: 1, flexDirection: 'row'}}>	
						<Button type="warning" inline size="large" onClick={ () => this.ResetArray()} style={{ marginLeft: 10 }}>Сбросить</Button>
					</View>
				</View>
			</ScrollView>
	)}
}

function mapStateToProps(state) {
	const {data, loading, token} = state.postcases.PostCases;
	return {data, loading, token};
}

function matchDispatchToProps (dispatch) {
	return bindActionCreators ({ postcases: postcases}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Work);

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