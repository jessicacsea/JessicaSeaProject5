import React, { Component } from 'react';
import './App.css';

//// my components////
import MainPage from './components/MainPage/MainPage';
import InputPage from './components/InputPage/InputPage';
import ResultsPage from './components/ResultsPage/ResultsPage';
import apiCall from './components/apiCall/apiCall';

class App extends Component {
  constructor(){
    super();
      this.state = {
        searchText: '',
        index: 0,
        result: [],
        randomPics: [],
      }
  }

  userInputCall = (value) => {
    apiCall(value).then((res) => {
      // once the user submits the form, it will save the searchText nto the new setState, use that variable to fill in the keyword param back at the api call (with the new user input as the variable) and come back here to return the list (we called res here) then we console.log it\
      const result = res.data.collection.items;
      console.log(result);
      // this.setState ({
      //   result: result,
      // });
      const groupOfPics = [];

      for(let i=0; i < 5; i++){
        const randomPic = this.RandomizePics(result);
        groupOfPics.push(randomPic);
      }
      console.log(groupOfPics);
      this.setState ({
        randomPics: groupOfPics,
      })
    })
  }

  RandomizePics = (array) => {
    const index = (Math.floor(Math.random() * array.length));
    return array[index];
  }
  
  
  render() {
  
    return (
      <div className="App">
        <MainPage />
        <InputPage userInputCall={this.userInputCall} />
        <ResultsPage newResult={this.state.randomPics} />
      </div>
    );
  }
}

export default App;


// turnary loop to only render the results page when the input has been entered (look at suzettes strikethrough code along), so get it to change a true/false on the state when clicked so it will display
// so only when it's state is true, then it will display