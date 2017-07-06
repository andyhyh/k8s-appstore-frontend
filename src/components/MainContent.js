import React from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon, Jumbotron, Button} from 'react-bootstrap'

import PackageListController from '../containers/PackageListController'
import PackageItemController from '../containers/PackageItemController'

const MainContent = () => (
  <div>
    <div className="container">
      <Jumbotron className="uninett-color-lightBlue">
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>
    </div>

  </div>

)

export default MainContent
