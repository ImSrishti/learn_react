import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

import Home from '../home/home.js'
import Child1 from '../child1/child1.js'
import Child2 from '../child2/child2.js'
import Child3 from '../child3/child3.js'
import Child4 from '../child4/child4.js'

export class home extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/child1"><Child1 /></Route>
            <Route path="/child2"><Child2 /></Route>
            <Route path="/child3"><Child3 /></Route>
            <Route path="/child4/:id" children={<Child4 />}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default home
