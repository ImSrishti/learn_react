import React from 'react'
import './inputbox.css';

export default function Inputbox(props){
    
  const inputChange = (event) =>{
    let temp = ''
     temp = event.target.value
     props.click(temp)
  }
  return (
        <div className="inputbox">
          <input className="input0" type="text" onChange={inputChange}/>
        </div>
    )
}