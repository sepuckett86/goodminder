import React, { Component } from 'react';
import './Faq.css'

class Faq extends Component {

  render() {
    return (
      <main>
  	<div className="bgimg-2 parallax">
  	<div className="caption">
  		<span className="border comfortaa">Questions/Contact</span>
  	</div>
  	</div>
  	<div className="opaque-container">
    <div className="container">
  		<br />
      <h1>FAQ</h1>
      <br />
  			 <p><b>Q</b>: What is different about Goodminder compared to other quote websites?</p>
  			 <p><b>A1</b>: Prompts inspire you to remember the positive moments.</p>
  			 <p><b>A2</b>: All of your goodminders are private by default.
  			 Self-honesty and your well-being are the focuses here.</p>


         <hr />
         <br />
  			 <h2>Have another question? Want to donate, comment, or make a suggestion?</h2>
  			 <br />
  				 <h1>Contact us here:</h1>
  			 <div id="contact" className="box">
  			<form method="post">
  				<div className="form-group">

            <label for="exampleFormControlInput1">Email address:</label>
  					<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email"/>
  					<br />
  				<label for="firstname">Name: </label><br />
  				<div className="row">
  						<div className="col">
  							<input type="text" className="form-control" placeholder="First" name="firstName"/>
  						</div>
  						<div className="col">
  							<input type="text" className="form-control" placeholder="Last" name="lastName"/>
  						</div>
  				</div>
  				<br />
  				<label for="exampleFormControlTextarea1">What would you like to say?</label>
  				<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="question"></textarea>

  				<div className="form-group row">
  					<div className="col-sm-10">
  						<button className="btn btn-primary" name="btn-faq">Submit</button>
  					</div>
  				</div>
        </div>

        </form>
        </div>
        </div>
  <br /><br />
</div>
  </main>

    );
  }
}

export default Faq;
