import React from 'react';
import Table from './Components/Table/Table'

import Button from '../../Components/Button/Button';
import GminderTable from './Scenes/GminderTable/GminderTable';
// import Prompts from './Components/Prompts/Prompts';

// Utils
import Gminder from '../../../../Utils/Gminder'

//Add CSVDownload to import if want to use it
import {CSVLink} from 'react-csv';

// This is the front-end of a database manager.
// How you interact and change the database.
class Manager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      managerDisplay: 'none',
      prompts: [],
      csvData: [],
    };
    // props
    this.changeDisplay = this.props.changeDisplay;

    // bind methods
    this.handleClick = this.handleClick.bind(this);
    this.changeManagerDisplay = this.changeManagerDisplay.bind(this);

  }

  componentDidMount() {
    // Get data from database
    // Gminders
    Gminder.getGminders().then(res => this.setState({gminders: res.express})).catch(err => console.log(err)).then(() => {
    // Prompts
    Gminder.getPrompts().then(res => this.setState({prompts: res.express})).catch(err => console.log(err)).then(() => {
    if (this.props.collection) {
          // Check if there is data in prompts
          if (this.state.prompts.length !== 0) {
            let random = this.state.prompts[Math.floor(Math.random() * this.state.prompts.length)];
            this.setState({ prompt: random });
          } else if (this.state.random === "no") {
            this.setState({ prompt: this.props.prompt})
          }
        });
      this.setState({display: 'promptTable'})
      }
    }
  }

  handleClick(event) {
  if(event.target.getAttribute('value') === 'respond') {
    let prompt = event.target.getAttribute('prompt');
    this.setState({
      display: 'add',
      prompt: prompt
    })
  }
  }

  changeManagerDisplay(id) {
    this.setState({
      display: id
    })
  }

  generateKey(index) {
    return `${ index }_${ new Date().getTime() }`;
  }

  makeCSVArray() {
    let myArray = [['ID', 'Category', 'Collection', 'Date', 'Prompt', 'Answer', 'Reason', 'Author', 'Stars']];
    this.props.gms.forEach(gminder => {
      let innerArray = [gminder.id, gminder.category, gminder.collection, gminder.date, gminder.prompt, gminder.answer, gminder.reason, gminder.author, gminder.stars];
      myArray.push(innerArray);
    })
    return myArray;
  }

  makeCSVArrayPrompts() {
    let myArray = [['ID', 'Collection', 'Prompt']];
    this.state.prompts.forEach(prompt => {
      let innerArray = [prompt.id, prompt.collection, prompt.prompt];
      myArray.push(innerArray);
    })
    return myArray;
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
    let promptFilter = [];
    if (this.props.collection) {
      const prompts = this.state.prompts;
      prompts.forEach(prompt => {
        if(prompt.collection === this.props.collection){
          promptFilter.push(prompt);
        }
      })
    }
    return(
      <div className="container">
        { this.state.display === 'gminderTable' ?
      (<div className="box">
        <div id="gminders">
          <table className="table table-striped">
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
            this.props.gms.map((gminder, i) => {
              return (
                  <tr key={this.generateKey(i)}>
                    <th scope="row">{gminder.id}</th>

                    <td>{gminder.category}</td>
                    <td>{gminder.stars}</td>
                    <td>
                      {this.shortenGminder(gminder.answer)}
                      {this.displayAuthor(gminder)}
                    </td>
                    <td>
                  Edit
                    </td>
                  </tr>
              )
            })
          }

        </tbody>
        </table>
        <CSVLink data={this.makeCSVArray()} >Download CSV of all data</CSVLink>
      </div>
    </div>)
        : null }

        { this.state.display === 'promptTable' && !this.props.collection ?
        (<div className="box">
        <div id="prompts">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Collection</th>
                <th scope="col">Prompt</th>
                <th scope="col">Respond</th>

              </tr>
            </thead>
            <tbody>
          {
            this.state.prompts.map((prompt, i) => {
              return (
                  <tr key={this.generateKey(i)}>
                    <th scope="row">{prompt.id}</th>
                    <td>{prompt.collection}</td>
                    <td>{prompt.promptText}</td>
                    <td>
                    <button onClick={this.handleClick} prompt={prompt} value="respond">Respond</button>
                    </td>
                  </tr>
              )
            })
          }
        </tbody>
        </table>
        <CSVLink data={this.makeCSVArrayPrompts()} >Download CSV of all data</CSVLink>
        </div>
        </div>)
        : null }
        { this.state.display === 'promptTable' && promptFilter.length > 0 ?
        (<div className="box">
        <div id="prompts">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Collection</th>
                <th scope="col">Prompt</th>
                <th scope="col">Respond</th>
                <th scope="col">Delete</th>

              </tr>
            </thead>
            <tbody>
          {
            promptFilter.map((prompt, i) => {
                return (
                    <tr key={this.generateKey(i)}>
                      <th scope="row">{prompt.id}</th>
                      <td>{prompt.collection}</td>
                      <td>{prompt.promptText}</td>
                      <td>
                      <button onClick={this.handleClick} prompt={prompt} value="respond">Respond</button>
                      </td>
                      <td>
                      <ButtonModal id='delete' name="Delete"/>
                      </td>
                    </tr>
                )

            })
          }
        </tbody>
        </table>
        </div>
        </div>)
        : null }


        <Table />
        <Button
        name="Table of All Gminders"
        onClick={this.changeManagerDisplay}
        id="gminderTable"
        gms={this.props.gms}
        />
        <br />
        <br />
        <Button
        name="Table of All Prompts"
        id="promptTable"
        onClick={this.changeManagerDisplay}
        />
        <br />
        <br />
        <Button
          id='random'
        name="Back"
        onClick={this.changeDisplay}
        />

        <br />
        <br />

      </div>)
  }
}

export default Manager;
