import React, { Component } from 'react';

import router from './router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="App-intro">
          {router}
        </div>
      </div>
    );
  }
}

export default App;
