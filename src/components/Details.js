import React from 'react'
import { useSelector } from "react-redux";

import { useParams} from "react-router-dom"

export default function Details() {
    let params = useParams()
    const { likeddata } = useSelector((state) => state.liked);
    const detaildata = likeddata[params.id]
  
 return (
    <div className='detail'>
      <h1>{detaildata.title}</h1>
      <img src={detaildata.url} className="imagepod" alt={detaildata.title}/>
      <h2>Captured on:{detaildata.date}</h2>
      <h3>{detaildata.copyright}</h3>
      <p>{detaildata.explanation}</p>

    </div>
  )
}
