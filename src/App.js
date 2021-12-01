import './App.css';
import React, {Component} from "react";
import Home from './components/Home/Home.js';
import News from './components/News/News.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavTop from "./components/NavTop/Navtop";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <NavTop />
            <Switch>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
