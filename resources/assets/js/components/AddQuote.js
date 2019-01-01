import React from 'react';

class AddQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAnswer: '',
      inputReason: '',
      inputAuthor: '',
      inputCollection: '',
      inputSource: '',
      inputWho: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    if (event.target.id === "create-goodminder") {
      const gminder = this.newGminder();
      this.props.setGminderForDatabase(gminder);
    }
  }

  handleChange(event) {
    if (event.target.id === "quote-answer") {
      this.setState({inputAnswer: event.target.value});
    }
    if (event.target.id === "quote-reason") {
      this.setState({inputReason: event.target.value});
    }
    if (event.target.id === "quote-author") {
      this.setState({inputAuthor: event.target.value});
    }
    if (event.target.id === "quote-collection") {
      this.setState({inputCollection: event.target.value});
    }
    if (event.target.id === "quote-source") {
      this.setState({inputSource: event.target.value});
    }
    if (event.target.id === "quote-who") {
      this.setState({inputWho: event.target.value});
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

  newGminder() {
    const date = this.getDate();
    const newGminder = {
      category: 'quote',
      mainResponse: this.state.inputAnswer,
      author: this.state.inputAuthor,
      prompt_id: null,
      reason: this.state.inputReason,
      source: this.state.inputSource,
      who: this.state.inputWho,
      rating: 0,
      collection: this.state.inputCollection,
      publicFlag: 0,
    }
    console.log(newGminder)
    return newGminder;
  }

  render() {
    return(
      <div>
      <hr />

          <form>
              <div className="form-group">
                  <label>Quote</label>
                  <textarea id="quote-answer" value={this.state.inputAnswer}
                    onChange={this.handleChange} className="form-control" rows="3">
                    </textarea>
              </div>
              <div className="form-group">
                  <label>Who Said It</label>
                  <input type="text" value={this.state.inputWho}
                    onChange={this.handleChange} className="form-control"
                    id="quote-who"
                    />
              </div>
              <br />

                  <p>
                    <button className="btn btn-green" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      View more fields (optional)
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample">
                    <div className="form-group">
                        <label>Author (if "Who Said It" is a fictional character)</label>
                        <input type="text" value={this.state.inputAuthor}
                          onChange={this.handleChange} className="form-control"
                          id="quote-author"
                          />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Source</label>
                        <input type="text" value={this.state.inputSource}
                          onChange={this.handleChange} className="form-control"
                          id="quote-source"
                          />
                    </div>


                   <br />
                    <label>Reason you like this quote</label>
                    <textarea className="form-control"
                      value={this.state.inputReason}
                      onChange={this.handleChange}
                      id="quote-reason" rows="3"
                      ></textarea>
                    <br />
                    <div className="form-group">
                        <label>Collection</label>
                        <input type="text" value={this.state.inputCollection}
                          onChange={this.handleChange} className="form-control"
                          id="quote-collection" />
                    </div>
                    <br />
                  </div>






          </form>
          {/* Button trigger modal */}
          <button id="create-goodminder" type="button" className="btn btn-green" data-toggle="modal" onClick={this.handleClick} data-target="#exampleModal">
            Create Goodminder
          </button>
      </div>

    )
  }
}

export default AddQuote;
