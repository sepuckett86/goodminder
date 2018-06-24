import React from 'react';
import Gminder from '../../../../Utils/Gminder'
import Button from '../../Components/Button/Button'

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.changeDatabase = this.changeDatabase.bind(this);
  }

  changeDatabase() {
    console.log(this.props.gminder);
    Gminder.deleteGminder(this.props.gminder.id).then(() => {
      this.props.changeDisplay('random');
    });

  }

  render() {
    return(
      <div>
        {/* Modals */}
        <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Delete Goodminder</h5>
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


        {/* End Modal */}
        <br />
        {/* Button trigger modal */}
        <button type="button" className="btn btn-modal" data-toggle="modal" data-target="#deleteModal">
          Delete Goodminder
        </button>
        <br />
        <br />
        <br />
        <Button
          id='random'
        name="Back"
        onClick={this.props.changeDisplay}
        />
      </div>
  )
}
}

export default Edit;
