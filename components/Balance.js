import { View, Text } from 'react-native'
import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class Balance extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: this.props.date
    }
  }

  render(){
    return (
    <View style={{paddingLeft: 10}}>
      <Text>баланс на:</Text>    
      <DatePicker
        style={{width: 150}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-01-2018"
        maxDate="01-01-2020"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
            dateIcon: {
                height: 0,
                width: 0,
            },
            dateInput: {
                width: 20,
            }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    </View>  
    )
  }
}

