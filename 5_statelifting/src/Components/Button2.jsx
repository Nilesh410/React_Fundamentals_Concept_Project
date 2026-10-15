import React from 'react'

const Button2 = (props) => {
  return (
    <div>
        <h1>Counter:{props.countvalue}</h1> 
        <button onClick={props.handleEvent}>Increment2</button>
    </div>
  )
}

export default Button2