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
    <View style={{  flex: 1, justifyContent: 'center', alignItems:'center'}}>
      <Text style={{color: 'black'}}>баланс на:</Text>    
      <DatePicker
        style={{flex: 1}}
        customStyles={{flex: 1, dateInput:{borderWidth: 0}}}
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
               borderWidth: 0
            }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    </View>  
    )
  }
}

