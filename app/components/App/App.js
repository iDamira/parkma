'use strict';

const React = require('react');
const Header = require('../Header/Header');
const Footer = require('../Footer/Footer');
const Login = require('../Login/LoginFormContainer');
import SignupContainer from '../Signup/SignupContainer';
const App = require('../App/App');
const BodyContainer = require('../Body/Body');

import '../../reset.css';
import './App.css';


const AppContainer = React.createClass({

  getInitialState: function() {
    return {
      currentToken: '',
      currentUser: '',

      signup: {
        username: '',
        password: '',
      },

      login: {
        username: '',
        password: '',
      },
    };
  },

   successfulLogin: function() {
    this.setState({
      isAuthenticated: true,
    });
  },

   signup: function() {
    fetch('/user/signup', {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.signup.username,
        password: this.state.signup.password,
      }),
    })
    .then(() => {
      this.setState({
        signup: {
          username: '',
          password: '',
        },
      });
    })
    .then(this.alertInfo('Signed up!'))
    .catch(err => console.log(err));
  },

  login: function() {
    console.log('im logging in');
    fetch('/routes/user/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.login.username,
        password: this.state.login.password,
      }),
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        currentToken: data,
        currentUser: this.state.login.username,
        login: {
          username: '',
          password: '',
        },
      });
    })
    .then(event => this.loadAccountInfo(event))
    .catch(err => console.log(err));
  },

  logout: function() {
    this.setState({
      currentToken: '',
    }, () => {
      console.log('after logout ', this.state);
    });
    this.alertInfo('Youre logged out!');
  },

  updateLogin: function (e) {
    var array = e.target.parentElement.childNodes;
    this.setState({
      login: {
        username: array[0].value,
        password: array[1].value,
      },
    });
  },

  render: function(){
    return(
      <div>

          <Header />
          <div className="app-container">
          <p>Parking Buddy App</p>
            {this.props.children}
          </div>
          <Footer />
      </div>
    )
  }
});

module.exports = AppContainer;

