import React from 'react'

const LoginButton = (props) => {
  return (
    <div>
        <button onClick={props.handleClick}>Login</button>
    </div>
  )
}

export default LoginButton