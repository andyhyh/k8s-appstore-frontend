import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { connectRoutes } from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers/'
import AppController from './containers/AppController'
import DataportenAPI from './dataporten/'
import { selectPackage } from './actions/'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/uninett-bootstrap-theme/css/uninett.css'
// import theme from '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'

const history = createHistory()

const routesMap = {
  HOME: '/',      // action <-> url path
  PACKAGES: '/packages',  // :id is a dynamic segment
  PACKAGE: '/packages/:id'  // :id is a dynamic segment
}

const routerSetup = connectRoutes(history, routesMap) // yes, 3 redux aspects

const logger = store => next => action => {
  console.log('---------> dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

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
      logger
    )
  )
)

let api = new DataportenAPI(store)
api.authenticate()
  .then(() => {
    api.bootstrap();
  })

ReactDOM.render((
  <Provider store={store}>
    <AppController />
  </Provider>
  ),
  document.getElementById('app')
)
