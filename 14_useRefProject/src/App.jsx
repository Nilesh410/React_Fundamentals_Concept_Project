import React, { useEffect, useState,useRef} from 'react'

const App = () => {
  let value=useRef(0)
  let btnref =useRef()

  const [count,setCount]=useState(0)
  const handleIncrement=()=>{
     value.current=value.current+1
     console.log(value.current)
    setCount(count=>count+1)
  }
  useEffect(() => { 
    console.log("Component is re render") 
  })
  const handleColorChange=()=>{
      btnref.current.style.backgroundColor='red'
  }
  
  return (
    <div className='container'>
        <p>Count:{count}</p>
        <button ref={btnref} onClick={handleIncrement}>Increment</button>
        <div>
           <button onClick={handleColorChange}>Change Color</button>
        </div>
    </div>
  )
}

export default App