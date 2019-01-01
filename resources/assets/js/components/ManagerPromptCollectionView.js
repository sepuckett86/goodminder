// Note: modal cannot be inside responsive design display or it will not work for all screen sizes
import { connect } from 'react-redux';
import * as actions from '../actions';

import React from 'react';

import MediaQuery from 'react-responsive';

class PromptCollectionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prompts: this.props.collection.prompts
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.getNickname(this.props.collectionInfo.creator_id, ()=>{
      this.props.getCollections(()=> {

      })
    });
  }

  isCollectionAlreadyStored() {
    const filtered = this.props.storedCollections.filter(collection =>
      collection.prompt_collection_id === this.props.collectionInfo.id
    )
    if (filtered.length > 0) {
      return true
    } else {
      return false
    }
  }

  handleClick(e) {
    if (e.currentTarget.name === 'addCollection') {
      this.props.postCollection(this.props.collectionInfo.id, ()=> {
        this.props.changeManagerDisplay('promptCollections');
      })
    }
  }

  generateKey(index) {
    return `${ index }_${ new Date().getTime() }`;
  }

  chooseTable() {
    if (this.props.collectionInfo.creator_id === this.props.user_id) {
      return(
        <table className="table table-striped" style={{'textAlign': 'left'}}>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Prompt</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
        {
          this.props.collection.map((prompt, i) => {
            return (
                <tr key={this.generateKey(i)}>
                  <th scope="row">{i+1}</th>
                  <td>{prompt.promptText}</td>
                  <td>
                  <button type="button" name='delete' onClick={this.handleClick} className="btn-flat btn-blue" data-toggle="modal" data-target="#deleteModal">
                    <i className="fas fa-trash"></i>
                  </button>
                  </td>
                </tr>
            )
          })
        }
      </tbody>
      </table>
      )
    } else if (this.props.collectionInfo.creator_id !== this.props.user_id) {
      return(
        <table className="table table-striped" style={{'textAlign': 'left'}}>

          <tbody>
        {
          this.props.collection.map((prompt, i) => {
            return (
                <tr key={this.generateKey(i)}>
                  <th scope="row">{i+1}</th>
                  <td>{prompt.promptText}</td>
                </tr>
            )
          })
        }
      </tbody>
      </table>
      )
    }
  }

  render() {
    return(
      <div className="container-fluid">

      {/* Modal - Must be outside of responsive design displays */}
      <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add to stored prompt collection?</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Confirm change?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" name='confirmChange' data-dismiss="modal" onClick={this.handleClick}>Confirm</button>
            </div>
          </div>
        </div>
      </div>

        <br />
        <div className="box">
        <h2>Prompt Collection</h2>
        <div className="alignL g-box">
        <h4>Title: {this.props.collectionInfo.collection}</h4>
        <h4>Creator: {this.props.nickname}</h4>
        <br />
        <h4><u>Description</u></h4>
        <p>{this.props.collectionInfo.description}</p>
          <br />
          <h4><u>Prompts in collection</u></h4>
          {this.chooseTable()}

          { this.isCollectionAlreadyStored() === false ?
            <div style={{'textAlign': 'center'}}>
          <button name='addCollection'
          onClick={this.handleClick}
          className='btn btn-green'>Add Collection</button></div>
          : <div className="alert alert-primary" role="alert">This collection is already in your stored collections.</div>}
          </div>
        </div>

        <br />

        <button
        id='random'
        name="Back"
        className='btn btn-custom'
        onClick={() => this.props.changeManagerDisplay('promptCollectionFind')}>
        Back to Find Prompt Collections</button>

        <br />
      </div>
  )
  }
}

function mapStateToProps(state) {
  return {
    collection: state.navigation.currentPromptCollectionPrompts,
    collectionInfo: state.navigation.currentPromptCollection,
    user_id: state.user.backend.id,
    nickname: state.navigation.nickname,
    storedCollections: state.storedPromptCollections
  }
}
export default connect(mapStateToProps, actions)(PromptCollectionView);
