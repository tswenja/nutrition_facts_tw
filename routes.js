var React = require('react')
var render = require('react-dom').render
var Router = require('react-router').Router
var Route = require('react-router').Route
var browserHistory = require('react-router').browserHistory
//components
var DatasourceTW = require('./components/datasource_tw.jsx')
var Search = require('./components/search.jsx')
var FoodDetails = require('./components/food_details.jsx')

const routes = {
  path: '/',
  component: DatasourceTW,
  indexRoute: { component: Search },
  childRoutes:[
    { path: 'foods/:uniNumber', component: FoodDetails }
  ]
}

render(<Router history={browserHistory} routes={routes} />, document.getElementById('container'))
