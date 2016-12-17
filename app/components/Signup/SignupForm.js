import React from 'react';

import './Signup.css';

const SignupForm = props => (

  <div className="signup-container-input">

    <input
      type="text"
      placeholder="Username"
      value={props.signupUsername}
      onChange={props.updateSignupUsername}
    />

    <input
      type="text"
      placeholder="Password"
      value={props.signupPassword}
      onChange={props.updateSignupPassword}
    />

    <button
      type="submit"
      onClick={props.signup}
    >
    Signup
    </button>

  </div>
);

export default SignupForm;
