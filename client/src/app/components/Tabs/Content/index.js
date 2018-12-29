import React from 'react'

const content = (props) => {
  return(
    <div role="tabpanel" className="tab-pane transition fade scale in active" >
      {props.children}
    </div>
  )
}

export default content
