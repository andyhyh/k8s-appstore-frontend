const initialAuthState = {
  inprogress: false,
  user: {
    info: undefined,
    token: undefined
  }
};

const auth = (state = initialAuthState, action) => {
  switch (action.type) {
  case 'AUTH_FETCH_USER_INFO':
    return Object.assign({}, state, {
      inprogress: false,
      user: {
        info: action.payload.user.info,
        token: state.user.token
      }
    });
  case 'AUTH_SUCCESS':
    return Object.assign({}, state, {
      inprogress: false,
      user: {
        token: action.payload.user.token,
        info: state.user.info
      }
    });
  case 'AUTH_FAILED':
    return Object.assign({}, state, {
      inprogress: false
    });
  default:
    return state
  }
}
export default auth
