import React from 'react'
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types'

import './controls.scss'

const controls = (props) => (
  <div className="controls">
    <CSSTransition in={props.active} timeout={250} classNames="left-arrow-appearance" >
      <div className="arrow left-arrow" onClick={props.prevSlide}/>
    </CSSTransition>

    <CSSTransition in={props.active} timeout={250} classNames="right-arrow-appearance" >
      <div className="arrow right-arrow" onClick={props.nextSlide} />
    </CSSTransition>
  </div>
)

controls.propTypes = {
  nextSlide: PropTypes.func.isRequired,
  prevSlide: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default controls
