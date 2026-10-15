import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <h2>{props.username}</h2>
        <p>{props.role}</p>
        <span>Exp:{props.exp}</span>
        <button>View Profile</button>
    </div>
  )
}

export default Card