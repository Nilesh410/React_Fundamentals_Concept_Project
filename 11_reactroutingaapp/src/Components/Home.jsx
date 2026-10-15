import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();
  function handleClickEvent()
  {
      navigate("/about")
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClickEvent}>Go to About Page</button>
    </div>

  )
}

export default Home