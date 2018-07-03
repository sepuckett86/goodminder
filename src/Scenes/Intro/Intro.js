import React, {Component} from 'react';
import './Intro.css'

class Intro extends Component {

  render() {
    return (<main>
      <header className="masthead text-center text-white d-flex">
  <div className="container my-auto">
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <img src="/favicon.png" alt="logoDark" height="60px"/>
        <br /><br />
          <h2 className="text-faded mb-5">Tired of social media?</h2>

          <hr />
      </div>

      <div className="col-lg-10 mx-auto">

        <h1 className="">

          <strong>Enter a place where the focus is on the good in your life</strong>
        </h1>
        <br />

        <a className="btn btn-small" href="#list">Find Out More</a>
      </div>
    </div>
  </div>

</header>

      <section id='list'>
<br /><br /><br /><br />
      <div className="container">
          <ul>
            <li>Record positive life experiences to read at a later date.</li>
            <li>Collect inspiring sayings, quotes, snippets.</li>
            <li>Be inspired by prompts that help you remember what you live for.</li>
            <li>Create a personal random thought generator.</li>
            <li>Export all of your saved thoughts, including as a PDF that can be printed as a book.</li>
          </ul>
          <br/>
          <p>
            <a href="/" className='btn btn-small'>
              <i className="fas fa-arrow-circle-right"></i>
              {' '}
              Get Started</a>
          </p>
          <br/>

            <br /><br /><br /><br /><br />
      </div>



      <br/>
    </section>
  </main>);
  }
}

export default Intro;
