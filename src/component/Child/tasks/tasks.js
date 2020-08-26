import React, { Component } from 'react'
import './tasks.css'
export class tasks extends Component {
    render() {
        return (
            <div>   
            {this.props.taskarr.map(
                (task,index) => <div key={task} className="tasks">{task}
                <div className="button"><button >x</button></div>
                </div> 
                )}
               
             </div>
        )
    }
}

export default tasks
