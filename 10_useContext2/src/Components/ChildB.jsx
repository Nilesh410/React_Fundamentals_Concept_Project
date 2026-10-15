import React,{ useContext } from 'react'
import { ThemeContext } from '../App'
import ChildC from './ChildC'

const ChildB = () => {
    const {theme,setTheme}=useContext(ThemeContext)
  const handleClick=()=>{
    if(theme=='light')
        setTheme('dark')
    else
        setTheme('light')
  }
  return (
    <div>
        <ChildC />
        <button onClick={handleClick}>
            Change Theme
        </button>
    </div>
  )
}

export default ChildB