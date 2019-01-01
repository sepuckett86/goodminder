import React from 'react';
import Footer from './Footer';
import logo_dark from '../../images/logo_dark.png';

export default () => {
  return(
    <main>

      <div className="bgimg-2 parallax">
        <div className="caption">
          <span className="border comfortaa">About</span>
        </div>
      </div>
      <div className="opaque-container">
        <div className="container">

          <br />

          <h4 className='card-body'>Goodminder is like a journal, yet with a positive focus.</h4>
          <div style={{'textAlign': 'left'}}>
          <ul>
          <li>Have you ever recalled something wonderful, useful, funny, touching, or inspiring that you haven't thought about for months or years, and been thankful that something reminded you of it?</li>
          <li>Do you ever have bad days and want to be cheered up?</li>
          <li>Would you like to see wisdom from yourself sometimes, rather than other people?</li>
          </ul>
          <br/>
          </div>
          <h4>Goodminder is our response to these questions.</h4>
          <br/>

          <hr/>
          <br/>
          <h1>
            Terms</h1>

          <div className="card top">
            <div className="card-body">
              <h5 className="card-title">goodminder
                <div className="noun" style={{fontSize: '12px'}}><i>noun</i>
                </div>
              </h5>
              <p className="card-text">A prompt response, quote or custom entry crafted by <b>you</b>.</p>
              <p className="card-text">Purpose -- to <b><u>remind</u></b> you of the <b><u>good</u></b> in your life.</p>
            </div>
            <hr />
            <div className="card-body">
              <h5 className="card-title">Goodminder
                <div className="noun" style={{fontSize: '12px'}}><i>noun</i>
                </div>
              </h5>
              <p className="card-text">A web app that allows you to collect goodminders.</p>
            </div>
          </div>

        <br />
          <br />

          <h1>Inspirations</h1>
          <p>
            "A human being is not one in pursuit of happiness but rather in search of a reason to be happy."
          </p>
          <p><a href="https://www.amazon.com/Mans-Search-Meaning-classic-Holocaust-ebook/dp/B00EKOC0HI" target="_blank" rel="noopener noreferrer">--Man's Search for Meaning</a>
            {' '}by Viktor E. Frankl</p>
            <br />
            <p>
              "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
            </p>
            <p><a href="https://medium.com/the-mission/my-favourite-quote-of-all-time-is-a-misattribution-66356f22843d" target="_blank" rel="noopener noreferrer">--The Story of Philospohy</a>{' '}by Will Durant</p>
            <br />
            <p>
            The concept of the Patronus from Harry Potter by J.K. Rowling. To successfully repel dementors, dark soul-sucking beings, Harry must focus on a happy memory. The strength of the feelings produced from this memory is what determines the strength of the protective force (Patronus).
            </p>
            <br />


          <hr/>
          <br />
          <h1>Who we are</h1>


          <img src='https://avatars1.githubusercontent.com/u/29714675?s=400&v=4' alt='sepuckett86_picture' height='100px' width='auto' style={{borderRadius:'50%', margin: '2%'}}/>
          <img src='https://avatars1.githubusercontent.com/u/17328443?s=400&v=4' alt='codegold79_picture' height='100px' width='auto' style={{borderRadius:'50%', margin: '2%'}}/>
          <p>
            <a href="https://github.com/sepuckett86" target="_blank" rel="noopener noreferrer">sepuckett86</a>
            {' '} and {' '}
             <a href="https://github.com/codegold79" target="_blank" rel="noopener noreferrer">codegold79</a>
          </p>
          <p>
            We are two friends who met in college and majored in something other than computer science. We both currenty share a passion for learning coding and web development.
          </p>

          <br />
          <hr/>
          <br />
          <h1>Resources</h1>
          <p>A big thanks go to all of the great resources available online listed here:
          </p>

          <div className="container">
            <div className="row">
              <div className="col-sm">
                <ul className='clean'>
                  <dl>
                    <b>Visual Elements</b>
                  </dl>
                  <li>
                    <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" rel="noopener noreferrer" target="_blank">Bootstrap 4</a>
                  </li>
                  <li>
                    <a href="https://fontawesome.com/icons?d=gallery" rel="noopener noreferrer" target="_blank">Font Awesome 5</a>
                  </li>
                  <li>
                    <a href="https://www.freelogodesign.org/index.html" rel="noopener noreferrer" target="_blank">Free Logo Design</a>
                  </li>
                  <li>
                    <a href="https://fonts.google.com/" rel="noopener noreferrer" target="_blank">Google Fonts</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm">
                <ul className='clean'>
                  <dl>
                    <b>Tutorials and Help</b>
                  </dl>
                  <li title="Tania Rascia">
                    <a href="https://www.taniarascia.com/" rel="noopener noreferrer" target="_blank">Tania Rascia</a>
                  </li>
                  <li>
                    <a href="https://www.w3schools.com/" rel="noopener noreferrer" target="_blank">w3schools</a>
                  </li>
                  <li>
                    <a href="https://www.freecodecamp.org/" rel="noopener noreferrer" target="_blank">freeCodeCamp</a>
                  </li>
                  <li>
                    <a href="https://www.codecademy.com/" rel="noopener noreferrer" target="_blank">codecademy</a>
                  </li>
                  <li>
                    <a href="https://stackoverflow.com/" rel="noopener noreferrer" target="_blank">stack overflow</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm">
              <ul className='clean'>
                <dl>
                  <b>Boilerplates</b>
                </dl>
                <li>
                  <a href="https://github.com/francescomalatesta/laravel-api-boilerplate-jwt" rel="noopener noreferrer" target="_blank">Francesco Malatesta's Laravel JWT Authentication</a>
                </li>
                <li>
                  <a href="https://www.udemy.com/react-redux-tutorial/" rel="noopener noreferrer" target="_blank">Stephen Grider's Authentication Udemy Class</a>
                </li>
              </ul>
              </div>
            </div>
          </div>


          <br />
          <hr/>
          <br />

          <h1>Support Us!</h1>
          <p>The more support we get, the more we will work on this site to improve it.</p>
          <p>If you'd like to donate, please contact us
            {' '}<a href="/contact">here</a>. Thanks a lot!</p>

          <p>
            <button className="btn btn-green" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapseExample">
              "Secret" Projects!!
            </button>
          </p>
          <div className="collapse" id="collapse3">
            <div className="card card-body">
              <ul className='clean'>
                <dl>
                  <b>Projects for the future</b>
                </dl>
                <li>Goodminder phone app</li>
                <li>More layout options</li>
                <li>Goodminder decks</li>
                <li>Options to privately share goodminders</li>
                <li>Fun rewards for using our site</li>
              </ul>
            </div>
          </div>
<br />

          <br/><br/><br/><br/>
        </div>
      </div>
      <Footer />
    </main>

  )
}
