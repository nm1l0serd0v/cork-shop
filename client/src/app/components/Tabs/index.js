import React from 'react'
import PropTypes from 'prop-types'

import Tab from './Tab'

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
      collection: props.collection
    }

    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler(index) {
    this.setState({
      currentIndex: index
    })
  }

  render(){
    return(
      <div className="col-sm-12">
        <ul className="nav-tabs text-center" role="tablist">
          {this.state.collection.map((tab, i) => (
            <Tab 
              key={i}
              index={i}
              clicked={this.onClickHandler}
              active={i === this.state.currentIndex} {...tab}
            />
          ))}
        </ul>

        <div className="tabs-content">
        </div>
      </div>
    )
  }
}

Tabs.propTypes = {
  collection: PropTypes.array.isRequired
}

export default Tabs
