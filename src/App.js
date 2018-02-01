import React, { Component } from 'react';
import FindNearestDibsColor from './FindNearestDibsColor';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div className="App-intro">
      <FindNearestDibsColor />
    </div>
  </div>
);

export default App;
