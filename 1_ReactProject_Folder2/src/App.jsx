
import React from 'react'
import Card from './Components/Card'
import Users from './Components/Users'
import userinfo from './Components/Userinfo'
const App = () => {
 
  return (
    <>
      <div className="parent">
        {/* <Card 
          imageurl="https://img.magnific.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?semt=ais_hybrid&w=740&q=80"
          user="Manish" 
          role="Senior Developer" 
          exp="20 Years" 
        />
        <Card 
          imageurl="https://img.magnific.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?semt=ais_hybrid&w=740&q=80"
          user="Rakesh Malhotra" 
          role="Design Engineer" 
          exp="26 Years" />
        */}
        {
          userinfo.map((user)=>{
            return (
              <Card 
                 imageurl={user.imageurl}
                 user={user.username}
                 role={user.role} 
                 exp={user.exp}
                />
            )
          })
        }
      </div>
    </>
  )
}

export default App