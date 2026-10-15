import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from './Components/Home';
import About from './Components/About';
import Courses from './Components/Courses';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import ParamComp from './Components/ParamComp';
import Pythoncourse from './Components/Pythoncourse';
import JAVACourse from './Components/JAVACourse';
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
       <>
           <Navbar />
           <Home />
       </>  
    },
    {
      path:"/about",
      element:
      <>
           <Navbar />
           <About />
       </>  
    },
    {
       path:"/courses",
       element:
       <>
           <Navbar />
           <Courses />
       </> ,
       children:
       [
         {
            path:"pythoncourse",
            element:<Pythoncourse />
         },
         {
            path:"javacourse",
            element: <JAVACourse />
         }
       ]
    },
    {
       path:"/contact",
       element:
       <>
           <Navbar />
           <Contact/>
       </>  
    },
    {
      path:"/:id",
      element:
      <>
        <Navbar />
        <ParamComp/> 
      </>
    }
  ]
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App