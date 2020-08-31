import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Parent1 from '../Parents/Parent1/Parent1.js'
import Parent2 from '../Parents/Parent2/Parent2.js'
import Parent3 from '../Parents/Parent3/Parent3.js'
import Parent4 from '../Parents/Parent4/Parent4.js'
import Child1 from '../Childs/child1/child1.js'
import Child2 from '../Childs/child2/child2.js'
import Child3 from '../Childs/child3/child3.js'
import Child4 from '../Childs/child4/child4.js'

import RouteWithSubRoutes from './routewithsubroutes'
import './routerconfig.css'
const routes = [

  {
    path: "/parent1",
    component: Parent1,
    routes: [
      { path: "/parent1/child1", component: Child1 },
      { path: "/parent1/child2", component: Child2 },
      { path: "/parent1/child3", component: Child3 },
      { path: "/parent1/child4", component: Child4 }
    ]
  },
  {
    path: "/parent2",
    component: Parent2,
    routes: [
      { path: "/parent2/child1", component: Child1 },
      { path: "/parent2/child2", component: Child2 },
      { path: "/parent2/child3", component: Child3 },
      { path: "/parent2/child4", component: Child4 }
    ]
  },
  {
    path: "/parent3",
    component: Parent3,
    routes: [
      { path: "/parent3/child1", component: Child1 },
      { path: "/parent3/child2", component: Child2 },
      { path: "/parent3/child3", component: Child3 },
      { path: "/parent3/child4", component: Child4 }
    ]
  },
  {
    path: "/parent4",
    component: Parent4,
    routes: [
      { path: "/parent4/child1", component: Child1 },
      { path: "/parent4/child2", component: Child2 },
      { path: "/parent4/child3", component: Child3 },
      { path: "/parent4/child4", component: Child4 }
    ]
  }

];


export default function RouterConfig() {

  return (
    <div className="home">

      <Router>
        <div className="home2">
          <div className="parentlink">
            <ul className="links">
            {routes.map((route, i) => (
                     <li className="list" key={i}>
                       <Link to={route.path}>{route.component.name}</Link>
                     </li>
              ))}
            </ul>
          </div>
          <div  className="flex-container">
            
             
            <Switch>
              <Route exact path="/">SELECT PARENT THEN CHILDREN</Route>
              {routes.map((route, i) => (
                     <RouteWithSubRoutes key={i} {...route} />
              ))}

              {/* <Route path="/child1" children={<Child1/>}></Route>
              <Route path="/child2" children={<Child2 />}></Route>
              <Route path="/child3" children={<Child3 />}></Route>
              <Route path="/child4" children={<Child4 />}></Route> */}
            </Switch>
          </div>
        </div>
      </Router>

    </div>
  )

}

