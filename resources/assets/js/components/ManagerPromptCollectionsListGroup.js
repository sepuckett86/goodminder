import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';
import ReactTooltip from 'react-tooltip';

// This is the front-end of a database manager.
// How you interact and change the database.
class ListGroup extends React.Component {
  constructor(props) {
    super(props);

    // bind methods
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.name === 'confirmDelete') {
      if (this.props.storedPromptCollection.creator_id === this.props.user_id) {
        this.props.deletePromptCollection(Number(this.props.promptCollectionID), ()=> {
          this.props.getCollections(()=> {
          })
        });
      } else {
        this.props.deleteCollection(this.props.storedPromptCollection.id, ()=>{
          this.props.getCollections(()=> {
          })
        })
      }

    }
  }

  renderListGroup(who) {
    let filtered = [];
    if (who === 'user') {
       filtered = this.props.storedPromptCollections.filter(collection =>
        collection.creator_id === this.props.user_id
      );

    } else if (who === 'other') {
       filtered = this.props.storedPromptCollections.filter(collection =>
        collection.creator_id !== this.props.user_id
      );
    }
    let filteredHidden = [];
    let filteredDisplayed = [];
    filtered.forEach(collection => {
      if (collection.displayFlag === 0) {
        filteredHidden.push(collection);
      } else if (collection.displayFlag === 1) {
        filteredDisplayed.push(collection);
      }
    })

    let hiddenStyle={
      'color': '#E8E8E8'
    }
    return (
      <div>
      {filteredDisplayed.map((collection, i) => {
          return (
        <div key={i} className="list-group alignL">
          <div
            className="list-group-item list-group-item-action flex-column align-items-start"
          >
          <a className='btn-flat' onClick={ () => {
              this.props.getPromptCollection(
                collection.prompt_collection_id,
                ()=> {
                  this.props.setCurrentStoredPromptCollection(collection);
                  this.props.changeManagerDisplay('promptCollection');
                })
          }
          }>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{collection.collection} |{' '}
              {who === 'user'?
              <span>
                {collection.publicFlag === 0 ? <span>Private</span>: <span>Public</span>}
              </span>
              : <span>{collection.nickname}</span>
              }
              </h5>
              <small className="text-muted">
              {collection.prompt_ids ? <span>
                {collection.prompt_ids.length}{' '}
                {collection.prompt_ids.length === 1 ? <span>prompt</span> : <span>prompts</span>}
                </span> : null}</small>
            </div>
            <p className="mb-1">
            {collection.description}
            </p>
            <div className="d-flex w-100 justify-content-between">
            <small className="text-muted">Created{' '}
            {
              collection.created_at.split(' ')[0]
            }</small>
            <small className="text-muted">
            <span data-tip='Hide collection' onClick={(e) => {
              this.props.putCollection(collection.id, 0, ()=>{
                this.props.getCollections(()=>{})
              })
              e.stopPropagation();}}
              className='btn-flat btn-blue'><i className="fas fa-eye-slash"></i></span>
            {' '}
            {/* Button trigger modal */}
            <span data-tip='Delete collection' name='delete' data-toggle="modal" data-target="#editModal"
            onClick={(e) => {
              this.props.setPromptCollectionID(collection.prompt_collection_id);
              this.props.setCurrentStoredPromptCollection(collection);
              e.stopPropagation();}}
              className='btn-flat btn-blue'><i className="fas fa-trash"></i></span>
            </small>
            </div>
            </a>
          </div>
        </div>
      );
    })}

    {filteredHidden.map((collection, i) => {
        return (
      <div key={i} className="list-group alignL">
        <div
          className="list-group-item list-group-item-action list-group-item-night flex-column align-items-start"
        >
        <a className='btn-flat' onClick={ () => {
            this.props.getPromptCollection(
              collection.prompt_collection_id,
              ()=> {
                this.props.setCurrentStoredPromptCollection(collection);
                this.props.changeManagerDisplay('promptCollection');
              })
        }
        }>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{collection.collection} |{' '}
            {who === 'user'?
            <span>
              {collection.publicFlag === 0 ? <span>Private</span>: <span>Public</span>}
            </span>
            : <span>{collection.nickname}</span>
            }


            {' '}|{' '}
            <i>Hidden</i></h5>
            <small className="text-muted">
            {collection.prompt_ids ? <span>
              {collection.prompt_ids.length}{' '}
              {collection.prompt_ids.length === 1 ? <span>prompt</span> : <span>prompts</span>}
              </span> : null}
            </small>
          </div>
          <p className="mb-1">
          {collection.description}
          </p>
          <div className="d-flex w-100 justify-content-between">
          <small className="text-muted">Created{' '}
          {
            collection.created_at.split(' ')[0]
          }</small>
          <small className="text-muted">
          <span data-tip='Show collection' onClick={(e) => {
            this.props.putCollection(collection.id, 1, ()=>{
              this.props.getCollections(()=>{})
            })
            e.stopPropagation();}}
            className='btn-flat btn-blue'
            style={hiddenStyle}
            ><i className="fas fa-eye"></i></span>
          {' '}
          {/* Button trigger modal */}
          <span data-tip='Delete collection' name='delete' data-toggle="modal" data-target="#editModal"
          onClick={(e) => {
            this.props.setPromptCollectionID(collection.prompt_collection_id);
            this.props.setCurrentStoredPromptCollection(collection);
            e.stopPropagation();}}
            className='btn-flat btn-blue'
            style={hiddenStyle}
            ><i className="fas fa-trash"></i></span>
          </small>
          </div>
          </a>
        </div>
      </div>
    );
  })}
  {filteredHidden.length === 0 && filteredDisplayed.length === 0 ? <p>No Collections Stored</p>: null}
    </div>
    )
  }

  generateKey(index) {
    return `${ index }_${ new Date().getTime() }`;
  }

  render() {
    return(
      <div>
      {/* Modal - Must be outside of responsive design displays */}
      <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Delete Prompt Collection?</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Confirm change?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" name='confirmDelete' data-dismiss="modal" onClick={this.handleClick}>Confirm</button>
            </div>
          </div>
        </div>
      </div>

        {this.renderListGroup(this.props.who)}
        <ReactTooltip delayShow={200}/>
      </div>)
  }
}

function mapStateToProps(state) {
  return {
    gminders: state.goodminders,
    prompts: state.prompts,
    collection: state.navigation.collection,
    promptCollectionID: state.navigation.promptCollectionID,
    storedPromptCollection: state.navigation.currentStoredPromptCollection,
    storedPromptCollections: state.storedPromptCollections,
    user_id: state.user.backend.id
  }
}

export default connect(mapStateToProps, actions)(ListGroup);
