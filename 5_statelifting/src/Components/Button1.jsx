import React, { useEffect } from 'react'

import { useState } from 'react'

const Button1 = (props) => {
  
  
  return (
    <div>
        <h1>Counter:{props.countvalue}</h1>       
        <button onClick={props.handleEvent} >Increment1</button>
    </div>
  )
}

export default Button1