import React, { Component } from 'react'
import './tasks.css'
export class tasks extends Component {
    render() {
        return (
            <div>   
            {this.props.taskarr.map(
                task => 
                <div key={task} className="tasks">
                    
                    {task} 
                    
                    <div className="tasks_close">
                        x
                    </div>
                </div>
                
                )}
               
             </div>
        )
    }
}

export default tasks
