import React from 'react'
import PropTypes from 'prop-types'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

import PackageListItem from './PackageListItem'

const Component = ({ items, actSelectPackage }) => (
  <div className="container">
    <div className="uninett-color-white uninett-padded gutter">
      <ListGroup>
        {items.map(item =>
          <PackageListItem
            key={item.id}
            {...item}
            onClick={() => actSelectPackage(item.id)}
          />
        )}
      </ListGroup>
    </div>
  </div>
)

// Component.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }

export default Component
