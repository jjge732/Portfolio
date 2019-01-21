import React, { Component } from 'react';
import './assets/css/reset.css';
import './assets/css/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/form' component={Form} />
        </div>
      </Router>
    );
  }
}

export default App;