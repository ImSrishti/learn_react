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

    render() {
        return (
            <div className="startpoint">
            <div className="flex-container">
                <div>
                    <input type="text" value={this.state.temptimer} className="Box" onChange={this.timerChangeHandler} />
                </div>
                <div className="Box" onClick={this.setTimerHandler}>
                    Start
                </div>
                 </div>

                <div className="flex-container">
                    <div className="Box">
                        Clear
                    </div>
                    <div className="Box">
                        Stop
                    </div>
                </div>
             </div>

        )
    }
}

export default startpoint
