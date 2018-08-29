import React, { Component } from 'react';
import { apiCall } from './apiCall.js'

class InputPage extends Component {
  constructor() {
    super();
      this.state = {
        searchText: ''
      }
  }

  onTextChange = (e) => {
    this.setState({ 
      searchText: e.target.value 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    apiCall(this.state.searchText);
    // this.saveUserInput();
    this.setState({
      searchText: ''
    })
  }


  render() {
    return (
      <div className="inputPage">
        <h2>What do you want to see today?</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="search" 
            name="searchText" 
            id="photoSearch" 
            placeholder="Eg: Stars, Black hole etc" 
            value={this.state.searchText} 
            onChange={this.onTextChange} />
          <button>Let's get out of this WORLD!</button>
        </form> 
      </div>
    )
  };
}

export default InputPage;