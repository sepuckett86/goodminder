import React from 'react';
// mport Table from '../../Components/Table/Table';
import './GminderTable.css';

// Utils
import Gminder from '../../../../../../Utils/Gminder';

//Add CSVDownload to import if want to use it
import {CSVLink} from 'react-csv';

// This is the front-end of a database manager.
// How you interact and change the database.
class GminderTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gminders: [],
      prompts: [],
      csvData: [],
      gmindersShowing: [],
      filterBy: 'quote',
      sortBy: 'id'
    };

    // bind methods
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.setGmindersShowing = this.setGmindersShowing.bind(this);
  }

  componentDidMount() {
    // Get data from database
    Gminder.getGminders().then(res => this.setState({gminders: res.express})).catch(err => console.log(err)).then(() => {
      Gminder.getPrompts().then(res => this.setState({prompts: res.express})).catch(err => console.log(err)).then(() => {
        this.setGmindersShowing();
      })
    })
  }

  setGmindersShowing() {
    if (this.state.filterBy === 'all') {
      this.setState({gmindersShowing: this.state.gminders})
    }
    if (this.state.filterBy === 'quote') {
      let filtered = this.state.gminders.filter(gminder => {return(gminder.category === 'quote')});
      this.setState({gmindersShowing: filtered})
    }
    if (this.state.filterBy === 'prompt') {
      let filtered = this.state.gminders.filter(gminder => {return(gminder.category === 'prompt')});
      this.setState({gmindersShowing: filtered})
    }
    if (this.state.filterBy === 'custom') {
      let filtered = this.state.gminders.filter(gminder => {return(gminder.category === 'custom')});
      this.setState({gmindersShowing: filtered})
    }
  }

  handleClick(event) {

    const myID = event.currentTarget.getAttribute('value');
    for (let i = 0; i < this.state.gminders.length; i++) {
      if (Number(myID) === Number(this.state.gminders[i].id)) {
        this.props.setGminder(this.state.gminders[i]);
        this.props.changeDisplay('edit');
      }
    }

  }

  handleSelect(event) {
    if (event.target.id === 'filter') {
      console.log('blah');
    }
  }

  generateKey(index) {
    return `${ index }_${ new Date().getTime() }`;
  }

  makeCSVArray() {
    let myArray = [['ID', 'Category', 'Collection', 'Date', 'Prompt', 'Answer', 'Reason', 'Author', 'Stars']];
    this.state.gminders.forEach(gminder => {
      let innerArray = [gminder.id, gminder.category, gminder.collection, gminder.date, this.getPromptWithId(gminder.promptID), gminder.mainResponse, gminder.reason, gminder.author, gminder.rating];
      myArray.push(innerArray);
    })
    return myArray;
  }

  getPromptWithId(id) {
    for (let i = 0; i < this.state.prompts.length; i++) {
      if (this.state.prompts[i].id === id) {
        return this.props.prompts[i];
      }
    }
  }

  shortenGminder(gminder) {
    if(gminder.length > 100){
      let short = gminder.slice(0,100);
      short = short.concat('...');
      gminder = short;
    }
    return gminder
  }

  displayAuthor(gminder) {
    if(gminder.author) {
      return (
        <div>--{gminder.author}</div>
      )
    }
  }

  render() {

    return(
      <div id='beginning' className="box">
        <div  >
          <h1 >Manage Goodminders</h1>
          <div className='row justify-content-center'>
            <div className='col'>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text dropLabel" htmlFor="filter">Show</label>
              </div>
              <select onSelect={this.handleSelect} className="custom-select" id="filter" defaultValue='0'>
                <option value="0">All</option>
                <option disabled="disabled">----</option>
                <option disabled="disabled">By category</option>
                <option disabled="disabled">----</option>
                <option value="1">Prompt</option>
                <option value="2">Quote</option>
                <option value="3">Custom</option>
                <option disabled="disabled">----</option>
                <option disabled="disabled">By rating</option>
                <option disabled="disabled">----</option>
                <option value="4">5</option>
                <option value="5">4</option>
                <option value="6">3</option>
                <option value="7">2</option>
                <option value="8">1</option>
                <option value="9">0</option>
              </select>
            </div>
            </div>

            <div className='col'>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text dropLabel" htmlFor="inputGroupSelect01">Sort by</label>
              </div>
              <select className="custom-select" id="inputGroupSelect01" defaultValue='0'>
                <option value="0">ID</option>
                <option value="1">Category</option>
                <option value="2">Rating</option>
                <option value="3">Author</option>
              </select>
            </div>
            </div>
            </div>

            <a href='#end'>Scroll to bottom</a>

          <table className="table table-striped alignL">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Category</th>
                <th scope="col">Rating</th>
                <th scope="col">Gminder</th>
                <th scope="col">Edit</th>

              </tr>
            </thead>
            <tbody>
          {
            this.state.gmindersShowing.map((gminder, i) => {
              return (
                  <tr key={this.generateKey(i)}>
                    <th scope="row">{gminder.id}</th>

                    <td>{gminder.category}</td>
                    <td>{gminder.rating}</td>
                    <td>
                      {gminder.mainResponse}
                      {this.displayAuthor(gminder)}
                    </td>
                    <td>
                      <button className='clear-button' type='button' value={gminder.id} onClick={this.handleClick}><i className="fas fa-edit"></i></button>
                    </td>
                  </tr>
              )
            })
          }
        </tbody>
        </table>
        <CSVLink data={this.makeCSVArray()} ><button id='end' className='btn btn-small' type='button'>Download CSV of all data</button></CSVLink>
        <br />
        <a href='#beginning'>Scroll to top</a>
      </div>
    </div>)
  }
}

export default GminderTable;
