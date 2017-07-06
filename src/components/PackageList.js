import React from 'react'
import PropTypes from 'prop-types'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import Link from 'redux-first-router-link'

import PackageListItem from './PackageListItem'

const Component = ({ items, actSelectPackage }) => (
  <ListGroup>
    {items.map(item =>
      <Link to={{ type: 'PACKAGE', payload: {id: item.id} }}>
        <PackageListItem
          key={item.id}
          {...item}
          // onClick={() => actSelectPackage(item.id)}
        />
      </Link>
    )}
  </ListGroup>
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
