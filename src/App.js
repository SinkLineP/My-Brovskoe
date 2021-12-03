import './App.css';
import React, {Component} from "react";
import Dashboard from './components/Dashboard/Dashboard.js';
import News from './components/News/News.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavTop from "./components/NavTop/Navtop";
import {connect} from "react-redux";
import Signup from "./components/Signup/Signup.js";
import Login from "./components/Login/Login.js";
import {Container} from "react-bootstrap";
import {AuthProvider} from "./Contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

class App extends Component {
  render() {
    return (
      <>

        <Router>
          <div>
            <NavTop/>
            <AuthProvider>
              <Switch>
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{minHeight: "100vh"}}
                >
                  <div className="w-100" style={{maxWidth: "400px"}}>
                    <PrivateRoute exact path="/" component={Dashboard}/>
                    <Route path="/sign-up" component={Signup}/>
                    <Route path="/login" component={Login}/>
                  </div>
                </Container>
                <Route path="/news" component={News}/>
              </Switch>
            </AuthProvider>
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
