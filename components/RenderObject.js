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
               <View>
                 <Icon style={{color: '#315dfa', height: 20, fontSize: 20, textAlign: 'center'}} name='right' size={20}/>
               </View>
             );
        }
    
        const renderSmaller = (key, item) => {
             return (
               <View>
                 <Icon style={{color: '#315dfa', height: 20, fontSize: 20, textAlign: 'center'}} name='left' size={20}/>
               </View>
             );
        }
    
        const renderAnd = (key, item) => {             
             return (
               <View style={{ marginLeft: 10, marginTop: 5, borderRadius: 10, borderWidth: 1, borderColor: '#108ee9'}}>
                 <Text style={{fontSize: 20, textAlign: 'center', flex: 1, color: 'black'}}>И</Text>
               </View>
             );
        }
    
        const renderOr = (key, item) => {
             return (
               <View style={{ marginLeft: 10, marginTop: 5, borderRadius: 10, borderWidth: 1, borderColor: '#108ee9'}}>
                 <Text style={{fontSize: 20, textAlign: 'center', flex: 1, color: 'black'}}>ИЛИ</Text>
               </View>
             );
        }
    
        const renderTran = (key, item) => {  
            return ( <Tran key={ key } PickerTran={item.bank_account}/> );
        }
    
        const renderBlock = (key, item) => {
            return ( <Block key={ key } PickerBlock={item.period}/> );
        }

        const renderLogBlock = (key, item) => {
            if(cond.blockSorting[0] == "and" && cond.blockSorting[0] == "or") {
                return (<View></View>);}
            else {
                return (
                    <View style={{ marginLeft: 10, marginTop: 5, borderRadius: 10, borderWidth: 1, borderColor: '#108ee9'}}>
                        {renderCondAll()}
                    </View>
                );
            }


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
                    /*case 'and':
                        return renderAnd(key, item);
                    case 'or':
                        return renderOr(key, item);*/
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

        const renderCondAndOr = () => {
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
                    case 'and':
                        return renderAnd(key, item);
                    case 'or':
                        return renderOr(key, item);
                    default:
                        <Error text={item} />;
                        break;
                }                           
            });
        }


		return (
            <View>
                <View>
                    {renderCondAndOr()}
                </View> 
    			<View style={{ marginLeft: 10, marginTop: 5, borderRadius: 10, borderWidth: 1, borderColor: '#108ee9'}}>
                    <View style={{height: 10}}></View>
                    {renderCondAll()}
    			</View>
            </View>
		);
	}


    
    