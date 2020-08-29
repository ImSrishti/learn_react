import React from 'react'
import {Link} from "react-router-dom";


export default function Child2(){
  
  const temp = 1
  const path = "/child4/"+temp  
    
  
  return (
      <div>
        <div>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/child1">child1</Link></li>
            <li><Link to="/child2">child2</Link></li>
            <li><Link to="/child3">child3</Link></li>
            <li><Link to={path}>child4</Link></li>
          </ul>
        </div>
        <div style={{backgroundColor:"blue"}}>
          child2
        </div>
      </div>
    )
}