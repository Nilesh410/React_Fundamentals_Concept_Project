import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0)
  return (
    <div className="counter-container">
        <h1 className='counter-header'>Counter:{count}</h1>
        <p className='counter-p'>You have clicked {count} times</p>
        <button className='counter-btn'onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Counter