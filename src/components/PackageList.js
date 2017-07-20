import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ListGroup} from 'react-bootstrap'

var FontAwesome = require('react-fontawesome')
import PackageListItem from './PackageListItem'

const progress = (
  <div><FontAwesome name='circle-o-notch' spin /> Loading data...</div>
)

class PackageList extends Component {

  componentWillMount() {
    this.props.getAllPackages()
  }

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
              <PackageListItem
                key={item.newest_chart.Name}
                {...item}
                onClick={() => this.props.actSelectPackage(item.newest_chart.Name)}
              />
            )}
          </ListGroup>
        </div>
      </div>
    )
  }
}

export default PackageList
