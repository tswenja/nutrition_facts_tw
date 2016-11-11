var React = require('react')
var render = require('react-dom').render
var Router = require('react-router').Router
var Route = require('react-router').Route
var browserHistory = require('react-router').browserHistory
var IndexRoute = require('react-router').IndexRoute
var Redirect = require('react-router').Redirect
//components
var DatasourceTW = require('./components/datasource_tw.jsx')
var Search = require('./components/search.jsx')
var FoodDetails = require('./components/food_details.jsx')

document.rootUrl = '/nutrition_facts_tw'

render((
  <Router history={browserHistory}>
    <Route path={document.rootUrl} component={DatasourceTW}>
      <IndexRoute component={Search}/>

      <Route path="search/:keyword" component={Search}/>
      <Route path="foods/:uniNumber" component={FoodDetails}/>

      <Redirect from="*" to={document.rootUrl} />
    </Route>
  </Router>
), document.getElementById('container'))
