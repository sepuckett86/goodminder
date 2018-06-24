import React, {Component} from 'react';
import './Intro.css'

class Intro extends Component {

  render() {
    return (<main>

      <div className="container">
        <br/>
        <div className="box-clear">
          <div>
            <h1 className='barlow'>Tired of social media bumming you out?</h1>
          </div>
        </div>
      </div>

      <div className="container center-section">
        <div>
          <div className="row">
            <div className="col"></div>
            <div className="col-12 marker">
              Step into a place where the focus is on the good in your life
            </div>
            <div className="col"></div>
          </div>

        </div>
      </div>
      <div className="container">
        <div className="box-clear">

          <ul>
            <li>Record positive life experiences to read at a later date.</li>
            <li>Collect inspiring sayings, quotes, snippets.</li>
            <li>Be inspired by prompts that help you remember what you live for.</li>
            <li>Create a personal random thought generator.</li>
            <li>Export all of your saved thoughts, including as a PDF that can be printed as a book.</li>
          </ul>
        </div>
      </div>

      <br/>
      <p>
        <a href="/" className='btn button-standard'>
          <i className="fas fa-arrow-circle-right"></i>
          {' '}
          Get Started</a>
      </p>
      <br/>
      <br/></main>);
  }
}

export default Intro;
