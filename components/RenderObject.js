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
import BankAccount from './BankAccount.js';
import { Item } from 'antd-mobile/lib/tab-bar';

export const RenderObject = (key, item) => {
		//console.log('renderObject');
        //console.log(item);

        const cond = item;

        const renderBankAccount = (key, item) => {
            return ( <BankAccount key={ key } PickerAccount={item.bank_account}/> );
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
    
        const renderCategory = (key, item) => {
            return ( <Category key={ key } PickerCategory={item.category}/> );
        }
    
        const renderBigger = (key, item) => {
             return (
               <View style={{ paddingTop: 5, paddingLeft: 25 }}>
                 <Icon style={{color: '#315dfa', height: 36, fontSize: 30}} name='right' size={20}/>
               </View>
             );
        }
    
        const renderSmaller = (key, item) => {
             return (
               <View style={{ paddingTop: 5, paddingLeft: 25 }}>
                 <Icon style={{color: '#315dfa', height: 36, fontSize: 30}} name='left' size={20}/>
               </View>
             );
        }
    
        const renderAnd = (key, item) => {             
             return (
               <View style={{ paddingTop: 5, paddingLeft: 25 }}>
                 <Text style={{fontSize: 20}}>И</Text>
               </View>
             );
        }
    
        const renderOr = (key, item) => {
             return (
               <View style={{ paddingTop: 5, paddingLeft: 25 }}>
                 <Text style={{fontSize: 20}}>ИЛИ</Text>
               </View>
             );
        }
    
        const renderTran = (key, item) => {  
            return ( <Tran key={ key } PickerTran={item.bank_account}/> );
        }
    
        const renderBlock = (key, item) => {
            return ( <Block key={ key } PickerBlock={item.period}/> );
        }
    

        const renderCondAll = () => {
            console.log("in cond");
            let arr = cond.blockSorting;
            count = 0;
            for (var key in arr) {
              count++;
            }
            console.log(count);
            console.log(arr);
            return arr.map((block, i) => {
                const key = i;
                console.log(block) 
                switch(block) {
                    case 'bank_account':
                        return renderBankAccount(key, item);
                    case 'spend':
                        return renderSpend(key, item);
                    case 'balance':
                        return renderBalance(key, item);
                    case 'sum':
                        return renderSum(key, item);                        
                    case 'category':
                        return renderCategory(key, item);
                    case 'and':
                        return renderAnd(key, item);
                    case 'or':
                        return renderOr(key, item);
                    case 'bigger':
                        return renderBigger(key, item);
                    case 'smaller':
                        return renderSmaller(key, item);                        
                    case 'tran':
                        return renderTran(key, item);
                    case 'block':
                        return renderBlock(key, item);
                    default:
                        <Error text={item} />;
                        break;
                }                           
            });
        }

		return (
			<View>
                {renderCondAll()}
			</View>
		);
	}


    
    