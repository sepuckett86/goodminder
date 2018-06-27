import React from 'react';
import Gminder from '../../../../Utils/Gminder';
import Button from '../../Components/Button/Button'

/*
Blurb requirements

Create the cover last after your final page count is known
Use the correct dimensions for files
Files must have an even number of pages
Design your book with a single page on the right, followed by two-page spreads, and ending with a single page on the left
Page counts for 5x8 and 6x9 books must be divisible by six
Use only 100% black ink for text
Do not use spot or registration color
For advanced users, fine tune colors with our ICC profile
Rasterize overly complex vectors (e.g. Illustrator or CAD art)
For full-bleed printing, stretch images to the page's edge
*/



class PDF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gminders: [],
      prompts: [],
      inputPageSize: '',
      inputTitle: '',
      inputAuthor: '',
      totalPages: 0,
      finalGminderContent: [],
      checkboxTitle: false,
      checkboxAuthor: false,
      radioFont: 'font1'
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.calculateTotalPages = this.calculateTotalPages.bind(this);
  }

  componentWillMount() {
    // Get data from database
    Gminder.getGminders().then(res => this.setState({gminders: res.express})).catch(err => console.log(err)).then(() => {
      Gminder.getPrompts().then(res => this.setState({prompts: res.express})).catch(err => console.log(err)).then(() => {
        this.calculateTotalPages();
      })
    })
  }

  handleClick(event) {
    if (event.target.id === "make-PDF") {
      this.makePDF();
    }
  }

  handleChange(event) {
    if (event.target.id === "title") {
      this.setState({inputTitle: event.target.value})
      if (event.target.value) {
        this.setState({checkboxTitle: true})
      } else {
        this.setState({checkboxTitle: false})
      }
    }
    if (event.target.id === "author") {
      this.setState({inputAuthor: event.target.value});
      if (event.target.value) {
        this.setState({checkboxAuthor: true})
      } else {
        this.setState({checkboxAuthor: false})
      }
    }
  }

  handleCheck(event) {
    if (event.target.id === "checkboxTitle") {
      this.setState({checkboxTitle: !this.state.checkboxTitle});
    }
    if (event.target.id === "checkboxAuthor") {
      this.setState({checkboxAuthor: !this.state.checkboxAuthor});
    }
  }

  handleRadio(event) {
    if (event.target.name === 'fontRadio') {
      this.setState({radioFont: event.target.value});
    }
  }

  calculateTotalPages() {
    const length = this.state.gminders.length;
    this.setState({
      totalPages: length
    })
  }

  makeCredit(gminder) {
    const quote = gminder;
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

  makePDF() {
    const jsPDF = require('jspdf');

    var doc = new jsPDF('p', 'cm', [13, 20])
    var sizes = [15]
    var fonts = [
      ['Helvetica', '']
    ];
    var font;
    var size;
    var lines;
    var margin = 4;
    var verticalOffset = margin;
    var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id eros turpis. Vivamus tempor urna vitae sapien mollis molestie. Vestibulum in lectus non enim bibendum laoreet at at libero. Etiam malesuada erat sed sem blandit in varius orci porttitor. Sed at sapien urna. Fusce augue ipsum, molestie et adipiscing at, varius quis enim. Morbi sed magna est, vel vestibulum urna. Sed tempor ipsum vel mi pretium at elementum urna tempor. Nulla faucibus consectetur felis, elementum venenatis mi mollis gravida. Aliquam mi ante, accumsan eu tempus vitae, viverra quis justo.\n\nProin feugiat augue in augue rhoncus eu cursus tellus laoreet. Pellentesque eu sapien at diam porttitor venenatis nec vitae velit. Donec ultrices volutpat lectus eget vehicula. Nam eu erat mi, in pulvinar eros. Mauris viverra porta orci, et vehicula lectus sagittis id. Nullam at magna vitae nunc fringilla posuere. Duis volutpat malesuada ornare. Nulla in eros metus. Vivamus a posuere libero.'

    // Assign font
    switch(this.state.radioFont) {
      case 'font1':
        font = 'Times';
        break;
      case 'font2':
        font = 'Helvetica';
        break;
      case 'font3':
        font = 'Courier';
        break;
      default:
        font = 'Times';
        break;
    }

    // Insert title page
    if (this.state.checkboxTitle || this.state.checkboxAuthor) {
      size = 24;
      if (this.state.checkboxTitle) {
        text = this.state.inputTitle;
      } else {
        text = '';
      }

      lines = doc.setFont(font[0]).setFontSize(size).splitTextToSize(text, 11);
      // This code puts the text on the document.
      doc.text(1, verticalOffset + size / 72, lines);


      // Check for author
      if (this.state.checkboxAuthor) {
        size = 16;
        text = this.state.inputAuthor;
        lines = doc.setFont(font).setFontSize(size).splitTextToSize(text, 11);
        verticalOffset += (lines.length * 4) * size / 72;
        doc.text(1, verticalOffset + size / 72, lines);
      }
      doc.addPage();
      verticalOffset = margin;
    }

    // Cycle through all gminders
    for (let j = 0; j < this.state.gminders.length; j++) {
      const gminder = this.state.gminders[j];
      for (var i in fonts) {
        if (fonts.hasOwnProperty(i)) {

          size = sizes[i]


          // Determine output based on category
          if (gminder.category === 'prompt') {
          // Prompt
            // get prompt text
            let promptText;
            for (let i = 0; i < this.state.prompts.length; i++) {
              if (this.state.prompts[i].id === gminder.promptID) {
                promptText = this.state.prompts[i].promptText;
              }
            }
            text = promptText;
            lines = doc.setFont(font).setFontSize(size).splitTextToSize(text, 11);
            // This code puts the text on the document.
            doc.text(1, verticalOffset + size / 72, lines);
            // This code adjusts vertical placement of next text to prevent overlapping
            verticalOffset += (lines.length * 4) * size / 72;

          // Main Response
            text = gminder.mainResponse;
            lines = doc.setFont(font).setFontSize(size).splitTextToSize(text, 11);
            // This code puts the text on the document.
            doc.text(1, verticalOffset + size / 72, lines)
            // This code adjusts vertical placement of next text to prevent overlapping
            verticalOffset += (lines.length * 4) * size / 72;

          // Reason
            text = gminder.reason;
            lines = doc.setFont(font).setFontSize(size).splitTextToSize(text, 11);
            // This code puts the text on the document.
            doc.text(1, verticalOffset + size / 72, lines)
            // Reset vertical Offset for next page
            verticalOffset = margin;
          }
          if (gminder.category === 'quote') {
            // Main Response
            text = '"' + gminder.mainResponse + '"';
            lines = doc.setFont(font).setFontSize(size).splitTextToSize(text, 11)
            // This code puts the text on the document.
            doc.text(1, verticalOffset + size / 72, lines)
            verticalOffset += (lines.length * 4) * size / 72;
            // Credit
            text = this.makeCredit(gminder);
            lines = doc.setFont(font).setFontSize(size).splitTextToSize(text, 11)
            // This code puts the text on the document.
            doc.text(1, verticalOffset + size / 72, lines)
            // Reset vertical Offset for next page
            verticalOffset = margin;
          }
          if (gminder.category === 'custom') {
            text = gminder.mainResponse;
            lines = doc.setFont(font).setFontSize(size).splitTextToSize(text, 11);
            // This code puts the text on the document.
            doc.text(1, verticalOffset + size / 72, lines)
            // Reset vertical Offset for next page
            verticalOffset = margin;
          }

        }
      }
      if (j < this.state.gminders.length - 1) {
        // make new page if not last gminder
        doc.addPage();
      }

    }

    doc.save('small_tradebook.pdf')

  }
  render() {
    const courier = {
      fontFamily: 'courier'
    };
    const helvetica = {
      fontFamily: 'helvetica'
    };
    const times = {
      fontFamily: 'times'
    };
    const small = {
      fontSize: '16px'
    };
    const medium = {
      fontSize: '24px'
    };
    const large = {
      fontSize: '36px'
    };

    return (<div>
      {console.log(this.state)}
      <div className='container box alignL'>
        <div className="alert alert-danger" role="alert">
          Only PDF button works now, none of the customizations are functional
        </div>
        <h1>Customize PDF</h1>
        <form>
          <div className="form-group">
            <h4>Title</h4>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-text">

                  <input id='checkboxTitle' type="checkbox" onClick={this.handleCheck} checked={this.state.checkboxTitle} aria-label="Checkbox for following text input"/>
                </div>
              </div>
              <input type="text" value={this.state.inputTitle} onChange={this.handleChange} className="form-control" id="title" placeholder="optional - this creates a title page"/>
            </div>
          </div>
          <div className="form-group">
            <h4>Author</h4>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input id='checkboxAuthor' type="checkbox" onClick={this.handleCheck} checked={this.state.checkboxAuthor} aria-label="Checkbox for following text input"/>
                </div>
              </div>
              <input type="text" value={this.state.inputAuthor} onChange={this.handleChange} className="form-control" id="author" placeholder="optional - this creates an author on the title page"/>
            </div>
          </div>
          <div className='row'>
            <div className='col col-12 col-md-4'>
              <h4>Page Size</h4>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="sizeRadio" id="sizeRadio1" value="option1" defaultChecked/>
                <label className="form-check-label" htmlFor="inlineRadio1">5×8 in, 13×20 cm</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="sizeRadio" id="sizeRadio2" value="option2" disabled/>
                <label className="form-check-label" htmlFor="inlineRadio2">6×9 in, 15×23 cm</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="sizeRadio" id="sizeRadio3" value="option3" disabled/>
                <label className="form-check-label" htmlFor="inlineRadio3">8×10 in, 20×25 cm</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="sizeRadio" id="sizeRadio4" value="option4" disabled/>
                <label className="form-check-label" htmlFor="inlineRadio4">8.5×11 in, 21.59×27.94 cm</label>
              </div>
              <br/>
            </div>
            <div className='col col-12 col-md-4'>
              <h4>Font</h4>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="fontRadio" id="fontRadioTimes" value="font1" onChange={this.handleRadio} checked={this.state.radioFont === 'font1'}/>
                <label className="form-check-label" htmlFor="inlineRadio1" style={times}>Times</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="fontRadio" id="fontRadioHelvetica" value="font2" onChange={this.handleRadio} checked={this.state.radioFont === 'font2'}/>
                <label className="form-check-label" htmlFor="inlineRadio2" style={helvetica}>Helvetica</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="fontRadio" id="fontRadioCourier" value="font3" onChange={this.handleRadio} checked={this.state.radioFont === 'font3'}/>
                <label className="form-check-label" htmlFor="inlineRadio3" style={courier}>Courier</label>
              </div>
              <br/>
            </div>
            <div className='col col-12 col-md-4'>
              <h4>Font Size</h4>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="fontSizeRadio" id="fontSizeRadio1" value="fontSize1" defaultChecked="defaultChecked"/>
                <label className="form-check-label" htmlFor="inlineRadio1" style={small}>Small</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="fontSizeRadio" id="fontSizeRadio2" value="fontSize2"/>
                <label className="form-check-label" htmlFor="inlineRadio2" style={medium}>Medium</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="fontSizeRadio" id="fontSizeRadio3" value="fontSize3"/>
                <label className="form-check-label" htmlFor="inlineRadio3" style={large}>Large</label>
              </div>
              <br/>
            </div>
          </div>
          {/* end row */}
          <h1>Content - Goodminders</h1>
          <br/>
          <div className='row'>
            <div className='col col-12 col-md-4'>
              <h4>By Rating</h4>
              <button className=''>Check All
              </button>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="ratingCheck1"/>
                <label className="form-check-label" htmlFor="ratingCheck1">
                  5 stars
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="ratingCheck2"/>
                <label className="form-check-label" htmlFor="ratingCheck2">
                  4 stars
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="ratingCheck3"/>
                <label className="form-check-label" htmlFor="ratingCheck3">
                  3 stars
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="ratingCheck4"/>
                <label className="form-check-label" htmlFor="ratingCheck4">
                  2 stars
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="ratingCheck5"/>
                <label className="form-check-label" htmlFor="ratingCheck5">
                  1 stars
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="ratingCheck0"/>
                <label className="form-check-label" htmlFor="ratingCheck0">
                  0 stars
                </label>
              </div>

            </div>
            <div className='col col-12 col-md-4'>
              <h4>By Type</h4>
              <button className=''>Check All
              </button>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="typeCheck1"/>
                <label className="form-check-label" htmlFor="typeCheck1">
                  Prompt
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="typeCheck2"/>
                <label className="form-check-label" htmlFor="typeCheck2">
                  Quote
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="typeCheck3"/>
                <label className="form-check-label" htmlFor="typeCheck3">
                  Custom
                </label>
              </div>
              <br/>
            </div>
            <div className='col col-12 col-md-4'>
              <h4>Order</h4>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="orderRadio" id="orderRadio1" value="option1" defaultChecked="defaultChecked"/>
                <label className="form-check-label" htmlFor="orderRadio1">Chronological - by date added</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="orderRadio" id="orderRadio2" value="option2"/>
                <label className="form-check-label" htmlFor="orderRadio2">Random</label>
              </div>
              <br/>
            </div>
          </div>
          <br/>
          <div className='row'>
            <div className='col col-12 col-md-4'>
              <h4>Max Pages</h4>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="maxPageRadio" id="maxPageRadio1" value="maxPage1" defaultChecked="defaultChecked"/>
                <label className="form-check-label" htmlFor="maxPageRadio1">Include all selected goodminders</label>

              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="maxPageRadio" id="maxPageRadio2" value="maxPage2"/>
                <label className="form-check-label" htmlFor="maxPageRadio2">{' '}{' '}
                  <input type="text" className="form-control form-control-sm" aria-label="Text input with radio button" placeholder='enter max pages here'/>
                </label>
              </div>
            </div>
            <div className='col col-12 col-md-4'>
              <h4>X</h4>
            </div>
            <div className='col col-12 col-md-4'>
              <h4>Y</h4>
            </div>
          </div>
        </form>
        <br/>
        <button id="make-PDF" className='btn btn-small' onClick={this.handleClick}>Make PDF</button>
        {' '}Total pages (not including title page): {this.state.totalPages}
      </div>
      <br />
      <br />
      <Button
        id='random'
      name="Back"
      onClick={this.props.changeDisplay}
      />
    </div>)
  }
}

export default PDF;
