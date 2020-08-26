import React, { Component } from 'react'
import './startpoint.css'
export class startpoint extends Component {
    state = {
        temptimer: 10,
    }

    timerChangeHandler = (event) => {
        this.setState({
            temptimer: event.target.value
        })
    }
    setTimerHandler = () => {
        this.props.click(this.state.temptimer)
    }
    stopTimer = () =>{
        this.props.click2();
    }
    clearTimer = () =>{
        this.props.click3();
    }

    render() {
        return (
            <div className="startpoint">
            <div className="flex-container">
                <div className="iBox" >
                    <input type="text" value={this.state.temptimer} className="inputBox" onChange={this.timerChangeHandler} />
                </div>
                <div className="clearBox" onClick={this.clearTimer}>
                        Clear
                    </div>
                 </div>

                <div className="flex-container">
                    
                    <div className="Box" onClick={this.setTimerHandler}>
                    Start
                </div>
                    <div className="Box" onClick={this.stopTimer}>
                        Stop
                    </div>
                </div>
             </div>

        )
    }
}

export default startpoint
