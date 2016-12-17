const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;
const IndexRoute = ReactRouter.IndexRoute;

const AppContainer = require('../components/App/App');
const LoginContainer = require('../components/Login/LoginFormContainer');
import SignupContainer from '../components/Signup/SignupContainer';
const AboutContainer = require('../components/About/About');
const MapContainer = require('../components/Map/MapContainer');
const BodyContainer = require('../components/Body/Body');

const routes = (
<Router history={hashHistory}>
  <Route path='/' component={AppContainer}>
    <Route path='login' component={LoginContainer}/>
    <Route path='about' component={AboutContainer} />
    <Route path='signup' component={SignupContainer} />
    <Route path='map' component={MapContainer} />
  </Route>
</Router>
);

module.exports = routes;
