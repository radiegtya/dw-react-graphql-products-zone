import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {allCategories} from '../queries';

class CategoriesAdd extends Component{

  constructor(){
    super();
    this.state = {
      name: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.mutate({
      variables: {
        name: this.state.name
      },
      refetchQueries: [{query: allCategories}]
    }).then(()=> this.props.history.push('/'))
  }


  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Name:</label>
          <input onChange={e=> this.setState({name: e.target.value})}/>
        </form>
      </div>
    )
  }
}

export default graphql(gql`
  mutation createCategory ($name: String!){
    addCategory(name: $name) {
      id
      name
    }
  }
`)(CategoriesAdd);
