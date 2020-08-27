import React, { Component } from 'react'
import './tasks.css'
export class tasks extends Component {
  
    
    setRemoveIndex =(index) =>{
        this.props.setIndex(index)
    }
    render() {
        
        return (
            <div>   
            {this.props.taskarr.map(
                (task,index) => 
                <div key={index} className="tasks">
                    
                    {task} 
                    
                    <div  value={index} className="tasks_close" onClick={()=>this.setRemoveIndex(index)}>
                        x
                    </div>
                </div>
                
                )}
               
             </div>
        )
    }
}

export default tasks
