import React, { Component } from 'react'
import Tasks from '../tasks/tasks'
import './taskopr.css'
export class taskopr extends Component {
    state={
        tempdata:''
    }
    tempdataChange =(event) =>{
        this.setState({
            tempdata:event.target.value
        })
    }
    setTempData = ()=>{
        if(this.state.tempdata !== ''){
        const tempArray = [...this.props.data];
        tempArray.push(this.state.tempdata)
        this.props.setData(tempArray)
        }
    }
    removeAll = () =>{
        const tempArray = [];
        this.props.setData(tempArray)
    }
    
    render() {
        return (
            <div className="taskopr0">
                
                <div className="taskopr">
                    <div><Tasks taskarr={this.props.data}/></div>
                 </div>
                <div className="taskopr2">
                    <div><input type="text" value={this.state.tempdata} onChange={this.tempdataChange}/></div>
                    <div onClick={this.setTempData}>Add</div>
                    <div onClick={this.removeAll}>removeall</div>
                </div>
                
            </div>
        )
    }
}

export default taskopr
