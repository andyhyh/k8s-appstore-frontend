const packages = (state = {items: []}, action) => {
  switch (action.type) {
  case 'PACKAGE_SELECT':
    return Object.assign({}, state, {
      selected: action.payload,
      itemIsLoading: action.itemIsLoading
    });
  case 'PACKAGE_GET':
    return Object.assign({}, state, {
      inprogress: true,
      package_to_get: action.payload
    });
  case 'PACKAGE_FETCH_SUCCESS':
    return Object.assign({}, state, {
      item: action.item,
      itemIsLoading: action.itemIsLoading
    });
  case 'PACKAGE_FETCHING':
    return Object.assign({}, state, {
      itemIsLoading: action.itemIsLoading,
    });
  case 'PACKAGES_GETALL':
    return Object.assign({}, state, {
      inprogress: false,
      items: action.payload
    });
  case 'PACKAGES_FETCHING':
    return Object.assign({}, state, {
      inprogress: true
    });
  case 'PACKAGE':
    return Object.assign({}, state, {
      itemIsLoading: true
    });
  default:
    return state
  }
}

export default packages
