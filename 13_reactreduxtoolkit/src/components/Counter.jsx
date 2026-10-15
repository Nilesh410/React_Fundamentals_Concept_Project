import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment,decrement,reset} from '../features/counter/counterSlice'


const Counter = () => {

  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  const handleIncrement=()=>{
      dispatch(increment())
  }
  const handleDecrement=()=>{
      dispatch(decrement())
  }
  const handleReset=()=>{
    dispatch(reset())
  }
  return (
    <div className='container'>
        <div className='counter-section'>
            <button onClick={handleIncrement}>+</button>
            <p className='count-section'>Count:{count}</p>
            <button onClick={handleDecrement}>-</button>
            
        </div>
        <div className='reset-section'>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default Counter