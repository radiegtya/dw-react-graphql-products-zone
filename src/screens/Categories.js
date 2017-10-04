import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router-dom';

class Categories extends Component {

  renderRow(category, index){
    return (
      <li key={index}>
        <Link to={`/category/${category.id}`}>{category.name}</Link>
      </li>
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
`)(Categories);
