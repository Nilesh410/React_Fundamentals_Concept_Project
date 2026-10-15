import React from 'react'
import Button1 from './Components/Button1'
import Button2 from './Components/Button2'
import { useState } from 'react'

const App = () => {
const [count,setCount]=useState(0)
  function handleClick()
  {
    setCount(count+1)
  }

  return (
    <div>
        <h1>Counter From Parent:{count}</h1>
        <Button1 countvalue={count} handleEvent={handleClick} />
        <Button2 countvalue={count} handleEvent={handleClick} />
    </div>
  )
}
export default App