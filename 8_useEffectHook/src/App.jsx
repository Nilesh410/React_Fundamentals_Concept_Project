import React from 'react'
import { useState } from 'react'

import { useEffect } from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  const handleClickEvent=()=>{
        setCount(count+1)
        console.log(count)
         }
  //1. On every rendering of page, effect will be run
  // useEffect(() => {
  //   alert("I will be run on every rendering App Component")
  //   })

  //2. Effect will be run on only first time the rendering
    // useEffect(() => {
    // alert("I will be run on first rendering App Component")
    // },[])

  //3. Effect will be run on specific condition
    useEffect(() => {
    alert("I will be run when count will be change")
    },[count])
  
  return (
   <>
       <h1>Counter:{count}</h1>
      <button onClick={handleClickEvent}>Increment</button>
   </>
  )
}

export default App