import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ListGroup} from 'react-bootstrap'

var FontAwesome = require('react-fontawesome')
import ApplicationListItem from './ApplicationListItem'
import Link from 'redux-first-router-link'

const progress = (
  <div><FontAwesome name='circle-o-notch' spin /> Loading data...</div>
)

class ApplicationList extends Component {

  render() {
    if (this.props.isLoading) {
      return <p>loading</p>
    }

    console.log(this.props.applications)
    return (
      <div className="container">
        <div className="uninett-color-white uninett-padded gutter">
          <ListGroup>
            {this.props.applications.map(application =>
            <Link key={application.name} to={`/applications/${application.name}`}>
              <ApplicationListItem
                {...application}
              /></Link>
            )}
          </ListGroup>
        </div>
      </div>
    )
  }
}

export default ApplicationList
