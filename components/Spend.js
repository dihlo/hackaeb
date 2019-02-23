import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Picker } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {category} from '../actions';

class Spend extends Component {

	constructor(props) {
		super(props);
		this.state = {
			PickerDate: this.props.PickerDate,
		}

		this.updatePickerDate = this.updatePickerDate.bind(this);
	}

	updatePickerDate (PickerDate) {
		this.setState({ PickerDate: PickerDate });		
	}

	render () {
        return (
			<View style={{ paddingLeft: 10}}>
				<Text>потратил за </Text>
				<Picker selectedValue = {this.state.PickerDate} onValueChange = {this.updatePickerDate}>
					<Picker.Item label = "день" value = "day" />
					<Picker.Item label = "неделю" value = "week" />
					<Picker.Item label = "месяц" value = "month" />
					<Picker.Item label = "год" value = "year" />
				</Picker>
			</View>
	)}
}

export default Spend;

