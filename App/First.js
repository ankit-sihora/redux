import React, {Component} from 'react';
import {Provider} from 'react-redux';
import RouterDemo from './App'
import store from './reducers/index';

export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
        <RouterDemo />
      </Provider>
    );
  }
}