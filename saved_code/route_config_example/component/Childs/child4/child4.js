import React from 'react'
import '../childcss/child.css'

export default function Child4(props){
  
  return (
      <div>
        <div className="child">
          {props.child} of {props.parent}
        </div>
      </div>
    )
}
