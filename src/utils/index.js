export default function authenticatedFetch(url, state) {
  let config = {"headers": {}}

  config.headers.Authorization = 'Bearer ' + state.auth.user.token.access_token
  config.method = "GET"
  config.mode = "cors"
  console.log(config)
  return fetch(url, config).then((response) => response.json())
}
