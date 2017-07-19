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
    payload: null
  }
}
