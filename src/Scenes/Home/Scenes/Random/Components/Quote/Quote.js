import React from 'react';
import './Quote.css';
import Stars from '../../../../Components/Stars/Stars';
import MediaQuery from 'react-responsive';

class Quote extends React.Component {
  makeCredit() {
    const quote = this.props.gminder;
    if (quote.who && quote.source && quote.author) {
      return `-- ${quote.who}, from ${quote.source} by ${quote.author}`
    }
    if (!quote.who && quote.source && quote.author) {
      return `-- ${quote.author}, ${quote.source}`;
    }
    if (!quote.who && !quote.source && quote.author) {
      return `-- ${quote.author}`;
    }
    if (!quote.who && !quote.source && !quote.author) {
      return null;
    }
    if (quote.who && !quote.source && quote.author) {
      return `-- ${quote.who}, from a work by ${quote.author}`;
    }
    if (quote.who && !quote.source && !quote.author) {
      return `-- ${quote.who}`;
    }
  }
  render() {

    return(
        <div id="quote">

          {/* MediaQuery for large screen */}
            <MediaQuery query="(min-width: 576px)">
            <div className="row">
              <div className="col alignL">
                <Stars
                  gminder={this.props.gminder}
                  />
              </div>
              <div className="col alignR">
                <p>Added {this.props.gminder.recordedDate} from Quote Collection: {this.props.gminder.collection}</p>
              </div>
            </div>
            </MediaQuery>

      			<div className="g-box">
      			<div className="media-body">
      			<br />
      			<h4 className="lato alignL" id="quote-random_0">
      				"{this.props.gminder.mainResponse}"</h4>
              <br />
              <p className="lato alignR" id="quote-who-source-author">
                {this.makeCredit()}</p>
      				<br />
      			</div>
      			</div>
      			<br />
            {/* Determine if there is reason content */}
            { this.props.gminder.reason !== null ?
              (<div className="media reason">
              <div className="media-body lato" id="quote-reason">
                {this.props.gminder.reason}
              </div>
            </div>)
              : null }

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

export default Quote;
