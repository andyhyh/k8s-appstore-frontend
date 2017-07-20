import React, { Component } from 'react'
import PropTypes from 'prop-types'
var FontAwesome = require('react-fontawesome')

const progress = (
  <div><FontAwesome name='circle-o-notch' spin /> Loading data...</div>
)

class ApplicationItem extends Component {
  componentWillMount() {
    this.props.getData()
  }

  render() {
    console.log("props", this.props)
    if (this.props.isLoading) {
      return <p>loading</p>
    }

    return (
    <div className="container">
      <div className="uninett-color-white uninett-padded gutter">
        {this.props.isLoading ? progress : null }
        <button onClick={this.props.actCloseApplication} type="button" className="close">
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close alert</span>
        </button>
        <h2>{this.props.application.name}</h2>
        <h4>{this.props.application.status}</h4>
      </div>
    </div>
    )
  }
}

ApplicationItem.propTypes = {
  getData: PropTypes.func.isRequired,
  actCloseApplication: PropTypes.func.isRequired,
  application: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
  
};

export default ApplicationItem
