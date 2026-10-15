import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {incrementByAmount} from '../features/counter/counterSlice'

const IncrementByValue = () => {
    const [amount,setAmount]=useState(0)
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
    const handleIncrementByValue=()=>{
        dispatch(incrementByAmount(amount))
    }
  return (
    <div className='value-section'>
        <input 
           type="number"
            value={amount} 
            placeholder='Enter the value to increment'
            onChange={(e)=>setAmount(e.target.value)}
           />
           <p className='counter-section'>Counter:{count}</p>
            <br/>  
            <button onClick={handleIncrementByValue}>Increment By Value</button>
    </div>
  )
}

export default IncrementByValue