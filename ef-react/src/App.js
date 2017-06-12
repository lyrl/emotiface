import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ajax from 'ajax';
// import Clmtrackr from './libraries/Clmtrackr';
// import clmtrackr from 'clmtrackr';
import StartLanding from './components/StartLanding';
import CurrentFace from './components/CurrentFace';
import EmotionToDo from './components/EmotionToDo';
import EndLanding from './components/EndLanding';
import AboutPage from './components/AboutPage';
import FourOhFour from './components/FourOhFour';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.score = this.score.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  };
  //need to add the score here
  score() {

  }
  //from stackoverflow on how to add a script tag
  componentWillMount() {
    const script = document.createElement("script");
    //add affectiva emotion API to App.js
    script.src = "https://download.affectiva.com/js/3.2/affdex.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => (<StartLanding 
              componentWillMount={this.componentWillMount}
              />)} />
            <Route path="/about" exact component={() => (<AboutPage />)} />
            <Route path="/play/setup" exact component={() => (<EmotionToDo />)} />
            <Route path="/play/action" exact component={() => (<CurrentFace />)} />
            <Route path="/end" exact component={() => (<EndLanding />)} />
            <Route path="/*" exact component={() => (<FourOhFour />)} />
            <Footer />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;