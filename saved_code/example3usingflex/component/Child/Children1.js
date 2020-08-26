import React, { Component } from 'react'
import './children.css'
export class Children1 extends Component {
    onClickHandler=() =>{
        this.props.click(this.props.data)
    }
    render() {
        return (
            <div className="children" onClick={this.onClickHandler}>
             {this.props.data}   
            </div>
        )
    }
}

export default Children1
