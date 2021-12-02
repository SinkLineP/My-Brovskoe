import './App.css';
import React, {Component} from "react";
import Home from './components/Home/Home.js';
import News from './components/News/News.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavTop from "./components/NavTop/Navtop";
import {connect} from "react-redux";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <NavTop curUser={this.props.storeCurrentUser} removeCurUser={(item) => this.props.onRemoveCurrentUser(item)}/>
            <Switch>
              <Route path="/news">
                <News/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default connect(
  (state) => ({
    storeCurrentUser: state.currentUser,
  }),
  (dispatch) => ({
    onRemoveCurrentUser: (removeCurrentUser) => {
      dispatch({type: 'CURRENT_USER', payload: removeCurrentUser});
    }
  })
)(App);
