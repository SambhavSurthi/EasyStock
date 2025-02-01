import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './components/home/Homepage'
import SignUp from './components/home/SignUp'
import SignIn from './components/home/SignIn'
import NotFound from './components/NotFound'


const router=createBrowserRouter(
    [
        {
            path:'*',
            element:<NotFound/>
        },
        {
            path:"/",
            element:<Homepage />
        },
        {
            path:"/signup",
            element:<SignUp/>
        },
        {
            path:"/signin",
            element:<SignIn />
        }

        
    ]
)

const Routing = () => {
  return (
    <div>
        <RouterProvider router={router}/>

    </div>
  )
}

export default Routing