// Note: modal cannot be inside responsive design display or it will not work for all screen sizes

import React from 'react';
import './Add.css';
import Button from '../../Components/Button/Button';
import AddCustom from './Components/AddCustom/AddCustom';
import AddPrompt from './Components/AddPrompt/AddPrompt';
import AddQuote from './Components/AddQuote/AddQuote';

import MediaQuery from 'react-responsive';

// Utils
import Gminder from '../../../../Utils/Gminder'

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'empty',
      gminderForDatabase: {}
    }

    this.changeType = this.changeType.bind(this);
    this.setGminderforDatabase = this.setGminderforDatabase.bind(this);
    this.changeDatabase = this.changeDatabase.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick(event) {
    if (event.target.id === "prompt-tab") {
      this.changeType('prompt');
    }
    if (event.target.id === "quote-tab") {
      this.changeType('quote');
    }
    if (event.target.id === "custom-tab") {
      this.changeType('custom');
    }
  }

  changeDatabase() {
    if (!this.state.gminderForDatabase.mainResponse){
      alert('Must enter main response')
    } else {
      Gminder.addGminder(this.state.gminderForDatabase).then(() => {
        // added 'then' to avoid changing to random before database change
        // and not including new goodminder
        this.props.changeDisplay('random');
      });

    }
  }

  setGminderforDatabase(gminder) {
    this.setState({gminderForDatabase: gminder})
  }

  chooseType() {
    if(this.state.type === 'empty') {
      return(<div>
        <div className='my-flex-parent'>
          <button id="prompt-tab" className='my-flex-child btn-left btn' onClick={this.handleClick}>
            Prompt
          </button>
          <button id="quote-tab" className='my-flex-child btn-center btn' onClick={this.handleClick}>
            Quote
          </button>
          <button id="custom-tab" className='my-flex-child btn-right btn' onClick={this.handleClick}>
            Custom
          </button>
        </div>
      </div>)
    }
    if(this.state.type === 'prompt') {
      return(<div>
        <div className='my-flex-parent'>
          <button id="prompt-tab" className='my-flex-child-active btn-left btn' onClick={this.handleClick}>
            Prompt
          </button>
          <button id="quote-tab" className='my-flex-child btn-center btn' onClick={this.handleClick}>
            Quote
          </button>
          <button id="custom-tab" className='my-flex-child btn-right btn' onClick={this.handleClick}>
            Custom
          </button>
        </div>
        <AddPrompt
              changeType={this.changeType}
              changeDisplay={this.props.changeDisplay}
              prompts={this.props.prompts}
              randomClick={this.props.randomClick}
              setPrompt={this.props.setPrompt}
              setCollection={this.props.setCollection}
              setGminderForDatabase={this.setGminderforDatabase}
              random="yes" />
            </div>)
    }
    if(this.state.type === 'quote') {
      return(<div>
        <div className='my-flex-parent'>
          <button id="prompt-tab" className='my-flex-child btn-left btn' onClick={this.handleClick}>
            Prompt
          </button>
          <button id="quote-tab" className='my-flex-child-active btn-center btn' onClick={this.handleClick}>
            Quote
          </button>
          <button id="custom-tab" className='my-flex-child btn-right btn' onClick={this.handleClick}>
            Custom
          </button>
        </div>
      <AddQuote
              changeType={this.changeType}
              randomClick={this.props.randomClick}
              changeDisplay={this.props.changeDisplay}
              setGminderForDatabase={this.setGminderforDatabase} />
            </div>)
    }
    if(this.state.type === 'custom') {
      return(<div>
        <div className='my-flex-parent'>
          <button id="prompt-tab" className='my-flex-child btn-left btn' onClick={this.handleClick}>
            Prompt
          </button>
          <button id="quote-tab" className='my-flex-child btn-center btn' onClick={this.handleClick}>
            Quote
          </button>
          <button id="custom-tab" className='my-flex-child-active btn-right btn' onClick={this.handleClick}>
            Custom
          </button>
        </div>
          <AddCustom
              changeType={this.changeType}
              randomClick={this.props.randomClick}
              changeDisplay={this.props.changeDisplay}
              setGminderForDatabase={this.setGminderforDatabase}/>
        </div>)
    }
  }

  changeType(type) {
    if(type === 'prompt'){
      this.setState({
        type: 'prompt'
      })
    }
    if(type === 'quote'){
      this.setState({
        type: 'quote'
      })
    }
    if(type === 'custom'){
      this.setState({
        type: 'custom'
      })
    }
  }
  render() {
    return(
      <div className="container">

        {/* Modal - Must be outside of responsive design displays */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create Goodminder</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Make permanent change to database?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.changeDatabase}>Confirm</button>
              </div>
            </div>
          </div>
        </div>


          <br />

          <div className="box">
    	         <p>Choose an entry type</p>
               {this.chooseType()}
          </div>

          {/* MediaQuery for small screen */}
          <MediaQuery query="(max-width: 576px)">
            <hr />
          </MediaQuery>
         <br />
         <div className="row">
           <div className="col">
        <Button
          id='random'
          name="Back"
          onClick={this.props.changeDisplay}
          />
        <br />

      <br />
    </div>
    <br />
        </div>





  </div>
  )
  }
}

export default Add;
