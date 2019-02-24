import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView, Image, Dimensions } from 'react-native';
import { Tabs, Flex, WhiteSpace, Badge } from 'antd-mobile-rn';
import { Actions } from 'react-native-router-flux';
import CameraUnit from './CameraUnit';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getcases } from '../actions';
import axios from 'axios';

class Bank extends Component {
	constructor(props) {
        super(props);
        this.state = {
            myCases: []
        }
        //this.props.getcases();
    }
    componentDidMount() {
        this.getMyCases();
    }

   getMyCases = () => {
        let self = this
        axios({
            method:'get',
            url:'http://diybankapi.us.to/api/v1/cases',
        })
        .then(function(response) {
            console.log("in getcases OK");
            console.log(response.data);
            self.setState((prevState) => {
                return {
                    ...prevState,
                    myCases: response.data
                }
        
            })
        })
        .catch(function (error) {
            console.log("in getcases ERROR");
            console.log(error);
        });
    }

	render() {
    
    const win = Dimensions.get('window');    
    const ratio = win.width/541;

    const tabs = [
        { title: 'ГЛАВНАЯ' },
        { title: 'ПЛАТЕЖИ И ПЕРЕВОДЫ' },
    ];
    const style = {
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,
        backgroundColor: '#fff',
    };
		return (
		<ScrollView style={{backgroundColor: 'white'}}>
            <View style={{marginTop: 8, margingLeft: 50}}>
                <Text style={{fontSize: 20, paddingLeft: 20, paddingBottom: 10}}>Мои DIY платежи</Text>
                {this.state.myCases.map((myCase) => {
                    return <Text style={{
                        paddingLeft: 30,
                        paddingBottom: 5,
                        fontSize: 16, color: 'black', 
                        }}>- {myCase.Name}</Text> 
                })}
            </View>
            <Image 
			style={{ 
                flex: 1,
                alignSelf: 'stretch',
                width: win.width,
                height: win.height-206,
            }}
            resizeMode={'contain'} 
            source={require('./img/1.jpg')} />      
		</ScrollView>	 
   );}
}

const styles = StyleSheet.create({

})

function mapStateToProps(state) {
	const {data, loading, token} = state.getcases.GetCases;
	return {data, loading, token};
}

function matchDispatchToProps (dispatch) {
	return bindActionCreators ({ getcases: getcases}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Bank);