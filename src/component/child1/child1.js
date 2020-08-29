import React from 'react'
import '../childcss/child.css'
import {useParams} from "react-router-dom";

export default function Child1(){
  
  let { id } = useParams();
  
  return (
      <div>
        <div className="child">
          {id} : child1
        </div>
      </div>
    )
}