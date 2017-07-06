import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { connectRoutes } from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'

import reducers from './store'
import App from './components/App'
import DataportenAPI from './components/API'
import { selectPackage } from './store/actions'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/uninett-bootstrap-theme/css/uninett.css'
// import theme from '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'

const history = createHistory()

// THE WORK:
const routesMap = {
  HOME: '/',      // action <-> url path
  PACKAGE: '/package/:id'  // :id is a dynamic segment
}

const routerSetup = connectRoutes(history, routesMap) // yes, 3 redux aspects

const logger = store => next => action => {
  console.log('---------> dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}


console.log("routerMiddleware", routerSetup.middleware)
console.log("locationReducer", routerSetup.reducer);
console.log("enhancer", routerSetup.enhancer);


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
    <App />
  </Provider>
  ),
  document.getElementById('app')
)
