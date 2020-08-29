import React from 'react'
import {Link} from "react-router-dom";

export default function Home() {

    const temp = 1
    const path = "/child4/"+temp

    return (

      <div>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/child1">child1</Link></li>
          <li><Link to="/child2">child2</Link></li>
          <li><Link to="/child3">child3</Link></li>
          <li><Link to={path}>child4</Link></li>
        </ul>
        Home
      </div>
    )
}