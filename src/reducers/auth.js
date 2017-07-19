const initialAuthState = {
  is: false,
  inprogress: true
};

const auth = (state = initialAuthState, action) => {
  switch (action.type) {
  case 'AUTH_SUCCESS':
    return Object.assign({}, state, {
      is: true,
      inprogress: false,
      name: action.payload.name,
      icon: action.payload.icon
    });
  case 'AUTH_FAILED':
    return Object.assign({}, state, {
      is: false,
      inprogress: false
    });
  default:
    return state
  }
}
export default auth
