import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/css/reset.css';
import './assets/css/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    );
  }
}

export default App;
