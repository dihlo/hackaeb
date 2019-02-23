import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Picker } from 'react-native';

class Block extends Component {

	constructor(props) {
		super(props);
		this.state = {
			PickerBlock: this.props.PickerBlock,	
		}

		this.updatePickerBlock = this.updatePickerBlock.bind(this);
	}

	updatePickerBlock (PickerBlock) {
		this.setState({ PickerBlock: PickerBlock });
	 }

	render () {

        return (
			<View style={{ paddingLeft: 10}}>
				<Text>заблокировать на </Text>
				<Picker selectedValue = {this.state.PickerBlock} onValueChange = {this.updatePickerBlock}>
					<Picker.Item label = "день" value = "day" />
					<Picker.Item label = "неделю" value = "week" />
					<Picker.Item label = "месяц" value = "month" />
					<Picker.Item label = "год" value = "year" />
				</Picker>
			</View>
	)}
}

export default Block;

