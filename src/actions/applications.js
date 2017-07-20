import authenticatedFetch from '../utils/'
export function fetchApplicationStatus() {
  return (dispatch, getState) => {
    const state = getState()
    const applicationName = decodeURIComponent(state.location.payload.id)

    dispatch(applicationIsLoading(true))
    const applicationUrl = `${process.env.API_URL}/releases/${applicationName}/status`
    fetch(applicationUrl)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        return response
      })
      .then((response) => response.json())
      .then((application) => dispatch(applicationFetchSuccess(application)))
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

export function applicationIsLoading(isLoading) {
  return {
    type: "APPLICATION_FETCHING",
    applicationIsLoading: isLoading
  }
}

export function applicationFetchSuccess(application) {
  return {
    type: "APPLICATION_FETCH_SUCCESS",
    applicationIsLoading: false,
    application: application
  }
}

export function closeApplication() {
  return {
    type: 'APPLICATIONS',
    payload: null
  }
}