import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ListGroup} from 'react-bootstrap'
import Link from 'redux-first-router-link'

var FontAwesome = require('react-fontawesome')
import PackageListItem from './PackageListItem'

const progress = (
  <div><FontAwesome name='circle-o-notch' spin /> Loading data...</div>
)

class PackageList extends Component {

  render() {
    if (this.props.isLoading) {
      return <p>loading</p>
    }

    console.log(this.props)
    return (
      <div className="container">
        <div className="uninett-color-white uninett-padded gutter">
          <ListGroup>
            {this.props.items.map(item =>
              <Link key={item.newest_chart.Name} to={`/packages/${encodeURIComponent(item.newest_chart.Name)}`}>
                <PackageListItem
                  {...item}
                />
             </Link>
            )}
          </ListGroup>
        </div>
      </div>
    )
  }
}

export default PackageList
