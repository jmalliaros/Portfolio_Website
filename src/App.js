import React, { Component } from 'react';
import logo from './JMsimplelogo.png';
import './App.css';
import ZoomSun from './ZoomableSunburst.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jake Malliaros</h1>
        </header>
        <p className="App-intro">
          Portfolio coming soon.  
        </p>
        <div>
          <ZoomSun/>
        </div>
      </div>
    );
  }
}

export default App;
