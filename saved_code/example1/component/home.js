import React, { Component } from 'react';
import Child1 from './child1'
import Child2 from './child2'
import Child3 from './child3'
import Child4 from './child4'


class Home extends Component {
  state={
    parent_value:'',
    child_value:''

  }
  onChangeHandler = (e)=>{
    this.setState({parent_value:e.target.value})
  }
  onClickHandler = () =>{
    this.setState({child_value:this.state.parent_value})
  }
  
  render() {
    return (
      <div>
        <input value={this.state.parent_value} onChange={this.onChangeHandler}></input>
        <button onClick={this.onClickHandler}>Click me</button>
        <Child1 data={this.state.child_value}/>
        <Child2 data={this.state.child_value}/>
        <Child3 data={this.state.child_value}/>
        <Child4 data={this.state.child_value}/>
      </div>
    );
  }
}

export default Home;