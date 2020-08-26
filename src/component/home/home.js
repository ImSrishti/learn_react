import React, { Component } from 'react';
import './home.css'
import Start from '../Child/startpoint/startpoint';

class Home extends Component {
  state = {
    counter: 10,
    set_id:null
  }
  startTimerHandler = (timercount) => {
    if(this.state.set_id){
      clearInterval(this.state.set_id)
    }
    const set_id = setInterval(() => {
        timercount= timercount - 1;
          if (timercount > 0) {
            this.setState({
              counter: timercount 
            })    
          }
          else {
            clearInterval(this.state.set_id)
          }
         
        }, 1000)
    
    this.setState({
      set_id:set_id
    })
  }
  stopTimerHandler = () =>{
    clearInterval(this.state.set_id)
  }

  clearTimeInterval = () =>{
    this.setState({
      counter:0,
      set_id: null
    })
  }

  render() {
    return (
      <div className="home">
        <div className="label">{this.state.counter}</div>
        <div><Start click={this.startTimerHandler} 
                click2={this.stopTimerHandler} 
                click3={this.clearTimeInterval}/>
        </div>
      </div>

    );
  }

}

export default Home;