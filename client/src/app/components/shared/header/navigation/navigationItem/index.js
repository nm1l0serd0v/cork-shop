import React from 'react'
import PropTypes from 'prop-types'

const navigationItem = (props) => {
  // TODO: detect from path
  const isActive = false;

  const childrenClass = props.children.length > 0 ? 'menu-item-has-children' : ''
  const currentMenu = isActive ? 'current-menu-item' : ''

  return(
    <li className={[childrenClass, currentMenu].join(' ')}>
      <a href={props.path}>{props.pathName}</a>

      <ul className="sub-menu">

        {props.children.map((element, i) => (
          <li key={i}>
            <a href={element.path}>{element.pathName}</a>
          </li>
        ))}
      </ul>
    </li>
  )
};

navigationItem.defaultProps = { 
  children: []
}

navigationItem.propTypes = {
  path: PropTypes.string.required,
  pathName: PropTypes.string.required,
  children: PropTypes.array
}

export default navigationItem
