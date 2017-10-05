import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router-dom';
import {allCategories} from '../queries';

class Categories extends Component {

  renderRow(category, index){
    return (
      <li key={index}>
        <Link to={`/categories/${category.id}`}>{category.name}</Link>
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
          <li><Link to={`categories/add`}>Add Category</Link></li>
        </ul>

        <ul>
          {this.props.data.categories.map((category, index) => this.renderRow(category, index))}
        </ul>
      </div>
    );
  }

}

export default graphql(allCategories)(Categories);
