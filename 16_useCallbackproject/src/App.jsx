import React, { useCallback, useEffect, useState} from 'react'
import ChildComponent from './component/ChildComponent'

const App = () => {
  const [count,setCount]=useState(0)
 
  const handleIncrement=useCallback(
    () => {
     setCount(count=>count+1)
    },
    [count]
  )

  useEffect(() => { 
    console.log("Component is re render") 
  })
  
  
  return (
    <div className='container'>
        <div>
          <p>Count:{count}</p>
          <button onClick={handleIncrement}>Increment</button>
        </div>
        <div>
          <ChildComponent buttonName="ChildComp" handleClick={handleIncrement} />
        </div>
        
    </div>
  )
}

export default App