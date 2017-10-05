import React, {Component} from 'react';

export default class CategoriesAdd extends Component{

  constructor(){
    super();
    this.state = {
      name: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.name);
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
