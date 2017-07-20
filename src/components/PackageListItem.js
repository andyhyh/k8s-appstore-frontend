import React from 'react'
import PropTypes from 'prop-types'
import {ListGroupItem} from 'react-bootstrap'

const Component = ({ onClick, completed, id, newest_chart }) => (
  <ListGroupItem
    onClick={onClick}
    header={newest_chart.Chart.name}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {newest_chart.Chart.version}
  </ListGroupItem>
)

// Component.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Component
