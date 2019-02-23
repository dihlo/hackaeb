import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Picker } from 'react-native';

class BankAccount extends Component {

	constructor(props) {
		super(props);
		this.state = {
			PickerAccount: this.props.PickerAccount,	
		}

		this.updatePickerAccount = this.updatePickerAccount.bind(this);
	}

	updatePickerAccount (PickerAccount) {
		this.setState({ PickerAccount: PickerAccount });
	 }

	render () {

        return (
			<View style={{ paddingLeft: 10}}>
				<Text>в категории </Text>
				<Picker selectedValue = {this.state.PickerAccount} onValueChange = {this.updatePickerAccount}>
					<Picker.Item label = "Счет жены (523523533123)" value = "523523533123" />
					<Picker.Item label = "Зарплатная (6768764823)" value = "6768764823" />
					<Picker.Item label = "Вклад (785675673123)" value = "785675673123" />
					<Picker.Item label = "Visa (15235233)" value = "15235233" />
				</Picker>
			</View>
	)}
}

export default BankAccount;

