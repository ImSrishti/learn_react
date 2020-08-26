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


  render() {
    return (
      <div className="home">
        <div className="label">{this.state.counter}</div>
        <div><Start click={this.startTimerHandler}/></div>
      </div>

    );
  }

}

export default Home;