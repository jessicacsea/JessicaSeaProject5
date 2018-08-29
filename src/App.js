import React, { Component } from 'react';
import './App.css';

//// my components////
import MainPage from './MainPage.js';
import InputPage from './InputPage.js';
import ResultsPage from './ResultsPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
        <InputPage />
        <ResultsPage />
        {/* <ApiCall /> */}
      </div>
    );
  }
}

export default App;
