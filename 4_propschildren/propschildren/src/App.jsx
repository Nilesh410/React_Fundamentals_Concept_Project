import React, { useState } from 'react'
import Card from './Components/Card'
import Button from './Components/Button'
const App = () => {
 const [count,setCount] =useState(0)
 function handleClick()
 {
     setCount(count+1)
 }
  return (
    <div>
       <Button  handleClickEvent={handleClick} text="Increment">
              <h1>Count:{count}</h1> 
              <p>Counter Increment by:{count}</p>
       </Button>
    </div>
  )
}

export default App