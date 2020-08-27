import React, { Component } from 'react'
import './tasks.css'
export class tasks extends Component {
  
    
    setRemoveIndex =(event) =>{
        debugger
        console.log(event)
       // this.props.setIndex(index)
       // console.log(index)
    }
    render() {
        
        return (
            <div>   
            {this.props.taskarr.map(
                (task,index) => 
                <div key={index} className="tasks">
                    
                    {task} 
                    
                    <div  value={index} className="tasks_close" onClick={this.setRemoveIndex}>
                        x
                    </div>
                </div>
                
                )}
               
             </div>
        )
    }
}

export default tasks
