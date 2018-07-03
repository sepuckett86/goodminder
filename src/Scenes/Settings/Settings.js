import React, {Component} from 'react';
import './Settings.css'


class Settings extends Component {

  render() {
    return (<div>
      <br/>
      <div className="container box">
        <h1>Settings</h1>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center active">
            Customization Option
            <span className="badge badge-primary badge-pill">Points Needed (you have 40)</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Display emoji instead of points badge
            <span className="badge badge-primary badge-pill">50</span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            Change background image
            <span className="badge badge-primary badge-pill">2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Morbi leo risus
            <span className="badge badge-primary badge-pill">1</span>
          </li>
        </ul>
<br />
<span className='alignL' role='img' aria-label='heart'>❤️</span>
      </div>
    </div>);
  }
}

export default Settings;
