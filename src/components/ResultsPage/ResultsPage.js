import React, { Component } from 'react';
import App from '../../App';
import InputPage from '../InputPage/InputPage.js';
import apiCall from '../apiCall/apiCall.js';

class ResultsPage extends Component {
  constructor (props) {
    super(props);
  }
  
  
  render() {
    console.log('render', this.props.newResult.map((img) => {
      return (
        <li></li>
      )
    })
    return( // WHAT IS HAPPENING HERE?! WHY CANT I CALL THE OBJECT ARRAY OBJECT
      <div className="resultsPage">
        <h2>Houston... we have some photos</h2>
        <h3>Keywords: </h3>
        <ul>
      
            <li>
            <img src={'this.props.newResult[0].links[0].href'} />
            </li>
        </ul>

      </div> 
    )}
  }
  // get something on the page!!!!
  // now that the results are on the apiCall.js page you can access it and prop it and pull it back down this result page


export default ResultsPage;


// want to pull the array from the api call that we created from the input
// grab 5 random images to display
// add a click event to scale bigger and show description and image title