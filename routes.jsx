import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'
//components
import DatasourceTW from './components/datasource_tw.jsx'
import Search from './components/search.jsx'
import FoodDetails from './components/food_details.jsx'

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
