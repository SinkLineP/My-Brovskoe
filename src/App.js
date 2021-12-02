import './App.css';
import React, {Component} from "react";
import Home from './components/Home/Home.js';
import News from './components/News/News.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavTop from "./components/NavTop/Navtop";
import {connect} from "react-redux";
import Signup from "./components/Signup/Signup.js";
import Login from "./components/Login/Login.js";
import {Container} from "react-bootstrap";
import {AuthProvider} from "./Contexts/AuthContext";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <NavTop/>
            <Switch>
              <Route path="/sign-up">
                <AuthProvider>
                  <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{minHeight: "100vh"}}
                  >
                    <div className="w-100" style={{maxWidth: "400px"}}>
                      <Signup/>
                    </div>
                  </Container>
                </AuthProvider>
              </Route>
              <Route path="/login">
                <AuthProvider>
                  <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{minHeight: "100vh"}}
                  >
                    <div className="w-100" style={{maxWidth: "400px"}}>
                      <Login/>
                    </div>
                  </Container>
                </AuthProvider>
              </Route>
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
