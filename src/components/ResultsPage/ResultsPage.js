import React, { Component } from 'react';
import App from '../../App';

class ResultsPage extends Component {
  constructor (props) {
    super(props);
    
  }

  
  render() {
    console.log(this.props.newResult)
    this.props.newResult.map((img) => {
      console.log(img.links[0].href);
    })

    return (
      <div className="resultsPage">
        <h2>Houston... we have some photos</h2>
        <h3>Keywords: </h3>
        <ul>
          {this.props.newResult.map((img) => {
            return (
            <li>
              <img src={img.links[0].href} />
            </li>
            )})}
        </ul>

      </div>
    
    )}
  }
  // now that the results are on the apiCall.js page you can access it and prop it and pull it back down this result page


export default ResultsPage;


// want to pull the array from the api call that we created from the input -- COMPLETE
// grab 5 random images to display
// add a click event to scale bigger and show description and image title

// move randomizer in app.js so that you randomize the photo first before sending it as a prop to results page
// use whats next in JS to use the map and set method to pull 5 randoms pictures into an array but not displaying the same photo twice
