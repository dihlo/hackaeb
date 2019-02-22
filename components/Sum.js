import { AppRegistry, TextInput, Text, View } from 'react-native';
import React, { Component } from 'react'


export default class Sum extends Component {
  constructor(props){
    super(props)
    this.state = { number: '' };
  }

  render(){
    return (
    <View style={{paddingLeft: 10}}>
        <Text>сумма</Text>
        <TextInput
            style={{height: 40, borderBottomColor: 'gray', borderBottomWidth: 1}}
            onChangeText={(number) => this.setState({number})}
            value={this.state.text}
        />
    </View>  
    )
  }
}

