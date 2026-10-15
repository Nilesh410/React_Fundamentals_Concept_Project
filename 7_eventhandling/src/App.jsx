import React from 'react'

const App = () => {
  const handleClickEvent=()=>
  {
     alert("Button is Clicked Now")
  }
  const handleMouseOverEvent=()=>{
    alert("Mouse is coming on the para")
  }
  const onChangeEvent=(e)=>{
    console.log(e.target.value)
  }
  const handleSubmitEvent=(e)=>{
    e.preventDefault()
    alert("Are you want to submit this form, Once it will submit you cant change the data")
  }
  return (
    <>
      {/* <button onClick={()=>alert("Button is Clicked Now")}>Click Me</button> */}
      <button onClick={handleClickEvent}>Click Me</button>
      {/* <p onMouseOver={handleMouseOverEvent}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, earum?</p> */}
      {/* <form onSubmit={handleSubmitEvent}>
          <input onChange={onChangeEvent} type="text" />
          <button>Submit</button>
      </form> */}
      
    </>
  )
}

export default App