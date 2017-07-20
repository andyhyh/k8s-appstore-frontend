const applications = (state = {applications: [], isLoading: true}, action) => {
  switch (action.type) {
  case 'APPLICATION_SELECT':
    return Object.assign({}, state, {
      selected: action.payload,
      itemIsLoading: action.itemIsLoading
    });
  case 'APPLICATION_GET':
    return Object.assign({}, state, {
      inprogress: true,
      package_to_get: action.payload
    });
  case 'APPLICATION_FETCH_SUCCESS':
    return Object.assign({}, state, {
      item: action.item,
      itemIsLoading: action.itemIsLoading
    });
  case 'APPLICATION_FETCHING':
    return Object.assign({}, state, {
      itemIsLoading: action.itemIsLoading,
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
      itemIsLoading: true
    });
  default:
    return state
  }
}

export default applications
