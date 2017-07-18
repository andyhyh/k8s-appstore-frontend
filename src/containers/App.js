import React from 'react'
import Footer from '../components/Footer'
import PackageItemController from './PackageItemController'
import PackageListController from './PackageListController'
import MainContent from '../components/MainContent'
import Header from '../components/Header'

import { connect } from 'react-redux'
import { closePackage } from '../actions/'

const mainContent = {
  HOME: <MainContent />,
  PACKAGE: <PackageItemController />,
  PACKAGES: <PackageListController />
}

const c = (x) => {
  console.log("CONTENT TYPE IS ", x);
  return mainContent[x];
}

const App = ({locationType, locationPayload}) => (
  <div>
    <Header />
    { c(locationType) }
    <Footer />
  </div>
)


const mapStateToProps = (state) => ({
  locationType: state.location.type,
  locationPayload: state.location.payload
})

const mapDispatchToProps = {
}

const Controller = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default Controller
