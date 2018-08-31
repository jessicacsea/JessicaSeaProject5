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
      }
  }

  userInputCall = (value) => {
    apiCall(value).then((res) => {
      // once the user submits the form, it will save the searchText nto the new setState, use that variable to fill in the keyword param back at the api call (with the new user input as the variable) and come back here to return the list (we called res here) then we console.log it
      const result = res.data.collection.items;
      // console.log(result);
      this.setState ({
        result: result,
      });
    })
  }

  render() {
    return (
      <div className="App">
        <MainPage />
        <InputPage userInputCall={this.userInputCall} />
        <ResultsPage newResult={this.state.result} />
        {/* <ApiCall /> */}
      </div>
    );
  }
}

export default App;
