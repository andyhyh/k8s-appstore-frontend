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
import DataportenClient from './dataporten/'
import { selectPackage } from './actions/'
import logger from './middleware/logger'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/uninett-bootstrap-theme/css/uninett.css'
// import theme from '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'

const history = createHistory()

const routesMap = {
  HOME: '/',
  PACKAGES: '/packages',
  PACKAGE: '/packages/:id',
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
      logger
    )
  )
)

let dataportenClient = new DataportenClient(store)
dataportenClient.authenticate()

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ),
  document.getElementById('app')
)
