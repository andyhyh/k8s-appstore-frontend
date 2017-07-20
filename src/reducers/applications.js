const applications = (state = {applications: [], isLoading: true}, action) => {
  switch (action.type) {
  case 'APPLICATION_SELECT':
    return Object.assign({}, state, {
      selected: action.payload,
      applicationIsLoading: action.applicationIsLoading
    });
  case 'APPLICATION_GET':
    return Object.assign({}, state, {
      inprogress: true,
      package_to_get: action.payload
    });
  case 'APPLICATION_FETCH_SUCCESS':
    return Object.assign({}, state, {
      application: action.application,
      applicationIsLoading: action.applicationIsLoading
    });
  case 'APPLICATION_FETCHING':
    return Object.assign({}, state, {
      applicationIsLoading: action.applicationIsLoading,
      isLoading: action.isLoading,
    });
  case 'APPLICATIONS_GETALL':
    return Object.assign({}, state, {
      applications: action.payload,
      isLoading: action.isLoading
    });
  case 'APPLICATIONS_FETCHING':
    return Object.assign({}, state, {
      isLoading: true
    });
  case 'APPLICATION':
    return Object.assign({}, state, {
      applicationIsLoading: true
    });
  default:
    return state
  }
}

export default applications
