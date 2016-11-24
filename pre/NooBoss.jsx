var React= require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = require('react-router').Link;
var browserHistory = ReactRouter.browserHistory;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={require('./Core.jsx')}>
      <Route path="popup.html" component={require('./Manage.jsx')} />
      <Route path="overview" component={require('./Overview.jsx')} />
      <Route path="manage" component={require('./Manage.jsx')} />
      <Route path="discover" component={require('./Discover.jsx')} />
      <Route path="options" component={require('./Options.jsx')} />
      <Route path="history" component={require('./History.jsx')} />
      <Route path="about" component={require('./About.jsx')} />
    </Route>
  </Router>
  ,
  document.getElementById('nooboss')
);