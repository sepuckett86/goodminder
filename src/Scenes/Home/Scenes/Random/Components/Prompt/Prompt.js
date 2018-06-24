import React from 'react';
import './Prompt.css';
import Stars from '../../../../Components/Stars/Stars';
import MediaQuery from 'react-responsive';

class Prompt extends React.Component {
  getPromptWithId() {
    for (let i = 0; i < this.props.prompts.length; i++) {
      if (this.props.prompts[i].id === this.props.gminder.promptID) {
        return this.props.prompts[i].promptText;
      }
    }
  }

  render() {
    const prompt = this.getPromptWithId();
    const style = {
      fontSize: '20px'
    }
    return(
      <div id="prompt">
        {/* MediaQuery for large screen */}
          <MediaQuery query="(min-width: 576px)">
            <div className="row">
              <div className="col alignL">
                <Stars
                  gminder={this.props.gminder}

                  />
              </div>
            <div className="col alignR">
              <p>Added {this.props.gminder.recordedDate} from Prompt Collection: {this.props.gminder.collection}</p>
            </div>
            </div>
          </MediaQuery>
          <div className="lato">
            <div className="g-box">

                <p className="lato" style={style}>{prompt}</p>

            </div>
            <br />

            <div className="g-box">

            <br />
            <h4>{this.props.gminder.mainResponse}</h4><br />

            </div>

            { this.props.gminder.reason ?
              <div>
            <br />
            <div className="g-box" style={style}>

            {this.props.gminder.reason}

            </div>

          </div>
            : null}
</div>
            <br />
       {/* MediaQuery for small screen */}
       <MediaQuery query="(max-width: 576px)">

          <Stars
            starFun={this.props.starFun}
            gminder={this.props.gminder}

            />
          <br />
            <p>{this.props.gminder.recordedDate ? (this.props.gminder.recordedDate + ' | '): null}
               {this.props.gminder.collection}</p>
       </MediaQuery>


    </div>
  )
  }
}

export default Prompt;
