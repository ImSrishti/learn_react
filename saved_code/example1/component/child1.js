import React, { Component } from 'react';

class Child1 extends Component {
  render() {
    return (
        <p>{this.props.data}</p>
    );
  }
}

export default Child1;