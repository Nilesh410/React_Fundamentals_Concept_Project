import React from 'react'

const Card = (props) => {
  return (

    <div className="card">
        <img src={props.imageurl} alt="" />
        <div className="middle">
            <h2>{props.user}</h2>
            <p>{props.role}</p>
            <span>Exp:{props.exp}</span>
        </div>
        <div className="bottom">
            <button>View Profile</button>
        </div>
        
    </div>
   
  )
}

export default Card