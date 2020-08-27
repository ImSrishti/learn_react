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
    removeOne = (index) =>{
        
        
        const tempArray = [...this.props.data];
        tempArray.splice(index,1)
        
        console.log(index)
        this.props.setData(tempArray)
        
    }
    
    render() {
        return (
            <div className="taskopr0">
                
                <div className="taskopr">
                    <div><Tasks taskarr={this.props.data} setIndex={this.removeOne}/></div>
                 </div>
                 <div style={{"width" : "370px"}}>
                <div className="taskopr2">
                    <div><input style = {{"flexGrow":"2"}} type="text" value={this.state.tempdata} onChange={this.tempdataChange}/></div>
                    <div style = {{"flexGrow":"1"}} onClick={this.setTempData}>Add</div>
                    <div style = {{"flexGrow":"1"}} onClick={this.removeAll}>removeall</div>
                </div>
                </div>
                
            </div>
        )
    }
}

export default taskopr
