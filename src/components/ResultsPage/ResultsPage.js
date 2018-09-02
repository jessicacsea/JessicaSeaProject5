import React, { Component } from 'react';

class ResultsPage extends Component {
  constructor () {
    super();
    this.state = {
      clicked: false,
      currentImg: '',
      nasaId: '',
    }
  }

  handleOpen = (img) => {
    console.log(img)
    this.setState ({
      clicked: true,
      currentImg: img, 
    })
  }

  handleClose = () => {
    this.setState({ 
      clicked: false });
  };

  saveId = (img) => {
    this.setState({
      nasaId:img,
    })
  }
  
  render() {
    // console.log(this.props.newResult)
    this.props.newResult.map((img) => {
  
    })

    return (
      <div className="resultsPage">
        <h2>Houston... we have some photos</h2>
        <h3>Keywords: {this.props.keyword}</h3>
        <ul>
          {this.props.newResult.map((img) => {
            return (
            <li
                onClick={() => {this.handleOpen(img.links[0].href); this.saveId(img.data[0].nasa_id);}}>
                <img src={img.links[0].href} alt="" />
            </li>
            )})}
        </ul> 
        <div onClick={() => this.handleClose()}>
          {this.state.clicked ? 
            <div className="zoomIn">
              <img src={this.state.currentImg} /> 
              {this.props.newResult.map((desc) => {
                if (this.state.nasaId === desc.data[0].nasa_id)
                  return <p>{desc.data[0].title}</p>
                }
              )}
            </div> : null} 
        </div>
      </div>
    
    )}
  }
  // now that the results are on the apiCall.js page you can access it and prop it and pull it back down this result page


export default ResultsPage;


// want to pull the array from the api call that we created from the input -- COMPLETE
// grab 10 random images to display - COMPLETE
// add a click event to scale bigger and show description and image title - COMPLETE

// move randomizer in app.js so that you randomize the photo first before sending it as a prop to results page - COMPLETE
// use whats next in JS to use the map and set method to pull 5 randoms pictures into an array but not displaying the same photo twice - COMPLETE
