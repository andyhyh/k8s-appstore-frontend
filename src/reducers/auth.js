const initialAuthState = {
  is: false,
  inprogress: false,
  user: {}
};

const auth = (state = initialAuthState, action) => {
  switch (action.type) {
  case 'AUTH_FETCH_USER_INFO':
    return Object.assign({}, state, {
      is: true,
      inprogress: false,
      user: action.payload.user
    });
  case 'AUTH_SUCCESS':
    return Object.assign({}, state, {
      is: true,
      inprogress: false,
      user: action.payload.user
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
