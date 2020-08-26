import React, { Component } from 'react';
import './home.css'
import Child1 from '../Child/Children1';
import Child2 from '../Child/Children2';
import Child3 from '../Child/Children3';
import Child4 from '../Child/Children4';


class Home extends Component {
  state = {
    title: '',
    title1: ''
  }

  onChangeHandler = (event) => {
    this.setState({
      title1: event.target.value
    })
  }

  titleChangeHandler = () => {
    this.setState({
      title: this.state.title1
    })
  }

  buttonClickHandler = (data1) => {
    this.setState({
      title: data1
    })
  }
  render() {
    return (
      <div>

        <input type="text" className="inputBox" onChange={this.onChangeHandler} />

        <button className="button" onClick={this.titleChangeHandler}>
          Enter
        </button>
        
        <div className="flex-container">
        <div> <Child1 click={this.buttonClickHandler} data="A" /></div>
        <div><Child2 click={this.buttonClickHandler} data="B" /></div>
        <div> <Child3 click={this.buttonClickHandler} data="C" /></div>
        <div>  <Child4 click={this.buttonClickHandler} data="D" /></div>
        <div className="td1">{this.state.title}</div>
        </div>
        
       
      </div>

    );
  }

}

export default Home;