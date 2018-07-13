import React, {Component} from 'react';
import './Intro2.css'



class Intro2 extends Component {

  render() {
    return (
      <main>
        <section id='callToAction' className='comfortaa'>

            <div id='div1'>
              <div id='middle' className='container'>
                <div>
                <img src="/favicon.png" alt="logoDark" height="60px"/>
                </div>

                  <br />

              <h2 id='callHeader1'>Tired of social media?
              <hr /></h2>

              <h1 id='callHeader2'>Enter a place where the focus is on the good in your life</h1>

                <br />

              <div>
                <a href='#followUp'  className="btn btn-custom">Learn More</a>
              </div>
              </div>
            </div>
            <div id='div2'>
            </div>

        </section>
        <section id='followUp'>
          <div id='div3'>
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
                  <a className='btn-small btn-left btn' href='/about' style={{minWidth: '20%'}}>
                    About
                  </a>
                  <a className='btn-small btn-center btn' href='/examples' style={{minWidth: '20%'}}>
                    Examples
                  </a>
                  <a className='btn-small btn-right btn' href='/FAQ' style={{minWidth: '20%'}}>
                    FAQ
                  </a>
                </div>
              </div>
              <br />
              <div>
                <a href='/' id='pressMe' className="btn btn-custom">Get Started</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Intro2;
