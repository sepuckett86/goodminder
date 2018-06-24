import React, {Component} from 'react';

// React Router
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from '../Scenes/Home/Home';
import About from '../Scenes/About/About';
import Intro from '../Scenes/Intro/Intro';
import Settings from '../Scenes/Settings/Settings';
import Examples from '../Scenes/Examples/Examples';
import Faq from '../Scenes/Faq/Faq'
//

import './App.css';
import logo from './logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gminders: [
        {
          id: '1',
          category: 'prompt',
          collection: 'Favorites',
          date: '3-3-18',
          prompt: 'What is a song that made you smile in the past month?',
          answer: 'Legend of Kyrandia Emerald Room Song by Frank Klepacki',
          reason: 'After wandering through endless caves in the game with repetitive music, the music changes for only one scene to a complex, long, cool song. It reminds me of all that is great about old school adventure games.',
          author: null,
          stars: '4'

        }, {
          id: '2',
          category: 'quote',
          collection: 'Happy',
          date: '3-7-18',
          prompt: null,
          answer: 'May your beer be laid under an enchantment of surpassing excellence for seven years!',
          reason: 'One of the best read-out-loud moments in the book',
          author: 'Gandalf, from The Fellowship of the Ring by J.R.R. Tolkien',
          stars: '5'
        }, {
          id: '3',
          category: 'custom',
          collection: 'Affirmations',
          date: '3-4-18',
          prompt: null,
          answer: 'Breathe! Drink water. Smile at your thoughts.',
          reason: null,
          author: null,
          stars: '2'
        }, {
          id: '4',
          category: 'quote',
          collection: 'Happy',
          date: '3-6-18',
          prompt: null,
          answer: `This is the story: It was Spring. The warm sunshine and soft breezes were trying to lure students away from their classes.\
        Santayana was seated at his desk reading to his students. His listeners were sitting, or reclining, in various attitudes of inattention.\
        Santayana’s voice trailed off, his eyes traveled over his students, and fixed themselves on a tree which grew outside the window.\
        Its leaves were small and tender, and of the green green of new leaves. Santayana closed the book. A short silence elapsed.\
        He rose, and said: "Gentlemen, it is Spring!" He took his hat and never returned.`,
          reason: "A nice story",
          author: "A letter in a book by Will Durant, On the Meaning of Life",
          stars: '4'
        }, {
          id: '5',
          category: 'quote',
          collection: 'Food for a Hungry Brain',
          date: '4/12/2018',
          prompt: null,
          answer: 'Everything that one has ever created achieves reality.',
          reason: null,
          author: 'Halldor Laxness, from Independent People',
          stars: '3'

        }, {
          id: '6',
          category: 'quote',
          collection: 'Food for a Hungry Brain',
          date: '4/12/2018',
          prompt: '',
          answer: '...a man should fight for the victims, but if he ceases caring for anything outside that, what’s the use of his fighting?',
          reason: null,
          author: 'Albert Camus, from The Plague',
          stars: '5'

        }, {
          id: '7',
          category: 'quote',
          collection: 'Food for a Hungry Brain',
          date: '4/12/2018',
          prompt: '',
          answer: 'I realized then that when people are happy they become kind.',
          reason: null,
          author: 'Jung Chang, from Wild Swans: Three Daughters of China',
          stars: '5'

        }, {
          id: '8',
          category: 'quote',
          collection: '',
          date: '4/12/2018',
          prompt: '',
          answer: 'Almost everybody feels at peace with nature: listening to the ocean waves against the shore, by a still lake, in a field of grass, on a windblown heath. One day, when we have learned the timeless way again, we shall feel the same about our towns, and we shall feel as much at peace in them, as we do today walking by the ocean, or stretched out in the long grass of a meadow.',
          reason: null,
          author: 'Christopher Alexander, The Timeless Way of Building',
          stars: '0'

        }, {
          id: '9',
          category: 'quote',
          collection: 'Amusing',
          date: '4/12/2018',
          prompt: '',
          answer: 'Very sleek and fat did the cats appear, and sonorous with purring content.',
          reason: null,
          author: 'H. P. Lovecraft',
          stars: '3'

        }, {
          id: '10',
          category: 'quote',
          collection: 'Amusing',
          date: '4/12/2018',
          prompt: '',
          answer: 'The battlements of Sarn Torel stood still and silent, unimpressed, as they would stand when both men were long in their graves. It takes a lot to impress a castle wall.',
          reason: null,
          author: 'Ed Greenwood, Elminster: Making of a Mage',
          stars: '4'

        }, {
          id: '11',
          category: 'quote',
          collection: 'Amusing',
          date: '4/12/2018',
          prompt: '',
          answer: 'When Lydia Charingford was around, though, he felt like a smiling dark little raincloud.',
          reason: null,
          author: 'Courtney Milan, The Brothers Sinister',
          stars: '0'

        }, {
          id: '12',
          category: 'quote',
          collection: 'Amusing',
          date: '4/12/2018',
          prompt: '',
          answer: 'Did you know that six-toed cats have seventeen percent more claw?',
          reason: null,
          author: 'Courtney Milan, character Sebastian from The Duchess War',
          stars: '3'

        }, {
          id: '13',
          category: 'quote',
          collection: 'Food for a Hungry Brain',
          date: '4/12/2018',
          prompt: '',
          answer: '...it was worth the tedium of visitors to experience the pleasure of their going.',
          reason: null,
          author: 'Daphne du Maurier, My Cousin Rachel',
          stars: '5'

        }, {
          id: '14',
          category: 'quote',
          collection: 'Word Salad',
          date: '4/12/2018',
          prompt: '',
          answer: 'The brave Norwegian drove his vessel head on against the pursuing jelly which rose above the unclean froth like the stern of a daemon galleon. The awful squid-head with writhing feelers came nearly up to the bowsprit of the sturdy yacht, but Johansen drove on relentlessly. There was a bursting as of an exploding bladder, a slushy nastiness as of a cloven sunfish, a stench as of a thousand opened graves, and a sound that the chronicler would not put on paper. For an instant the ship was befouled by an acrid and blinding green cloud, and then there was only a venomous seething astern; where—God in heaven!—the scattered plasticity of that nameless sky-spawn was nebulously recombining in its hateful original form, whilst its distance widened every second as the Alert gained impetus from its mounting steam.',
          reason: null,
          author: 'H. P. Lovecraft, The Call of Cthulhu',
          stars: '1'

        }, {
          id: '15',
          category: 'quote',
          collection: 'Food for a Hungry Brain',
          date: '4/12/2018',
          prompt: '',
          answer: 'Failure to make a decision was in itself a decision...',
          reason: null,
          author: 'Frank Herbert, Children of Dune',
          stars: '2'

        }
      ],
      prompts: [
        {
          id: 'prompt1',
          collection: 'Happy',
          prompt: 'Share a fun moment'
        }, {
          id: 'prompt2',
          collection: 'Happy',
          prompt: 'Explain why you are smiling'
        }, {
          id: 'prompt3',
          collection: 'Happenings',
          prompt: 'Share a time when you were proud of yourself'
        }, {
          id: 'prompt4',
          collection: 'Favorites',
          prompt: 'What is a song that made you smile in the past month?'
        }, {
          id: 'prompt5',
          collection: 'Favorites',
          prompt: 'Who is your favorite person? Why?'
        }
      ],
      display: 'box',
      current: 'empty',
      currentPrompt: 'empty',
      previous: [],
      back: 0
    }
  }

  render() {
    return (
      <div className="App">

      <Router>
        <div>
          <header id='header' className="App-header">
            <nav className="navbar navbar-dark navbar-expand-sm justify-content-between">
              <a className="navbar-brand" id='intro' href="/intro"><img src={logo} className="App-logo" alt="logo"/>Goodminder</a>
              <div className="navbar-expand" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <button className="nav-link btn btn-clean menu dropdown-toggle" type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        UserID
                    </button>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="/"><b>Home</b></a>
                      <a className="dropdown-item" href="/settings">Settings</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/about">About</a>
                      <a className="dropdown-item" href="/examples">Examples</a>
                      <a className="dropdown-item" href="/faq">FAQ</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/logout">Log out</a>
                    </div>
                  </li>
                  <li className="nav-item points">
                    <button type="button" className="btn btn-goodminder" data-toggle="popover" title="Gminder Points" data-content="Earn points by daily log-in and writing entries. These will come in handy later :) ">
                      {' '}<span className="badge badge-light">40</span>
                    </button>
                  </li>
                </ul>
              </div>
            </nav>

          </header>

          <Route exact={true} path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/intro" component={Intro}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/examples" component={Examples}/>
          <Route path="/faq" component={Faq}/>
        </div>
      </Router>

    </div>);
  }
}

export default App;
