import React, { Component } from 'react';
import Calculator from './calculator.js';
import Calculator2 from './calculator2.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
        <Calculator2 />
      </div>
    );
  }
}

export default App;
