import React from 'react'
import '../Parentcss/Parent.css'
import {Switch,Link} from "react-router-dom";
import RouteWithSubRoutes from '../../router/routewithsubroutes.js'

export default function Parent3({routes}){
  let temp = 'Parent3';
  return (
    <div className="childlink">
    <ul className="links">

      { 
       routes.map((route, i) => (
       <li className="list" key={i} ><Link to={route.path}>{route.component.name}</Link></li>
      ))
      }
    </ul>
    <Switch>
        {routes.map((route, i) => (
           <RouteWithSubRoutes key={i} {...route} parent={temp} child={route.component.name}/>
        ))}
      </Switch>
  </div>
    )
}