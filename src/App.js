import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class App extends Component {

  render() {
    return (
      <div className="App">

      </div>
    );
  }

}

export default graphql(
  //query
)(App);