import axios from '../../node_modules/axios/lib/axios.js'

class AppstoreAPI {

  constructor(store, token) {
    this.store = store
    this.apiurl = process.env.API_URL
    this.token = token
  }

  bootstrap() {
    return Promise.all([
      this.getPackages()
    ])
  }

  getPackages() {
    console.log("Get packages")
    this.store.dispatch({
      type: "PACKAGES_FETCHING",
      payload: null
    })
    return this.fetch({
      method: 'GET',
      url: this.apiurl + '/packages'
    })
    .then((response) => {
      console.log("Got response with packages", response)
      this.store.dispatch({
        type: "PACKAGES_GETALL",
        payload: response.data
      })
    })
    .catch((error) => {
      console.error("Error fetching packages", error)
      this.store.dispatch({
        type: "PACKAGES_FAILED",
        payload: {},
        error: error
      })
    })
  }

  fetch(config) {
    if (!config.headers) {
      config.headers = {}
    }
    config.headers.Authorization = 'Bearer ' + this.token.access_token
    return axios.request(config)
  }
}

export default AppstoreAPI;
