import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';


class InputPage extends Component {
  constructor() {
    super();
      this.state = {
        searchText: '',
        index: 0
      }
  }

  onTextChange = (e) => {
    this.setState({ 
      searchText: e.target.value 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit is fired');
    // this is where it goes back to the apiCall.js component and fills in the searchText keyword with whatever the user inputted THEN it will produce res (so from the apiCall the res is the object list we are pulling from the api)
    this.props.userInputCall(this.state.searchText)
    
    this.setState({
      searchText: ''
    })
    }
  

  // scrollToElement = (e) => {
  //   e.preventDefault();
  //   console.log('button was clicked');
  //   this.setState({
  //     index: 1
  //   });
  //   this.refs[e].scrollIntoView({block: 'end', behavior: 'smooth'});
  // }

  render() {
    return (
      <div className="inputPage">
        <h2>What do you want to see today?</h2>
        {/* // onSubmit needs to be on the FORM because a form actually submits, where the button can only have the onClick method */}
        <form onSubmit={this.handleSubmit}>
          <input 
            type="search" 
            name="searchText" 
            id="photoSearch" 
            placeholder="Eg: Stars, Black hole, etc" 
            value={this.state.searchText} 
            onChange={this.onTextChange} />
          <button onClick={() => scrollToComponent(this.Blue, { offset: 0, align: 'top', duration: 500 })}>Let's get out of this WORLD!</button>
          <section className='blue' ref={(section) => { this.Blue = section; }}></section>
          
        </form> 
      </div>
    )
  };
}

export default InputPage;