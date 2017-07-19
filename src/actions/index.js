//
// export const REQUEST_POSTS = 'REQUEST_POSTS'
// function requestPosts(subreddit) {
//   return {
//     type: REQUEST_POSTS,
//     subreddit
//   }
// }
//
// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// function receivePosts(subreddit, json) {
//   return {
//     type: RECEIVE_POSTS,
//     subreddit,
//     posts: json.data.children.map(child => child.data),
//     receivedAt: Date.now()
//   }
// }
//
// function fetchPosts(subreddit) {
//   return dispatch => {
//     dispatch(requestPosts(subreddit))
//     // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//     //   .then(response => response.json())
//     //   .then(json => dispatch(receivePosts(subreddit, json)))
//   }
// }

// function shouldFetchPosts(state, subreddit) {
//   const posts = state.postsBySubreddit[subreddit]
//   if (!posts) {
//     return true
//   } else if (posts.isFetching) {
//     return false
//   } else {
//     return posts.didInvalidate
//   }
// }

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


//
// export function fetchPostsIfNeeded(subreddit) {
//   // Note that the function also receives getState()
//   // which lets you choose what to dispatch next.
//
//   // This is useful for avoiding a network request if
//   // a cached value is already available.
//
//   return (dispatch, getState) => {
//     if (shouldFetchPosts(getState(), subreddit)) {
//       // Dispatch a thunk from thunk!
//       return dispatch(fetchPosts(subreddit))
//     } else {
//       // Let the calling code know there's nothing to wait for.
//       return Promise.resolve()
//     }
//   }
// }
