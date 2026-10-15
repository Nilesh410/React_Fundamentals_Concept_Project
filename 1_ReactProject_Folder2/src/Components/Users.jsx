import React from 'react'


const Users = () => {
  const arr=["Manish","Sagar","Rakesh","Udit"]
  return (
    <>
        <h1>{arr[0]}</h1>
        <h1>{arr[1]}</h1>
        <h1>{arr[2]}</h1>
        <h1>{arr[3]}</h1>
        {arr.map(
            (ele)=>{
                return ele
            }
        )}
    </>
  )
}

export default Users