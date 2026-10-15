import React from 'react'

const Users = () => {
    const arr=[
        {username:"Sandeep",role:"software engineer",exp:"20 Years"},
        {username:"sanket",role:"Design Engineer",exp:"25 Years"},
        {username:"sachin",role:"Software Architecture",exp:"30 Years"}]
  return ( 
      <div className='users'>
        {
            arr.map((ele)=>{ return (
               <>
                 <h2>{ele.username}</h2>
                 <h3>{ele.role}</h3>
                 <p>{ele.exp}</p>
               </>
            )
            })
        }
      </div>
    
  )
}

export default Users