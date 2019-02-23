import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Picker } from 'react-native';

class Block extends Component {

	constructor(props) {
		super(props);
		this.state = {
			PickerDate: '',	
		}

		this.updatePickerDate = this.updatePickerDate.bind(this);
	}

	updatePickerDate (PickerDate) {
		this.setState({ PickerDate: PickerDate });
	 }

	render () {

        return (
			<View style={{ paddingLeft: 10}}>
				<Text>заблокировать на </Text>
				<Picker selectedValue = {this.state.PickerDate} onValueChange = {this.updatePickerDate}>
					<Picker.Item label = "день" value = "today" />
					<Picker.Item label = "неделю" value = "week" />
					<Picker.Item label = "месяц" value = "mounth" />
					<Picker.Item label = "год" value = "year" />
				</Picker>
			</View>
	)}
}

export default Block;

