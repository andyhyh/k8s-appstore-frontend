export function fetchData() {
  return (dispatch, getState) => {
    const state = getState()
    const [repo, packageName] = decodeURIComponent(state.location.payload.id).split("/")

    dispatch(itemIsLoading(true))
    const packageUrl = `${process.env.API_URL}/packages/${packageName}?repo=${repo}`
    console.log(packageUrl)
    fetch(packageUrl)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        return response
      })
      .then((response) => response.json())
      .then((item) => dispatch(itemFetchSuccess(item)))
  }
}

export function getAllPackages() {
  return (dispatch, getState) => {
    const state = getState()

    if (state.packages.items.length > 0) {
      dispatch({
        type: "PACKAGES_GETALL",
        payload: state.packages.items,
        isLoading: false
      })
      return
    }

    dispatch({
      type: "PACKAGES_FETCHING",
      payload: null,
      isLoading: true
    })
    return fetch(process.env.API_URL + '/packages')
    .then((response) => response.json())
      .then((items) => {
        console.log("Got response with packages", items)
        dispatch({
          type: "PACKAGES_GETALL",
          payload: items,
          isLoading: false
        })
      })
      .catch((error) => {
        console.error("Error fetching packages", error)
        dispatch({
          type: "PACKAGES_FAILED",
          payload: {},
          error: error,
          isLoading: false
        })
    })
  }
}

export function getAllApplications() {
  return (dispatch, getState) => {
    let state = getState()

    if (state.applications.applications.length > 0) {
      dispatch({
        type: "APPLICATIONS_GETALL",
        payload: state.applications.applications,
        isLoading: false
      })
      return
    }

    dispatch({
      type: "APPLICATIONS_FETCHING",
      payload: null,
      isLoading: true,
      requiresAuth: true
    })
    const url = process.env.API_URL + '/releases'
    state = getState()
    return authenticatedFetch(url, state).then((items) => {
      console.log("Got response with packages", items)
      dispatch({
        type: "APPLICATIONS_GETALL",
        payload: items,
        isLoading: false
      })
    })
  }
}

function authenticatedFetch(url, state) {
  let config = {"headers": {}}

  config.headers.Authorization = 'Bearer ' + state.auth.user.token.access_token
  config.method = "GET"
  config.mode = "cors"
  console.log(config)
  return fetch(url, config).then((response) => response.json())
}

export const PACKAGE_SELECT = 'PACKAGE'
export function selectPackage(packageId) {
  return {
    type: PACKAGE_SELECT,
    payload: {
      id: packageId,
      itemIsLoading: true
    }
  }
}

export const APPLICATION_SELECT = 'APPLICATION'
export function selectApplication(applicationName) {
  return {
    type: APPLICATION_SELECT,
    payload: {
      id: applicationName,
      itemIsLoading: true
    }
  }
}


export function itemIsLoading(isLoading) {
  return {
    type: "PACKAGE_FETCHING",
    itemIsLoading: isLoading
  }
}

export function itemFetchSuccess(item) {
  return {
    type: "PACKAGE_FETCH_SUCCESS",
    itemIsLoading: false,
    item: item
  }
}

export function closePackage() {
  return {
    type: 'PACKAGES',
    payload: null
  }
}

export function listPackages() {
  return {
    type: 'PACKAGES',
    payload: null,
    isLoading: true
  }
}
