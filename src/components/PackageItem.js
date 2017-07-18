import React, { Component } from 'react'
import PropTypes from 'prop-types'
var FontAwesome = require('react-fontawesome')

const progress = (
  <div><FontAwesome name='circle-o-notch' spin /> Loading data...</div>
)

class PackageItem extends Component {
  render() {
    return (
    <div className="container">
      <div className="uninett-color-white uninett-padded gutter">
        {this.props.inprogress ? progress : null }
        <button onClick={this.props.actClosePackage} type="button" className="close">
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close alert</span>
        </button>
        <h2>{this.props.item.newest_chart.Name}</h2>
        <h4>{this.props.item.newest_chart.Version}</h4>
        <h6>{this.props.item.repo}</h6>
      </div>
    </div>
    )
  }
}

export default PackageItem
