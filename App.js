/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, AppState, AsyncStorage} from 'react-native';
import Routes  from './components/Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const middleware = applyMiddleware(ReduxThunk);
const store = createStore(reducers, {}, middleware);

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isStoreLoading: false,
      store: store
    };
  }

  componentWillMount() {
    var self = this;
    AppState.addEventListener('change', this._handleAppStateChange.bind(this));
    this.setState({isStoreLoading: true});
    AsyncStorage.getItem('completeStore').then((value)=>{
        if(value && value.length){
            let initialStore = JSON.parse(value)
            self.setState({store: createStore(reducers, initialStore, middleware)});
        }else{
            self.setState({store: store});
        }
        self.setState({isStoreLoading: false});
    }).catch((error)=>{
        self.setState({store: store});
        self.setState({isStoreLoading: false});
    })
  }

  componentWillUnmount() {
      AppState.removeEventListener('change', this._handleAppStateChange.bind(this));
  }

  _handleAppStateChange(currentAppState) {
      let storingValue = JSON.stringify(this.state.store.getState())
      AsyncStorage.setItem('completeStore', storingValue);
  }

  render() {
    if(this.state.isStoreLoading){
      return <Text>Loading Store ...</Text>
    }else{
        return (
        <Provider store={this.state.store}>
          <Routes />
        </Provider>
        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
