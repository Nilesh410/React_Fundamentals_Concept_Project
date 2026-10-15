import React, { useEffect, useState,useMemo} from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  const [input,setInput]=useState(1)
  const handleIncrement=()=>{
     
    setCount(count=>count+1)
  }
  useEffect(() => { 
    console.log("Component is re render") 
  })
  
  // const expensiveTask=(input)=>{
  //   console.log("We are in expensive task")
  //   for(let i=1;i<100;i++)
  //   { }
  //    setInput(input*2);
  //    return input
  // }

  // let value=useMemo(() => {expensiveTask(input)}, [input])

  return (
    <div className='container'>
        <div>
          <p>Count:{count}</p>
          <button onClick={handleIncrement}>Increment</button>
        </div>
        <div>
           <input 
                type="number" 
                placeholder='Enter the number'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
           <p>Value:{value}</p>
        </div>
        
    </div>
  )
}

export default App