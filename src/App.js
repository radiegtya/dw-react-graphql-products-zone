import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class App extends Component {

  renderRow(category, index){
    return (
      <li key={index}>{category.name}</li>
    )
  }

  render() {
    if(this.props.data.loading){
      return <div>Loading...</div>
    }

    return (
      <div className="App">
        <ul>
          {this.props.data.categories.map((category, index) => this.renderRow(category, index))}
        </ul>
      </div>
    );
  }

}

export default graphql(gql`
  query allCategories{
    categories{
      id
      name
    }
  }
`)(App);
