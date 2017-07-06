import React from 'react'
import PropTypes from 'prop-types'
var FontAwesome = require('react-fontawesome')

const progress = (
  <div><FontAwesome name='circle-o-notch' spin /> Loading data...</div>
)

const Component = ({ inprogress, item, actClosePackage }) => (
  <div>
    {inprogress ? progress : null }
    <button onClick={actClosePackage} type="button" className="close">
      <span aria-hidden="true">×</span>
      <span className="sr-only">Close alert</span>
    </button>
    Package title is {item.title}
  </div>
)

// Component.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Component
