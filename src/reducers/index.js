import { combineReducers } from 'redux'

// import {
//   SELECT_REDDIT, INVALIDATE_REDDIT,
//   REQUEST_POSTS, RECEIVE_POSTS
// } from '../actions'

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


//
// const posts = (state = {
//   isFetching: false,
//   didInvalidate: false,
//   items: []
// }, action) => {
//   switch (action.type) {
//     case INVALIDATE_REDDIT:
//       return {
//         ...state,
//         didInvalidate: true
//       }
//     case REQUEST_POSTS:
//       return {
//         ...state,
//         isFetching: true,
//         didInvalidate: false
//       }
//     case RECEIVE_POSTS:
//       return {
//         ...state,
//         isFetching: false,
//         didInvalidate: false,
//         items: action.posts,
//         lastUpdated: action.receivedAt
//       }
//     default:
//       return state
//   }
// }
//
// const postsByReddit = (state = { }, action) => {
//   switch (action.type) {
//     case INVALIDATE_REDDIT:
//     case RECEIVE_POSTS:
//     case REQUEST_POSTS:
//       return {
//         ...state,
//         [action.reddit]: posts(state[action.reddit], action)
//       }
//     default:
//       return state
//   }
// }

export default {
  auth,
  packages
}
