import React, {Component} from 'react';

// React Router
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from '../Scenes/Home/Home';
import About from '../Scenes/About/About';
import Intro from '../Scenes/Intro/Intro';
import Settings from '../Scenes/Settings/Settings';
import Examples from '../Scenes/Examples/Examples';
import Faq from '../Scenes/Faq/Faq';
import Contact from '../Scenes/Contact/Contact';
//

import MediaQuery from 'react-responsive';
import './App.css';
import logo from './logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      gminders: [],
      prompts: [],
      current: 'empty',
      currentPrompt: 'empty',
      previous: [],
      back: 0
    }
  }

  render() {
    return (
      <div className="App">

      <Router>
        <div>
      

          <header id='header' className="App-header">
            <nav className="navbar navbar-dark navbar-expand-sm justify-content-between">
              <a className="navbar-brand" id='intro' href="/intro">
              <img src={logo} className="App-logo" alt="logo"/>
              {/* MediaQuery for large screen */}
                <MediaQuery query="(min-width: 576px)">
                  Goodminder
                  </MediaQuery></a>
              <div className="navbar-expand" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <button className="nav-link btn btn-clean menu dropdown-toggle" type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        UserID
                    </button>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="/"><b>Home</b></a>
                      <a className="dropdown-item" href="/settings">Settings</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/about">About</a>
                      <a className="dropdown-item" href="/examples">Examples</a>
                      <a className="dropdown-item" href="/faq">FAQ</a>
                      <a className="dropdown-item" href="/contact">Contact</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/logout">Log out</a>
                    </div>
                  </li>
                  <li className="nav-item points">
                    <button type="button" className="btn btn-goodminder" data-toggle="popover" title="Gminder Points" data-content="Earn points by daily log-in and writing entries. These will come in handy later :) ">
                      {' '}<span className="badge badge-light">40</span>
                    </button>
                  </li>
                </ul>
              </div>
            </nav>

          </header>

          <Route exact={true} path="/" render={() => (<Home token={this.state.token}/>)}/>
          <Route path="/about" render={() => (<About token={this.state.token}/>)}/>
          <Route path="/intro" render={() => (<Intro token={this.state.token}/>)}/>
          <Route path="/settings" render={() => (<Settings token={this.state.token}/>)}/>
          <Route path="/examples" render={() => (<Examples token={this.state.token}/>)}/>
          <Route path="/faq" render={() => (<Faq token={this.state.token}/>)}/>
          <Route path="/contact" render={() => (<Contact token={this.state.token}/>)}/>

        </div>
      </Router>

    </div>);
  }
}

export default App;
