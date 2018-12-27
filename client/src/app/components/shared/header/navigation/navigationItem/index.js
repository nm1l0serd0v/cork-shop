import React from 'react'
import PropTypes from 'prop-types'

const navigationItem = (props) => {
  // TODO: detect from path
  const isActive = false;

  const hasChildren = props.children.length > 0 

  const childrenClass = hasChildren ? 'menu-item-has-children' : ''
  const currentMenu = isActive ? 'current-menu-item' : ''

  const children = props.children.map((element, i) => ( 
    <li key={i}>
      <a href={element.path}>{element.text}</a>
    </li>
  ))

  const childrenList = <ul className="sub-menu">{children}</ul>

  return(
    <li className={[childrenClass, currentMenu].join(' ')}>
      <a href={props.path}>{props.text}</a>
      { hasChildren ? childrenList : null }
    </li>
  )
};

navigationItem.defaultProps = { 
  children: []
}

navigationItem.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.array
}

export default navigationItem
