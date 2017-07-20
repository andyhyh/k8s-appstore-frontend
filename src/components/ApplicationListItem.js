import React from 'react'
import PropTypes from 'prop-types'
import {ListGroupItem} from 'react-bootstrap'

const Component = ({ onClick, completed, id, name }) => (
  <ListGroupItem
    onClick={onClick}
    header={name}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
  </ListGroupItem>
)

// Component.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Component
