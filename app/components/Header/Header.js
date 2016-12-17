const React = require('react');
const Navbar = require('../Navbar/Navbar.js');

import './Header.css';

const HeaderContainer = React.createClass({
  render: function() {
    return(
      <div className="header-container">
          <div className="header-logo">
            <h1>PARKMA</h1>
          </div>
          <div className="header-navbar">
        <Navbar />
        </div>
      </div>
    )
  }
});

module.exports = HeaderContainer;


