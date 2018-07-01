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
      csvData: [],
    };
    // props
    this.changeDisplay = this.props.changeDisplay;
    this.setGminder = this.props.setGminder;

    // bind methods
    this.handleClick = this.handleClick.bind(this);
    this.changeManagerDisplay = this.changeManagerDisplay.bind(this);

  }

  handleClick(event) {
  }

  changeManagerDisplay(id) {
    this.setState({
      managerDisplay: id
    })
  }

  render() {
    return(
      <div className="container-fluid">
        <br />
        { this.state.managerDisplay === 'none' ?
        (<div>
          <Button
          name="Table of All Gminders"
          onClick={this.changeManagerDisplay}
          id="gminderTable"
          />
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
        </div>) : null }

        { this.state.managerDisplay === 'gminderTable' ? (<div>
          <GminderTable
            setGminder={this.setGminder}
            changeDisplay={this.changeDisplay}/>
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

        </div>) : null }

        { this.state.managerDisplay === 'promptTable' ?
        (<div>
          <Button
          name="Table of All Gminders"
          onClick={this.changeManagerDisplay}
          id="gminderTable"
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
        </div>) : null }

      </div>)
  }
}

export default Manager;
