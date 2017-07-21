import { getAllPackages, fetchData } from './actions/packages'
import { fetchApplicationStatus, getAllApplications } from './actions/applications'

const routesMap = {
  HOME: '/',
  PACKAGES: { path: '/packages', thunk: getAllPackages() },
  PACKAGE: { path: '/packages/:fullPackageName', thunk: fetchData() },
  APPLICATIONS: { path: '/applications', thunk: getAllApplications(), requiresAuth: true },
  APPLICATION: { path: '/applications/:id', thunk: fetchApplicationStatus(), requiresAuth: true },
}

const options = {
  onBeforeChange: (dispatch, getState, action) => {
    const requiresAuth = routesMap[action.type].requiresAuth
    if (requiresAuth) {
      action.requiresAuth = true
    }
  }
}

export { routesMap, options }
