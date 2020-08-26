import React, { Component } from 'react';
import Child1 from './child1'

class Home extends Component {

  state = {
    value: '',
    left: '',
    right: '',
    opr: ''
  }

  changeState = (x) => {
    if (x === 'clr') {
      this.setState({
        value: '',
        left: '',
        right: '',
        opr: ''
      })
    }
    else if (x !== "=") {

      this.setState({
        value: this.state.value + x
      })
      if (x === '+' || x === '-' || x === '*' || x === '/') {
        this.setState({
          opr: x
        })
      }

      else if (this.state.opr === '') {
        this.setState({
          left: this.state.left + x
        })
      }
      else if (this.state.opr != '') {
        this.setState({
          right: this.state.right + x
        })
      }
    }
    else {
      if (this.state.opr === '+') {
        this.setState({
          value: Number(this.state.left) + Number(this.state.right),
          left: '',
          right:'',
          opr:''
        })
      }
      else if (this.state.opr === '-') {
        this.setState({
          value: Number(this.state.left) - Number(this.state.right),
          left: '',
          right:'',
          opr:''
        })
      }
      else if (this.state.opr === '*') {
        this.setState({
          value: Number(this.state.left) * Number(this.state.right),
          left: '',
          right:'',
          opr:''
        })
      }
      else if (this.state.opr === '/') {
        this.setState({
          value: Number(this.state.left) / Number(this.state.right),
          left: '',
          right:'',
          opr:''
        })
      }
     
    }

  }

  render() {

    return (
      <div>

        <table>
          <thead>
            <tr><td colSpan="2"><input value={this.state.value} style={{ "height": '45px' }} onChange={() => { }} type="text" /></td>
              <td><Child1 xyz={this.changeState} data='=' /></td></tr>
            <tr>
              <td><Child1 xyz={this.changeState} data='1' /></td>
              <td><Child1 xyz={this.changeState} data='2' /></td>
              <td><Child1 xyz={this.changeState} data='3' /></td>
            </tr>
            <tr>
              <td><Child1 xyz={this.changeState} data='4' /></td>
              <td><Child1 xyz={this.changeState} data='5' /></td>
              <td><Child1 xyz={this.changeState} data='6' /></td></tr>
            <tr>
              <td><Child1 xyz={this.changeState} data='7' /></td>
              <td><Child1 xyz={this.changeState} data='8' /></td>
              <td><Child1 xyz={this.changeState} data='9' /></td>
            </tr>
            <tr>
              <td><Child1 xyz={this.changeState} data='+' /></td>
              <td><Child1 xyz={this.changeState} data='0' /></td>
              <td><Child1 xyz={this.changeState} data='-' /></td>
            </tr>
            <tr>
              <td><Child1 xyz={this.changeState} data='*' /></td>
              <td><Child1 xyz={this.changeState} data='/' /></td>
              <td><Child1 xyz={this.changeState} data='clr' /></td>
            </tr>
          </thead>
        </table>

      </div>
    );
  }
}

export default Home;