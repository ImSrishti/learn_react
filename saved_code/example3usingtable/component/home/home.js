import React, { Component } from 'react';
import './home.css'
import Child1 from '../Child/Children1';
import Child2 from '../Child/Children2';
import Child3 from '../Child/Children3';
import Child4 from '../Child/Children4';


class Home extends Component {
  state={
    title:'',
    title1:''
  }

  onChangeHandler= (event)=>{
    this.setState({
      title1: event.target.value
    })
  }

  titleChangeHandler = ()=>{
    this.setState({
      title: this.state.title1
    })
  }

  buttonClickHandler = (data1) =>{
      this.setState({
        title: data1
      })
  }
  render() {
    return (
      <div style={{ "width": "400px" }}>
        <table className="table">
          <thead>
            <tr><td colSpan="2">
              <input type="text" className="inputBox" onChange={this.onChangeHandler}/>
              </td>
              <td>
                <button  className="button" onClick={this.titleChangeHandler}>
                    Enter
                </button>
              </td>

            </tr>
            <tr>
              <td><Child1 click={this.buttonClickHandler} data="A"/></td>
              <td><Child2 click={this.buttonClickHandler} data="B"/></td>
              <td rowSpan="2" className="td1">{this.state.title}</td>
            </tr>
            <tr>
              <td><Child3 click={this.buttonClickHandler} data="C"/></td>
              <td><Child4 click={this.buttonClickHandler} data="D"/></td>
            </tr>
          </thead>
        </table>

      </div>

    );
  }

}

export default Home;