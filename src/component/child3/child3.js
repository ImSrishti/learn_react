import React from 'react'
import '../childcss/child.css'
import {useParams} from "react-router-dom";

export default function Child3(){
  let { id } = useParams();
  return (
        <div className="child">
          {id} child3
        </div>
    )
}
