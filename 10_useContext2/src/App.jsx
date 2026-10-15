import React, { createContext, useState } from 'react'
import ChildA from './Components/ChildA'

const ThemeContext=createContext()

const App = () => {
 const [theme,setTheme]=useState('light')
  return (
    <div>
      <ThemeContext.Provider value={{theme,setTheme}}>
          <div id='container' style={{backgroundColor: theme==='light'? 'beige':'black' }}>
             <ChildA />
          </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
export {ThemeContext}