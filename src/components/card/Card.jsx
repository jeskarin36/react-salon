import React from 'react'
import "./Card.css"

function Card({title,Image}) {
  {if(title!=""){
    return (
        <div className='app__card'>
             <h3>{title}</h3>
            <button>Nuestros servicios →</button>
        </div>
      )
  } else{
    return (
        <div className='app__card ce'>
            <img src={Image} alt="" />
        </div>
      )
  }}
}

export default Card
