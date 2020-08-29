import React from 'react'
import '../childcss/child.css'
import {useParams} from "react-router-dom";

export default function Child2(){
  let { id } = useParams();
  return (
      <div>
        <div className="child">
        {id} child2
        </div>
      </div>
    )
}