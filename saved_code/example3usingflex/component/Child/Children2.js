import React, { Component } from 'react'

export class Children2 extends Component {
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

export default Children2
