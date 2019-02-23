import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Picker } from 'react-native';

class Tran extends Component {

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
				<Text>перевести на </Text>
				<Picker selectedValue = {this.state.PickerDate} onValueChange = {this.updatePickerDate}>
					<Picker.Item label = "На счет 1232142141.." value = "1" />
					<Picker.Item label = "На счет 6546545141.." value = "2" />
				</Picker>
			</View>
	)}
}

export default Tran;

