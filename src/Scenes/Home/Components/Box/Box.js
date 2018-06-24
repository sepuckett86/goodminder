import React from 'react';
import './Box.css';

import Prompt from './Components/Prompt/Prompt';
import Quote from './Components/Quote/Quote';
import Custom from './Components/Custom/Custom';
import Button from './Components/Button/Button';

class Box extends React.Component {

  chooseDisplay() {
    let gminder = this.props.display;
    let prompts = this.props.prompts;
    if(gminder.category === 'prompt') {
      return <Prompt
        gminder={gminder}
        prompts={prompts}
        starFun={this.props.starFun}
        />
    }
    if(gminder.category === 'quote') {
      return <Quote
        gminder={gminder}
        starFun={this.props.starFun}
        />
    }
    if(gminder.category === 'custom') {
      return <Custom
        gminder={gminder}
        starFun={this.props.starFun}
        />
    } else {
      return <p>Category Error</p>
    }
  }


  render() {
    return(
      <div>

        {/*
          Responsive Design
          For small screen (phone)
        */}
        <div className="d-sm-none">
          <div className="backfill">
            <div>
            <span className="">
              <button className="button-span-2" onClick={this.props.backClick}><i className="fas fa-arrow-left"></i> </button>
            </span>
            {'\u00A0'}
            <span className="">
            <button className="button-span-2" onClick={this.props.nextClick}> <i className="fas fa-arrow-right"></i></button>
            </span>
            </div>

          {this.chooseDisplay()}

          <hr />
          </div>
        <br />

          {/* Check whether there is more than one gminder stored */}
          { this.props.gms.length > 1 ?
            <div>
              <div className="row">

          <div className="col col-12 col-sm-4">
            <Button
              name="Add"
              onClick={this.props.addClick}
              />
          </div>
          <div className="col col-12 col-sm-4">
            <Button
              name="More"
              onClick={this.props.moreClick}
              />
          </div>
        </div>
        </div>
          : null
        }
        { this.props.gms.length === 1 ?
          <div>
          <div className="row">
          <div className="col col-12 col-sm-4">
            <Button
              name="Add"
              onClick={this.props.addClick}
              />
          </div>
          <div className="col col-12 col-sm-4">
            <Button
              name="More"
              onClick={this.props.moreClick}
              />
          </div>
        </div>
        </div>
          : null
        }

        </div>

        {/* For large screen */}
        <div className="d-none d-sm-block">
          <div>
          <span>
            <button className="btn button-span-3" onClick={this.props.backClick}><i className="fas fa-arrow-left"></i> </button>
          </span>
          {/* Spaces */}
          {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
          <span>
          <button className="btn button-span-3" onClick={this.props.nextClick}> <i className="fas fa-arrow-right"></i></button>
          </span>
          </div>

          <div className="box">

      			{this.chooseDisplay()}
            <div className="alignR">
              <br />
            <a href="edit.php" className="button-clear"><i className="fas fa-edit"></i></a>
            <a href="print.php" className="button-clear"><i className="fas fa-print"></i></a>
          </div>
          </div>
          <br />

        { this.props.gms ?
          <div>
          <div className="row">
          <div className="col col-sm-6">
            <Button
              name="Add"
              onClick={this.props.addClick}
              />
          </div>
          <div className="col col-sm-6">
            <Button
              name="More"
              onClick={this.props.moreClick}
              />
          </div>
        </div>
        </div>
          : null
        }

        </div>

        <br />

      </div>
    );
  }
}

export default Box;
