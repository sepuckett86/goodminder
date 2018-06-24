import React from 'react';
import './ButtonModal.css'

class ButtonModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.id);
  }

  changeDatabase() {
    this.props.changeDatabase()
  }

  render() {
    return (<div>

        {/* Button trigger modal */}
        <button type="button" className="btn btn-modal" data-toggle="modal" data-target="#exampleModal">
          Action
        </button>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Action here</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Make permanent change to database?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.changeDatabase}>Confirm</button>
            </div>
          </div>
        </div>
      </div>

    </div>)
  }
}

export default ButtonModal;
