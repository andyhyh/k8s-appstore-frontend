import React from 'react'
import PropTypes from 'prop-types'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

const Component = ({ onClick, completed, id, title }) => (
  <ListGroupItem
    onClick={onClick}
    header={title}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {id}
  </ListGroupItem>
)

// Component.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Component
