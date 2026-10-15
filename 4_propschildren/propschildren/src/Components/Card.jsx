import React from 'react'

const Card = (props) => {
  return (
    <>
        <h1>{props.username}</h1>
        <p>{props.title}</p>
        <p>{props.children}</p>
    </>
  )
}

export default Card