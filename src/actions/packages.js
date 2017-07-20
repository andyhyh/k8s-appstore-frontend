import authenticatedFetch from '../utils/'

export function fetchData() {
  return (dispatch, getState) => {
    const state = getState()
    const { fullPackageName } = state.location.payload
    const [repo, packageName] = decodeURIComponent(fullPackageName).split("/")

    const packageUrl = `${process.env.API_URL}/packages/${packageName}?repo=${repo}`
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
