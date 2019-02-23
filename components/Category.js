import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Picker } from 'react-native';

class Category extends Component {

	constructor(props) {
		super(props);
		this.state = {
			PickerCategory: this.props.PickerCategory,	
		}

		this.updatePickerCategory = this.updatePickerCategory.bind(this);
	}

	updatePickerCategory (PickerCategory) {
		this.setState({ PickerCategory: PickerCategory });
	 }

	render () {

        return (
			<View style={{ paddingLeft: 10}}>
				<Text>в категории </Text>
				<Picker selectedValue = {this.state.PickerCategory} onValueChange = {this.updatePickerCategory}>
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

