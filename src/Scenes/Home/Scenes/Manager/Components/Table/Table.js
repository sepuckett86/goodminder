import React from 'react';
import './Table.css';

// import Gminders from './Components/Gminders/Gminders';
// import Prompts from './Components/Prompts/Prompts';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {}
  handleClick(event) {}

  render() {
    return (

      <div className="outside-table">
      <div className="">
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
            <tr key='X'>
              <th scope="row">8765</th>
              <td>Example Small</td>
              <td>Example Big</td>
              <td>Onion</td>
              <td>No</td>
            </tr>
            <tr key='Y'>
              <th scope="row">1234</th>
              <td>Overalls</td>
              <td>Gargantuan</td>
              <td>Avarice</td>
              <td>No</td>
            </tr>
            <tr key='Z'>
              <th scope="row">1234</th>
              <td>Overalls</td>
              <td>Gargantuan</td>
              <td>Avarice</td>
              <td>No</td>
            </tr>
            <tr key='A'>
              <th scope="row">1234</th>
              <td>Overalls</td>
              <td>Gargantuan</td>
              <td>Avarice</td>
              <td>No</td>
            </tr>
            <tr key='beforea'>
              <th scope="row">1234</th>
              <td>Overalls</td>
              <td>Gargantuan</td>
              <td>Avarice</td>
              <td>No</td>
            </tr>
            <tr key='af'>
              <th scope="row">1234</th>
              <td>Overalls</td>
              <td>Gargantuan</td>
              <td>Avarice</td>
              <td>No</td>
            </tr>
            <tr key='as'>
              <th scope="row">1234</th>
              <td>Overalls</td>
              <td>Gargantuan</td>
              <td>Avarice</td>
              <td>No</td>
            </tr>
            <tr key='ay'>
              <th scope="row">1234</th>
              <td>Overalls</td>
              <td>Gargantuan</td>
              <td>Avarice</td>
              <td>No</td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
  )
  }
}

export default Table;
