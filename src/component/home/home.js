import React, { Component } from 'react'
import Taskopr from '../Child/taskopr/taskopr';
import './home.css'
export class home extends Component {
  
  state={
    taskarr:['Bob', 'Willy', 'Mini']
  }
  setTaskArr = (tempArray) =>{
    this.setState({
      taskarr:tempArray
    })
  }

  render() {
    return (
     <div className="flex-container">
       
      <div className="home">
      <div className="tasklist">Task List</div>
        <Taskopr data={this.state.taskarr} setData={this.setTaskArr}/>
      </div>
      </div>
     
    )
  }
}

export default home
