import React, { Component } from 'react';
import './App.css';
import scrollToComponent from 'react-scroll-to-component';

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
        displayPage: false,
      }
  }

  userInputCall = (value) => {
    apiCall(value).then((res) => {
      // once the user submits the form, it will save the searchText nto the new setState, use that variable to fill in the keyword param back at the api call (with the new user input as the variable) and come back here to return the list (we called res here) then we console.log it\
      const result = res.data.collection.items;
      const groupOfPics = [];
      console.log(value);
      
      for(let i=0; i < 10; i++){
        const randomPic = this.RandomizePics(result);
        groupOfPics.push(randomPic);
      }
      this.setState ({
        randomPics: groupOfPics,
        searchText: value,
      })
      const uniquePics = new Set(this.state.randomPics);
      const newUniquePics = Array.from(uniquePics)
        this.setState ({
          result: newUniquePics,
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
        <MainPage input={<InputPage />} />
        <InputPage userInputCall={this.userInputCall} />
        <ResultsPage newResult={this.state.result} keyword={this.state.searchText} />
      </div>
    );
  }
}

export default App;


// turnary loop to only render the results page when the input has been entered (look at suzettes strikethrough code along), so get it to change a true/false on the state when clicked so it will display 
// so only when it's state is true, then it will display