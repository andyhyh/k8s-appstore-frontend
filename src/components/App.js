import React from 'react'
import Footer from './Footer'
import PackageItemController from '../containers/PackageItemController'
import PackageListController from '../containers/PackageListController'
import MainContent from './MainContent'
import Header from './Header'


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

export default App
