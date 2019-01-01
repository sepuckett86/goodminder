import React, { Component } from 'react';
import '../../css/Examples.css';
import Footer from './Footer';

class Examples extends Component {

  render() {
    return (
      <main>
        <div className="bgimg-2 parallax">
          <div className="caption">
            <span className="border comfortaa">Features</span>
          </div>
        </div>
        <div className="opaque-container">
          <br />
          <div className="container">
            <br />
          <h5 className="comfortaa">Here's what you can do with your account:</h5>
        <br />
    <div className="row examples-row">
      <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
        <div className="card examples-card">
          <br />
          <div>
            <i className="fas fa-print icon"></i>
          </div>
          <div className="card-body">
            <h5 className="card-title">Print</h5>
            <p className="card-text">Print out your goodminders to hang on your wall or save in a book.</p>
            </div>
        </div>
      </div>
      <br />
    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
      <div className="card examples-card">
      <br />
      <div>
        <i className="fas fa-book-open icon"></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">Read</h5>
        <p className="card-text">Enjoy your goodminders on your computer with our appealing layout.</p>
      </div>
      </div>
      <br />
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
      <div className="card examples-card">
        <br />
        <div>
        <i className="fas fa-save icon"></i>
        </div>
      <div className="card-body">
        <h5 className="card-title">Export</h5>
        <p className="card-text">Save all of your hard work to your desktop with the click of a button.</p>
      </div>
      </div>
      <br />
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
      <div className="card examples-card">
        <br />
        <div>
        <i className="fas fa-envelope-square icon"></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">Email</h5>
        <p className="card-text">
        <b>Coming soon</b>
        <br/>
        Choose to receive a goodminder by email daily, weekly, or never
        </p>
      </div>
      </div>
      <br />
    </div>

    </div>

  </div>
  <br /><br /><br /><br />
      </div>
      <Footer />
      </main>

    );
  }
}

export default Examples;
