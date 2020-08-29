import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Inputbox from '../inputbox/inputbox.js'
import './nav.css'

export default function Nav() {
  
  const [inputText, setinputText] = useState('1');

  const setInputTextMethod = (data) => {
    setinputText(data);
  }

  const path1 = "/child1/" + inputText
  const path2 = "/child2/" + inputText
  const path3 = "/child3/" + inputText
  const path4 = "/child4/" + inputText

  return (
    <div className="nav">
      <Inputbox click={setInputTextMethod} />
      <div>
        <ul className="links">
          <li className="list"><Link to={path1}>child1</Link></li>
          <li className="list"><Link to={path2}>child2</Link></li>
          <li className="list"><Link to={path3}>child3</Link></li>
          <li className="list"><Link to={path4}>child4</Link></li>
        </ul>
      </div>
    </div>
  )
}