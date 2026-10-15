import React, { useState } from 'react'
import LoginButton from './Components/LoginButton'
import LogOutButton from './Components/LogOutButton'

const App = () => {
  const [loggin,setLoggin]=useState(true)
  function handleClick()
  {
    if(loggin)
      setLoggin(false)
    else
      setLoggin(true)
  }
  if(loggin)
  {
    return (
      <LogOutButton handleClick={handleClick}/>
    )
  }
  else
  {
    return (
      <LoginButton handleClick={handleClick}/>
    )
  }
  
}

export default App