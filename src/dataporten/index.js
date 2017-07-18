import axios from '../../node_modules/axios/lib/axios.js'
import jso from '../ext/jso';

class DataportenClient {

  constructor(store) {
    this.store = store
    this.token = null
    this.apiurl = process.env.API_URL
    this.jso = new jso({
  		providerID: "dataporten",
  		client_id: "75adc2bb-1800-4f1c-abe4-bb7da7080485",
  		redirect_uri: "http://localhost:8080/",
  		authorization: "https://auth.dataporten.no/oauth/authorization"
  		// scopes: { request: ["userinfo"]}
  	})
    this.jso.callback()
  }

  authenticate() {
    return this.jso.getToken((token) => {
      console.log("We got the token", token)
      this.token = token
      return this.getUserinfo()

    })
  }

  getUserinfo() {
    // console.log("======> AXIOS", axios);
    return this.fetch({
      method: 'GET',
      url: 'https://auth.dataporten.no/openid/userinfo'
    })
    .then((response) => {
      console.log("Got the userinfo response", response)
      this.store.dispatch({
        type: "AUTH_SUCCESS",
        payload: {
          "name": response.data.name,
          "icon": response.data.picture
        }
      })
    })
    .catch((error) => {
      console.error("Error handling login process", error);
      this.store.dispatch({
        type: "AUTH_FAILED",
        payload: {},
        error: error
      });
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

export default DataportenClient;
