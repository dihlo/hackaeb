import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Picker } from 'react-native';

class Category extends Component {

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
				<Text>в категории </Text>
				<Picker selectedValue = {this.state.PickerDate} onValueChange = {this.updatePickerDate}>
					<Picker.Item label = "Еда" value = "food" />
					<Picker.Item label = "Бухло" value = "alco" />
					<Picker.Item label = "Развлечения" value = "fun" />
					<Picker.Item label = "Ремонт" value = "repair" />
					<Picker.Item label = "Комуналка" value = "com" />
				</Picker>
			</View>
	)}
}

export default Category;

