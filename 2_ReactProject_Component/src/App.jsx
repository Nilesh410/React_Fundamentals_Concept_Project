import React from "react";
import Card from "./Components/Card";
import Users from "./Components/Users";

const App = () => {
  const userinfo=[
        {username:"Sandeep",role:"software engineer",exp:"20 Years"},
        {username:"sanket",role:"Design Engineer",exp:"25 Years"},
        {username:"sachin",role:"Software Architecture",exp:"30 Years"}]
  return (
    <div className="parent">
      {/* <div className="parent">
        <h1>child1</h1>
        <h1>child2</h1>
      </div>
      <div className="uncle">
        <h1>child3</h1>
        <h1>child4</h1>
      </div> */}
      
     
   {/*   <Card username='Sachin Patil'
           role='Senior Software Engineer'
           exp='20 Years'/>
          
    <Card username='Kiran More'
           role='Design Engineer'
           exp='24 Years'/>
           
    <Card username='Sandesh Kamat'
           role='Software Architecture'
           exp='30 Years'/> */}
    {/* <Users /> */}

    {userinfo.map((person)=>{
        return(
          <Card username={person.username}
           role={person.role}
           exp={person.exp}/>
        )
    })}
    

    </div>
  );
};

export default App;
