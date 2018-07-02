import React from 'react';
import Table from '../../Components/Table/Table';

import Button from '../../../../Components/Button/Button';

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
    };

    // bind methods
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Get data from database
    Gminder.getGminders().then(res => this.setState({gminders: res.express})).catch(err => console.log(err)).then(() => {
      Gminder.getPrompts().then(res => this.setState({prompts: res.express})).catch(err => console.log(err)).then(() => {
      })
    })
  }

  handleClick(event) {
    const myID = event.currentTarget.getAttribute('value');
    for (let i = 0; i < this.state.gminders.length; i++) {
      if (myID == this.state.gminders[i].id) {
        this.props.setGminder(this.state.gminders[i]);
        this.props.changeDisplay('edit');
      }
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
      <div className="box">
        <div id="gminders">
          <h1>Manage Goodminders</h1>
          <table className="table table-striped alignL">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Category</th>
                <th scope="col">Stars</th>
                <th scope="col">Gminder</th>
                <th scope="col">Edit</th>

              </tr>
            </thead>
            <tbody>
          {
            this.state.gminders.map((gminder, i) => {
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
        <CSVLink data={this.makeCSVArray()} ><button className='btn btn-small' type='button'>Download CSV of all data</button></CSVLink>

      </div>
    </div>)
  }
}

export default GminderTable;
