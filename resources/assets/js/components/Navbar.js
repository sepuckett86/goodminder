import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../images/logo.png';
import '../../css/Navbar.css';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  renderNavbar() {
    if (this.props.auth) {
      return (
        <header id='header' className="sticky-top  App-header">
                <nav className="navbar navbar-dark navbar-expand-sm justify-content-between">
                  <Link to="/intro" className="navbar-brand brand-font" id='intro'>
                  <img src={logo} className="App-logo" alt="logo"/>
                  <div className='invisible-when-small'>
                      Goodminder
                    </div>
                  </Link>
                  <span className="navbar-text paragraph-font ml-auto">

                  </span>
                  <div className="navbar-expand" id="navbarNav">

                    <ul className="navbar-nav ml-auto">

                      <li className="nav-item dropdown">
                        <button className="nav-link paragraph-font btn-basic btn-flat menu dropdown-toggle" type="button" id="dropdownMenuButton"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="invisible-when-super-small">{this.props.user.email}</div>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                          <Link to="/" className="dropdown-item" onClick={() => {this.props.changeHomeDisplay('goodminders')}}>Home</Link>
                          <Link to="/settings" className="dropdown-item">Settings</Link>
                          <Link to="/manager" className="dropdown-item" onClick={() => {this.props.changeManagerDisplay('')}}>Manager</Link>
                          <div className="dropdown-divider"></div>
                          <Link to="/intro" className="dropdown-item">Welcome</Link>
                          <Link to="/about" className="dropdown-item" >About</Link>
                          <Link to="/examples" className="dropdown-item">Features</Link>
                          <Link to="/contact" className="dropdown-item">Contact</Link>
                          <Link to="/legal" className="dropdown-item">Legal</Link>
                          <div className="dropdown-divider"></div>
                          <Link to="/logout" className="dropdown-item">Log out</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </header>
      )
    } else {
      return (
        <header id='header' className="sticky-top  App-header">
                <nav className="navbar navbar-dark navbar-expand-sm justify-content-between">
                  <Link to="/intro" className="navbar-brand brand-font" id='intro'>
                  <img src={logo} className="App-logo" alt="logo"/>
                  <div className='invisible-when-small'>
                      Goodminder
                    </div>
                  </Link>
                  <div className="navbar-expand" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <div className="invisible-when-super-small">
                      <li>
                        {this.renderButton()}
                      </li>
                    </div>
                    <div className="invisible-when-super-small">
                      <li>
                        <Link to="/signup" className="nav-link paragraph-font btn-flat">
                          Sign Up
                        </Link>
                      </li>
                    </div>
                      <li className="nav-item dropdown">
                        <button className="nav-link paragraph-font btn-flat menu dropdown-toggle" type="button" id="dropdownMenuButton"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            More
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                          <Link to="/intro" className="dropdown-item">Welcome</Link>
                          <div className="dropdown-divider"></div>
                          <Link to="/about" className="dropdown-item" >About</Link>
                          <Link to="/examples" className="dropdown-item">Features</Link>

                          <Link to="/contact" className="dropdown-item">Contact</Link>
                          <Link to="/legal" className="dropdown-item">Legal</Link>
                          <div className="dropdown-divider"></div>
                          <Link to="/login" className="dropdown-item">
                            Log In
                          </Link>
                          <Link to="/signup" className="dropdown-item">
                            Sign Up
                          </Link>

                        </div>
                      </li>

                    </ul>
                  </div>
                </nav>
              </header>
      )
    }
  }
  renderButton() {
    if (this.props.auth) {
      return (
        <button className="nav-link paragraph-font btn-flat logIn" onClick={() => this.props.postSignout()}>Log Out</button>
      )
    } else {
      return (
        <Link to="/login" className="nav-link paragraph-font btn-flat">
          Log In
        </Link>
      )
    }
  }
  render() {
    return (
      <div>{this.renderNavbar()}</div>
          )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
    user: state.user
  };
}

export default connect(mapStateToProps, actions)(Navbar);
