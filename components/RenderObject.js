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

export const RenderObject = (key, item) => {
		console.log('renderObject');
        console.log(item);

        const condition = {
                serial: 1,
                date: "23-02-2019",
                type: "balance",
                condition: "lt",
                amount: 100,
                blockSorting: {0: 'balance', 1: 'lt',  2: 'amount'}
            }


        const renderSpend = (key, item) => {
            return ( <Spend key={ key } PickerDate={item.period} /> );
        }
    
        const renderBalance = (key, item) => {
            return ( <Balance key={ key } date={item.date} /> );
        }
    
        const renderSum = (key, item) => {
            return ( <Sum  key={ key } amount={item.amount} /> );
        }
    
        const renderCategory = () => {
            const { category } = this.state;
            return ( <Category/> );
        }
    
        const renderBigger = (key, item) => {
             return (
               <View style={{ padding: 25 }}>
                 <Icon style={{color: '#315dfa', height: 36, fontSize: 30}} name='right' size={20}/>
               </View>
             );
        }
    
        const renderSmaller = (key, item) => {
             return (
               <View style={{ padding: 25}}>
                 <Icon style={{color: '#315dfa', height: 36, fontSize: 30}} name='left' size={20}/>
               </View>
             );
        }
    
        const renderAnd = () => {
            const { and } = this.state;
               
             return (
               <View style={{ paddingTop: 5, paddingLeft: 25 }}>
                 <Text style={{fontSize: 20}}>И</Text>
               </View>
             );
        }
    
        const renderOr = () => {
            const { or } = this.state;		   
             return (
               <View style={{ paddingTop: 5, paddingLeft: 25 }}>
                 <Text style={{fontSize: 20}}>ИЛИ</Text>
               </View>
             );
        }
    
        const conrenderTran = () => {
            const { tran } = this.state;		   
            return ( <Tran/> );
        }
    
        const renderBlock = () => {
            const { block } = this.state;		   
            return ( <Block/> );
        }
    
        const renderAndDo = () => {
            const { andDo } = this.state;
               
             return (
               <View style={{ paddingTop: 5, paddingLeft: 25 }}>
                 <Text style={{fontSize: 20}}>И</Text>
               </View>
             );
        }

        const renderOrDo = () => {
            const { orDo } = this.state;		   
             return (
               <View style={{ paddingTop: 5, paddingLeft: 25 }}>
                 <Text style={{fontSize: 20}}>ИЛИ</Text>
               </View>
             );
        }

		const renderCondLeft = () => {
			switch(item.type) {
				case 'spend':
					return renderSpend(key, item);
				case 'balance':
					return renderBalance(key, item);
				// case 'category':
				// 	renderCategory(key, item);
				// 	break;
				// case 'and':
				// 	return renderAnd(key, item);
				// case 'or':
				// 	return renderOr(key, item);
				// case 'tran':
				// 	return renderTran(key, item);
				// case 'block':
				// 	return renderBlock(key, item);
				// case 'andDo':
				// 	return renderAndDo(key, item);
				// case 'orDo':
				// 	return renderOrDo(key, item);
				default:
					<Error text={item} />;
					break;
			}};
		const renderCond = () => {
			switch(item.condition){
				case 'gt':
					return renderBigger(key, item);
				case 'lt':
					return renderSmaller(key, item);
			}
		};
		const renderCondRigth = () => {
			if(item.amount > 0){
				return renderSum(key, item);
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


    
    