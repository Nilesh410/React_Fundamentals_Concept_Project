import React, { createContext, useState, } from 'react'
import ChildA from './Components/ChildA'

//Step 1 Create a context
const UserContext=createContext()

const App = () => {
  //step 2 Create a data and pass the data 
  const [user,setUser]=useState({name:"Itview"})
  return (
    <div>

      //Step 3 provide the context 
      <UserContext.Provider value={user}>
          <ChildA />
      </UserContext.Provider>
    </div>
  )
}

export default App
export {UserContext}