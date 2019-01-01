import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../../css/App.css';
import '../../css/universals/Buttons.css';
import '../../css/universals/Boxes.css';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Navbar from './Navbar';
import About from './About';
import Intro from './Intro';
import Examples from './Examples';
import Settings from './Settings';
import LogIn from './auth/LogIn';
import SignUp from './auth/SignUp';
import LogOutCheck from './auth/LogOutCheck';
import Contact from './Contact';
import Faq from './Faq';
import Legal from './Legal';
import Reset from './auth/Reset';
import ResetBegin from './auth/ResetBegin';
import Home from './Home';
import Manager from './Manager';


class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return(
      <div className='App'>
        <Navbar />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/intro" component={Intro} />
          <Route path="/examples" component={Examples} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/reset" component={Reset} />
          <Route path="/resetbegin" component={ResetBegin} />
          <Route path="/logout" component={LogOutCheck} />
          <Route path="/contact" component={Contact} />
          <Route path="/legal" component={Legal} />
          <Route path="/faq" component={Faq} />
          <Route path="/manager" component={Manager} />
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { error: state.auth.errorMessage }
}
export default connect(mapStateToProps, actions)(App);
