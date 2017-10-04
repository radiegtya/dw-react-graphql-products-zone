import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class Category extends Component{
  render(){
    const {loading, category} = this.props.data;

    if(loading){
      return <div>Loading...</div>
    }

    return (
      <div>
        <p>id: {category.id}</p>
        <p>name: {category.name}</p>
      </div>
    )
  }
}

export default graphql(gql`
  query Category($id: String!){
    category(id: $id){
      id
      name
    }
  }
`, {
  options: (props) => {
    return {
      variables: {id: props.match.params.id}
    }
  }
})(Category);
