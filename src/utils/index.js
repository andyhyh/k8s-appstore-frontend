export default function authenticatedFetch(url, token) {
  let config = {"headers": {}}

  config.headers.Authorization = 'Bearer ' + token.access_token
  config.method = "GET"
  config.mode = "cors"
  console.log(config)
  return fetch(url, config).then((response) => response.json())
}
