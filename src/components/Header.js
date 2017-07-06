import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import LoginController from '../containers/LoginController';
import Link from 'redux-first-router-link';

const stylex = {
  // "margin-top": "12px"
}

const uninettLogo = require('../../node_modules/uninett-bootstrap-theme/images/UNINETT_logo.svg')

const Header = () => (
    <Navbar >
      <Navbar.Header style={stylex}>
        <Navbar.Brand>
          <Link to="/"><img src={uninettLogo} /></Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <LoginController></LoginController>
      </Nav>
      <Nav>
        <Link to="/packages"><NavItem eventKey={1} href="/packages">Library</NavItem></Link>
        <NavItem eventKey={2} href="/applications">My applications</NavItem>
        {/*
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        */}
      </Nav>

    </Navbar>
)

export default Header
