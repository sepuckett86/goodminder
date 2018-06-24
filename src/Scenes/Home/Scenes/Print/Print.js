import React from 'react';
import Stars from '../../Components/Stars/Stars'


class Print extends React.Component {
  hideAppHeader() {
    let header = document.getElementById("header");
    header.style.display = "none";
  }

  hideBackground() {
    document.body.style.backgroundImage = "none";

  }

  getPromptWithId() {
    for (let i = 0; i < this.props.prompts.length; i++) {
      if (this.props.prompts[i].id === this.props.gminder.promptID) {
        return this.props.prompts[i].promptText;
      }
    }
  }

  getDate() {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    const fullDate = `${month}/${day}/${year}`;
    return fullDate;
  }

  render() {
    const mediaStyle = {
      padding: '10px',
      margin: '10px'
    }

    const logoStyle = {
        width: '45px',
        height: 'auto',
        paddingBottom: '7px',
        paddingRight: '5px'
      }

      const prompt = 0 || this.getPromptWithId();

    return(
      <div style={mediaStyle}>
      {this.hideAppHeader()}
      {this.hideBackground()}

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

          {this.props.gminder.promptID ?
          (<div className="media prompt">
            <div className="media-body">
              <p className="lato">{prompt}</p>
            </div>
          </div>)
          : null }
          <br />

          <div className="media answer">
          <div className="media-body">
          <br />
          <h4 className="lato">{this.props.gminder.mainResponse}</h4><br />
          </div>
          </div>

          { this.props.gminder.reason ?
            <div>
          <br />
          <div className="media reason">
          <div className="media-body lato">
          {this.props.gminder.reason}
          </div>
          </div>
        </div>
          : null}
          <br /><br />
          <div className="row comfortaa">
            <div className="col alignL">
            <p>Made with care</p>
            </div>
            <div className="col">
            <p>Printed with <img src="favicon.png" alt="goodminderLogo" style={logoStyle}/>goodminder</p>
            </div>
            <div className="col alignR">
            <div id="date">{this.getDate()}</div>
            </div>
          </div>

      </div>)
}
}
export default Print;
