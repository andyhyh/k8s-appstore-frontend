import React from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon, Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap'

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

    <div className="container">
      <div className="uninett-color-white uninett-padded gutter">
        <PackageItemController />
      </div>
    </div>

    <div className="container">
      <div className="uninett-color-white uninett-padded gutter">
        <PackageListController />
      </div>
    </div>

    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={8}>YaY this is it</Col>
      </Row>

      <Row className="show-grid">
        <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
      </Row>

      <Row className="show-grid">
        <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
      </Row>

      <Row className="show-grid">
        <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
        <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
      </Row>
    </Grid>

  </div>

)

export default MainContent
