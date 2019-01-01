import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import ScrollableAnchor from 'react-scrollable-anchor';

import '../../css/Intro.css';

import Footer from './Footer';

class Intro extends Component {
  scrollToTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return(
      <main>
        <div>
          <section id='sectionCallToAction' className='comfortaa'>
            <div id='outerDiv'>
                <MediaQuery query="(min-width: 800px)">
                <br /><br />
                </MediaQuery>
              <div id='div1'>
                <div id='introMiddle' className='sectionCallToActionContent'>
                <br />
                <h1 id='callHeader1'>
                  <div className='gradient'>
                  Focus on the Good</div>
                  <hr />
                </h1>
                <h2 id='callHeader2'><span style={{backgroundColor: "white"}}>Goodminder</span> is a <b>free web-app</b> to catalogue ideas that make life worth living.
                  <b> Collect</b> and <b>create</b> text meaningful to <b>you</b>.</h2>
                  <br />
                <div className='followUp'>
                  <br />
                  <a id='followUpButton' href='#followUp' className="btn btn-custom header-font">Learn More</a>
                </div>
                <br />
                </div>
              </div>

            </div>
          </section>
          <ScrollableAnchor id={'followUp'}>
          <section className='followUpStyles'>
            <div id='sectionList'>
              <div id='inspirationList' className="container">
                <ul>
                  <li>Record positive life experiences to read at a later date.</li>
                  <li>Collect inspiring sayings, quotes, snippets.</li>
                  <li>Be inspired by prompts that help you remember what you live for.</li>
                  <li>Create a personal random thought generator.</li>
                  <li>Export all of your saved thoughts, including as a PDF that can be printed as a book.</li>
                </ul>
                <div>
                  <div style={{flexDirection: 'row', display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <Link to='/about' onClick={() => this.scrollToTop()} className='btn-green btn-left btn' style={{minWidth: '20%'}}>
                      About
                    </Link>
                    <Link to='/examples' onClick={() => this.scrollToTop()} className='btn-green btn-center btn' style={{minWidth: '20%'}}>
                      Features
                    </Link>
                    <Link to='/contact' onClick={() => this.scrollToTop()} className='btn-green btn-right btn' style={{minWidth: '20%'}}>
                      Contact
                    </Link>
                  </div>
                </div>
                <br />
                <div>
                  <Link to='/signup' onClick={() => this.scrollToTop()} id='pressMe' className="btn btn-custom header-font">Get Started</Link>
                </div>
                <br />
              </div>
            </div>
          </section>
          </ScrollableAnchor>
          <Footer />
        </div>
        </main>
    )
  }
}
export default Intro;
