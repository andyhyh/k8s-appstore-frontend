import axios from '../../../node_modules/axios/lib/axios.js'
import jso from '../../../lib/jso'

let appJso = new jso({
  providerID: "dataporten",
  client_id: "75adc2bb-1800-4f1c-abe4-bb7da7080485",
  redirect_uri: "http://localhost:8080/",
  authorization: "https://auth.dataporten.no/oauth/authorization"
  // scopes: { request: ["userinfo"]}
})
appJso.callback()

export default store => next => action => {
  if (!action.requiresAuth) {
    return next(action)
  }

  const state = store.getState()
  if (state.user) {
    return next(action)
  }

  let oToken = {}

  appJso.getToken((token) => {
    oToken = token
  })
  store.dispatch({
    type: "AUTH_SUCCESS",
    payload: {
      "user" : {
        "token": oToken
      }
    }
  })

  if (!state.auth.user.info) {
    fetch({
      method: 'GET',
      url: 'https://auth.dataporten.no/openid/userinfo'
    }, oToken)
      .then((response) => {
        console.log("Got the userinfo response", response)
        store.dispatch({
          type: "AUTH_FETCH_USER_INFO",
          payload: {
            "user" : {
              "info": {
                "name": response.data.name,
                "icon": response.data.picture,
              },
            }
          }
        })
      })
  }

  return next(action)
}

function fetch(config, token) {
  if (!config.headers) {
    config.headers = {}
  }
  config.headers.Authorization = 'Bearer ' + token.access_token
  return axios.request(config)
}
