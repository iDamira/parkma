const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route } = require('react-router');
const routes = require('./routes/routes');

ReactDOM.render(routes, document.getElementById('app'));
