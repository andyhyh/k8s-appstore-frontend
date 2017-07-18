import React from 'react'
import PropTypes from 'prop-types'
var FontAwesome = require('react-fontawesome')

const progress = (
  <div><FontAwesome name='circle-o-notch' spin /> Loading data...</div>
)

const Component = ({ inprogress, item, actClosePackage }) => (
  <div className="container">
    <div className="uninett-color-white uninett-padded gutter">
      {inprogress ? progress : null }
      <button onClick={actClosePackage} type="button" className="close">
        <span aria-hidden="true">×</span>
        <span className="sr-only">Close alert</span>
      </button>
      <h2>{item.newest_chart.Name}</h2>
      <h4>{item.newest_chart.Version}</h4>
      <h6>{item.repo}</h6>
    </div>
  </div>
)

// Component.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Component
