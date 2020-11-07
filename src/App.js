import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import StormGazer from './containers/StormGazer/StormGazer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StormGazer />
      </div>
    );
  }
}

export default App;
