const React = require('react');
import './Footer.css';

const FooterContainer = React.createClass({
  render: function(){
    return(
      <div id="footer-container">
        <p>Hello, I am your footer!</p>
      </div>
    )
  }
});

module.exports = FooterContainer;
