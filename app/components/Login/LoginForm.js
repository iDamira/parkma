const React = require('react');

const LoginForm = React.createClass({
  render: function() {
    return(
      <div className="login-form-container">
        <div className="login-input-container">
          <input
            type="text"
            placeholder="Username"
            value={this.props.loginUsername}
            onChange={this.props.updateLogin}/>
          <input
            type="text"
            placeholder="Password"
            value={this.props.loginPassword}
            onChange={this.props.updateLogin}/>
          <button
            id="login-submit-button"
            onClick={this.props.login}>
            Login
          </button>
        </div>
      </div>
    )
  }
});


module.exports = LoginForm;
