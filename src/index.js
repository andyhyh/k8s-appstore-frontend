import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { connectRoutes } from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers/'
import App from './containers/App'

import logger from './middleware/logger'
import dataporten from './middleware/dataporten/'

import { getAllPackages, fetchData } from './actions/packages'
import { fetchApplicationStatus, getAllApplications } from './actions/applications'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/uninett-bootstrap-theme/css/uninett.css'

const history = createHistory()

const routesMap = {
  HOME: '/',
  PACKAGES: { path: '/packages', thunk: getAllPackages() },
  PACKAGE: { path: '/packages/:fullPackageName', thunk: fetchData() },
  APPLICATIONS: { path: '/applications', thunk: getAllApplications() },
  APPLICATION: { path: '/applications/:id', thunk: fetchApplicationStatus() },
}

const routerSetup = connectRoutes(history, routesMap)

let store = createStore(
  combineReducers({
    ...reducers,
    location: routerSetup.reducer
  }),
  compose(
    routerSetup.enhancer,
    applyMiddleware(
      routerSetup.middleware,
      thunkMiddleware,
      dataporten,
      logger
    )
  )
)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ),
  document.getElementById('app')
)
