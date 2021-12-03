import './App.css';
import React, {Component} from "react";
import Dashboard from './components/Dashboard/Dashboard.js';
import News from './components/News/News.js';
import Home from './components/Home/Home.js';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavTop from "./components/NavTop/Navtop";
import {connect} from "react-redux";
import Signup from "./components/Signup/Signup.js";
import Login from "./components/Login/Login.js";
import {Container} from "react-bootstrap";
import {AuthProvider} from "./Contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <NavTop/>
            <Switch>
              <Route path="/news" component={News}/>
              <Route path="/home" component={Home}/>
            </Switch>
            <AuthProvider>
              <Switch>
                <Container className="d-flex align-items-center justify-content-center">
                  <div className="w-100" style={{maxWidth: "400px"}}>
                    <PrivateRoute exact path="/" component={Dashboard}/>
                    <PrivateRoute exact path="/update-profile" component={UpdateProfile}/>
                    <Route path="/sign-up" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/forgot-password" component={ForgotPassword}/>
                  </div>
                </Container>
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
