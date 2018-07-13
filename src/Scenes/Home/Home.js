import React, { Component } from 'react';

import Button from './Components/Button/Button';

// Scene imports
import Add from './Scenes/Add/Add';
import More from './Scenes/More/More';
import Random from './Scenes/Random/Random';
import Edit from './Scenes/Edit/Edit';
import Print from './Scenes/Print/Print';
import Manager from './Scenes/Manager/Manager'
import Login from './Scenes/Login/Login';
import PDF from './Scenes/PDF/PDF'
//

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'random',
      previousDisplay: 'random',
      currentGminder: {},
      currentPrompt: {},
      gminders: [],
      prompts: [],
      collection: [],
      typeToAdd: 'empty'
    }

    this.setGminder = this.setGminder.bind(this);
    this.setPrompt = this.setPrompt.bind(this);
    this.setGminders = this.setGminders.bind(this);
    this.setPrompts = this.setPrompts.bind(this);
    this.setCollection = this.setCollection.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  componentDidMount() {
    if (this.props.token === '') {
      return
    } else {
      console.log('Props do not work');
    }
  }

  changeDisplay(display) {
    if (display === 'add') {
      if (this.state.display !== 'add') {
        this.setState({display: 'add', previousDisplay: this.state.display})
      }
    }
    if (display === 'more') {
      if (this.state.display !== 'more') {
        this.setState({display: 'more', previousDisplay: this.state.display})
      }
    }
    if (display === 'random') {
      if (this.state.display !== 'random') {
        this.setState({display: 'random', previousDisplay: this.state.display})
      }
    }
    if (display === 'none') {
      if (this.state.display !== 'none') {
        this.setState({display: 'none', previousDisplay: this.state.display})
      }
    }
    if (display === 'manager') {
      if (this.state.display !== 'manager') {
        this.setState({display: 'manager', previousDisplay: this.state.display})
      }
    }
    if (display === 'edit') {
      if (this.state.display !== 'edit') {
        this.setState({display: 'edit', previousDisplay: this.state.display})
      }
    }
    if (display === 'print') {
      if (this.state.display !== 'print') {
        this.setState({display: 'print', previousDisplay: this.state.display})
      }
    }

    if (display === 'PDF') {
      if (this.state.display !== 'PDF') {
        this.setState({display: 'PDF', previousDisplay: this.state.display})
      }
    }
  }

  // Functions to set state of home to log current gminder(s) and prompt(s),
  // for use in multiple displays. These are NOT calls to the database. Calls
  // to the database will happen in Scenes of Home, because the database may be altered
  // by specific Scenes.
  setGminder(gminder) {
    this.setState({currentGminder: gminder})
  }

  setPrompt(prompt) {
    this.setState({currentPrompt: prompt})
  }

  setGminders(gminders) {
    this.setState({gminders: gminders})
  }

  setPrompts(prompts) {
    this.setState({prompts: prompts})
  }

  setCollection(collection) {
    this.setState({collection: collection})
  }

  changeType(type) {
    if(type === 'prompt'){
      this.setState({
        typeToAdd: 'prompt'
      })
    }
    if(type === 'quote'){
      this.setState({
        typeToAdd: 'quote'
      })
    }
    if(type === 'custom'){
      this.setState({
        typeToAdd: 'custom'
      })
    }
    if(type === 'empty'){
      this.setState({
        typeToAdd: 'empty'
      })
    }
  }
  //

  renderWhat() {
    if (this.state.display === 'back') {
      this.changeDisplay(this.state.previousDisplay);
    }
    if (this.state.display === 'random') {
      if (this.state.current !== 'empty') {
        return <Random
          changeDisplay={this.changeDisplay}
          gminder={this.state.currentGminder}
          prompt={this.state.currentPrompt}
          setGminder={this.setGminder}
          setPrompt={this.setPrompt}
          setGminders={this.setGminders}
          setPrompts={this.setPrompts}
          starFun={this.setStars} />
      } else if (this.state.gminders.length !== 0) {
        return <Random nextClick={this.nextClick} backClick={this.backClick} addClick={this.addClick} moreClick={this.moreClick} display={this.state.gminders[0]} starFun={this.setStars} gms={this.state.gminders} prompts={this.state.prompts}/>
      }
    }

    if (this.state.display === 'add') {
      return <Add
        changeDisplay={this.changeDisplay}
        randomClick={this.randomClick}
        prompt={this.state.currentPrompt}
        setPrompt={this.setPrompt}
        setCollection={this.setCollection}
        typeToAdd={this.state.typeToAdd}
        changeType={this.changeType}
      />
    }

    if (this.state.display === 'more') {
      return <More
        changeDisplay={this.changeDisplay}
        noneClick={this.noneClick}/>
    }
    if (this.state.display === 'edit') {
      return <Edit
        changeDisplay={this.changeDisplay}
        gminder={this.state.currentGminder}
        prompt={this.state.currentPrompt}
        prompts={this.state.prompts}/>
    }
    if (this.state.display === 'print') {
      return <Print
        changeDisplay={this.changeDisplay}
        gminder={this.state.currentGminder}
        prompt={this.state.currentPrompt}
        prompts={this.state.prompts}/>
    }
    if (this.state.display === 'manager') {
      return <Manager
        changeDisplay={this.changeDisplay}
        gminder={this.state.currentGminder}
        prompt={this.state.currentPrompt}
        collection={this.state.collection}
        setGminder={this.setGminder}
        setPrompt={this.setPrompt}
        changeType={this.changeType}/>
    }

    if (this.state.display === 'PDF') {
      return <PDF
        changeDisplay={this.changeDisplay}
        />
    }

    if (this.state.display === 'login') {
      return <Login
        changeDisplay={this.changeDisplay}
        />
    }



    if (this.state.display === 'none') {
      return <div></div>
    }

    if (this.state.gminders.length === 0) {
      return (<div>
        <div className="random">
          <p>Looks like you don't have any gminders yet! Click below to add content.
          </p>

        </div>
        <br/>
        <Button id='random' name="Get Started" onClick={this.changeDisplay}/>
      </div>)
    }
  }

  render() {
    return (
      <div className="gminder">

        {this.renderWhat()}
      </div>
    )
  }
}

export default Home;
