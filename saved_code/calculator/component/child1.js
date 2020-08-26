import React, { Component } from 'react';

class Child1 extends Component {
  handleOnClick = ()=>{
    this.props.xyz(this.props.data)
  }
  
  render() {
    return (
    <div onClick={this.handleOnClick} style={
        {
          "width": 50,
          "height": 50,
          "display": "table-cell",
          "verticalAlign": "middle",
          "textAlign": "center",
          "border": 2,
          "borderStyle": "solid"
        }}>
        {this.props.data}
      </div>
    );
  }
}

export default Child1;