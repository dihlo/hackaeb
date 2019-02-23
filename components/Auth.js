import React, { Component } from 'react';
import { View, Button, Text, TextInput, Image } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {postauth} from '../actions';


class PhoneAuthTest extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      confirmResult: null,
      toGoinMain: null,
      username: 'user2',
      password: 'password2'
    };
  }

  componentDidMount() {
    const { user } = this.state;
    if (user) {
      this.setState({ user: user.toJSON() });
      this.goToMain();
    } else {
      // User has been signed out, reset the state
      this.setState({
        user: null,
        message: '',
        codeInput: '',
        confirmResult: null,
        username: 'user1',
        password: 'password1'
      });
    }
  }

  componentWillUnmount() {
     //if (this.unsubscribe) this.unsubscribe();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { user } = this.state;
    if ((user == null) && (nextState.user)) {
      console.log("ya v should")
      this.sendToken(nextState.user);
    }
    return true;
  }

  signIn = () => {
    this.setState({ message: 'Loading...' });
    
    const {username, password} = this.state;
    const authSend = JSON.stringify({'user_name': username, 'password': password});
    console.log(authSend);
    this.props.postauth(authSend); 

    //todo API login query
  };

  signOut = () => {
    this.setState({ user: null });
  }

  goToMain() {
    Actions.banktab();
  }
  
  sendToken(user) {
    /*const {username, password} = this.state;
    const authSend = JSON.stringify({'user_name': username, 'password': password});
    console.log(authSend);
    this.props.postauth(authSend); */
  }

  render() {
    const { user, confirmResult, toGoinMain, username, password} = this.state;
    return (
      <View style={{ flex: 1 }}>
        {!user && (
          <View>
            <View style={{ padding: 25 }}>
              <Text>Введите логин</Text>
              <TextInput
                autoFocus
                style={{ height: 40, marginTop: 15, marginBottom: 15 }}
                onChangeText={value => this.setState({ username: value })}
                placeholder={'номер телефона '}
                value={username}
              />
              <Text>Введите пароль</Text>
              <TextInput
                style={{ height: 40, marginTop: 15, marginBottom: 15 }}
                onChangeText={value => this.setState({ password: value })}
                placeholder={'пароль '}
                value={password}
              />
              <Button title="Войти" onPress={this.signIn} />
            </View>
          </View>
        )}

        
      </View>
    );
  }  
}

function mapStateToProps(state) {
  const {data, loading, token} = state.postauth.PostAuth;
  return {data, loading, token};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({ postauth: postauth}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PhoneAuthTest);