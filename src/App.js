import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Gamme from './components/Gamme';
import Preferences from './components/preferences';

import './App.css';


class App extends Component {
  
  render() {
    return (     
        <Router>
          <div>
            {/* Menu */}
            <div id="topmenu">
              <ul id="menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/preferences">Préférences</Link>
                </li>
              </ul>
            </div>

            {/* Appli */}
            <div className="container">
              <Route exact path="/" component={Gamme} />
              <Route path="/preferences" component={Preferences} />
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
