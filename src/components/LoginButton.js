import React from 'react'
import ReactDOM from 'react-dom'

var FontAwesome = require('react-fontawesome')
import {NavDropdown, NavItem, MenuItem, Glyphicon} from 'react-bootstrap'


class Component extends React.Component {

  // actLogin(e) {
  //   e.preventDefault();
  //   console.log("Will perform login");
  // }
  //
  // actLogout(e) {
  //   e.preventDefault();
  //   console.log("Will perform logout");
  // }

  getLoginInProgress() {
    return (
      <NavItem eventKey={1} ><FontAwesome name='circle-o-notch' spin /> Logging in…</NavItem>
    )
  }

  getLoginButton() {
    return (
      <NavItem eventKey={1} onClick={this.props.actLogin}>Login</NavItem>
    )
  }

  getAuthComponent() {
    return (
      <NavDropdown eventKey={3} title={this.props.auth.user.info.name} id="basic-nav-dropdown">
        <MenuItem eventKey={3.1} href="https://minside.dataporten.no"><Glyphicon glyph="user" /> Min Side</MenuItem>
        <MenuItem eventKey={3.2} href="https://grupper.dataporten.no"><Glyphicon glyph="user" /> Mine grupper</MenuItem>
        <MenuItem eventKey={3.3} href="https://grupper.dataporten.no"><Glyphicon glyph="cog" /> Dataporten Dashboard</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4} onClick={this.props.actLogout}><Glyphicon glyph="log-out" /> Logout</MenuItem>
      </NavDropdown>
    )

  }
  render() {
    if (this.props.auth.user.info) {
      return this.getAuthComponent()
    } else if (this.props.auth.inprogress) {
      return this.getLoginInProgress()
    }
    return this.getLoginButton()

  }

}



// const component = props => (
//   <div>JA {props.auth}</div>
// );

export default Component;
