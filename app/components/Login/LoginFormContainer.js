const React = require('react');
const LoginForm = require('./LoginForm.js');

import './Login.css';

const Login = React.createClass({
  render: function() {
    return(
      <div className="login-container">
      <LoginForm
        loginUsername={this.props.loginUsername}
        loginPassword={this.props.loginPassword}
        updateLogin={this.props.updateLogin}
        login={this.props.login}
        logout={this.props.logout}
      />
      </div>
    )
  }
});

module.exports = Login;
