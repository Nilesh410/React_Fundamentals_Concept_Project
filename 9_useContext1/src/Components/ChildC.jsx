import React, { useContext } from 'react'
import { UserContext } from '../App'

const ChildC = () => {
   
 //step 4 consume the context 
 const user=useContext(UserContext)
  return (
    <div>
        <h1>
           {user.name}
        </h1>
    </div>
  )
}

export default ChildC