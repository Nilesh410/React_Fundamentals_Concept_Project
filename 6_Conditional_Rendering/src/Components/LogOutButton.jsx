import React from 'react'

const LogOutButton = (props) => {
  return (
    <div>
        <button onClick={props.handleClick}>LogOut</button>
    </div>
  )
}

export default LogOutButton